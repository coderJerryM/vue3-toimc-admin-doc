/**
 * dir, 项目路径
 * ops:参数
 * isRoot 是否根路径
 * root 根路径
 */
const { genSliderBarConfig } = require('../utils/index')
const sliderBarOptions = {
  hasSub: true,
  exclude: ['README.md', 'assets', '.DS_Store', 'docs', 'images']
}
const sidebar = {
  collapsable: false,
  '/sys/': [
    {
      text: '菜单配置',
      children: genSliderBarConfig('sys', {
        ...sliderBarOptions,
        hasSub: false
      })
    }
  ],
  '/guide/': [
    {
      text: '指南',
      children: ['/guide/guide/', '/guide/guide/get-start']
    },
    {
      text: '深入',
      children: ['/guide/advanced/i18n', '/guide/advanced/theme']
    },
    { text: '其他', link: '/guide/other/' }
  ],

  '/views/': [{ text: '示例', children: ['/views/'] }],
  '/components/': [
    { text: '表单', link: '/components/form' },
    { text: '日历', link: '/components/calendar' }
  ],
  '/tools/': [
    {
      text: 'Hooks',
      children: ['/tools/useI18n', '/tools/useLocale', '/tools/useWatermark']
    }
  ]
}

module.exports = sidebar
