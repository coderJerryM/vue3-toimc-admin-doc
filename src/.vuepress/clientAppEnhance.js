import { defineClientAppEnhance } from '@vuepress/client'

// 自定义 css
import './index.scss'

const noop = () => {}

export default defineClientAppEnhance(noop)
