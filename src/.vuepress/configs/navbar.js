const navbar = [
  { text: '指南', link: '/guide/guide/' },
  {
    text: '组件',
    link: '/components/',
    children: [
      {
        text: '图标',
        link: '/components/icon'
      },
      {
        text: '表单',
        link: '/components/form'
      }
    ]
  },
  { text: '示例', link: '/views/' },
  { text: '工具集', link: '/tools/' },
  {
    text: '关于',
    children: [
      {
        text: '文档贡献',
        children: [
          '/about/contribute/docs/guide.md',
          '/about/contribute/docs/standard.md'
        ]
      },
      { text: '贡献代码', children: ['/about/contribute/code/index.md'] }
    ]
  },
  { text: 'Github', link: 'https://github.com/toimc-team/vue3-toimc-admin' }
]

module.exports = navbar
