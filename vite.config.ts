import { URL, fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import matter from 'gray-matter'
import AutoImport from 'unplugin-auto-import/vite'
import VueComponents from 'unplugin-vue-components/vite'
import VueMarkDown from 'vite-plugin-vue-markdown'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
          reactivityTransform: true,
        }),
      },
    }),
    Pages({
      extensions: ['vue', 'md'],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = readFileSync(path, 'utf-8')
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })

        return route
      },
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
      ],
      vueTemplate: true,
    }),
    VueComponents({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.md$/],
    }),
    VueMarkDown({
      headEnabled: true,
      wrapperClasses: 'article',
    }),
  ],
  server: {
    port: 3030,
    open: true,
  },
})
