const navbar = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/' },
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
  { text: '在线预览', link: 'https://github.com/toimc-team/vue3-toimc-admin' },
  { text: 'Github', link: 'https://github.com/toimc-team/vue3-toimc-admin' }
]

module.exports = navbar
