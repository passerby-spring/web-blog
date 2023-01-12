import 'uno.css'
import '@/styles/base.css'
import '@/styles/article.css'
import 'highlight.js/styles/night-owl.css'

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from '~pages'

export const createApp = ViteSSG(
  App,
  { routes },
)
