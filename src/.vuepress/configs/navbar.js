const navbar = [
  { text: '指南', link: '/guide/guide/' },
  {
    text: '组件',
    link: '/components/icon'
  },
  { text: '示例', link: '/views/dashboard/dashboard' },
  { text: '工具集', link: '/tools/useI18n' },
  {
    text: '关于',
    children: [
      {
        text: '文档贡献',
        children: [
          '/about/contribute/docs/guide',
          '/about/contribute/docs/standard',
          '/about/contribute/code/env',
          '/about/contribute/code/pr'
        ]
      }
    ]
  },
  { text: '支持&反馈', link: '/about/contacts' },
  { text: 'Github', link: 'https://github.com/toimc-team/vue3-toimc-admin' }
]

module.exports = navbar
