const sidebar = {
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
  '/views/': [{ text: '示例', link: '/views/' }],
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
