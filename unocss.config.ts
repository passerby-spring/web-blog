import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  shortcuts: [
    ['header-logo', 'cursor-pointer font-italic bg-gradient-to-r from-green-5 via-blue-5 to-violet-5 bg-clip-text text-transparent'],
  ],
})
