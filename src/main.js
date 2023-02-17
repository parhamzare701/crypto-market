import { createApp } from 'vue'
import App from '@/App'
import router from "@/router/index"
import i18n from './locales/i18n'
import './index.css'

createApp(App).use(router).use(i18n).mount('.app');