const navbar = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/' },
  { text: '常用hook', link: '/hooks/' },
  { text: '关于', link: '/about/' },
  {
    text: '预览',
    link: 'https://github.com/toimc-team/vue3-toimc-admin-doc'
  },
  { text: 'Github', link: 'https://github.com/toimc-team/vue3-toimc-admin' }
]
const sidebar = [{ '/components/': [{ text: '', link: '/' }] }]

const configs = {
  // 站点配置
  lang: 'zh-CN',
  title: 'vue-toimc-admin',
  description:
    'vue-toimc-admin 目标是为中大型项目开发，提供现成的开箱解决方案及丰富的示例',
  base: '/vue3-toimc-admin-doc/',
  dest: `${process.cwd()}/dist`, // 输出目录
  sidebarDepth: 3, // 侧边栏显示深度，默认为1，最大为3，可以显示当前级别以及子级别
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdate: '上次更新',
  editLink: true,
  editLinkText: '在 GitHub 上编辑此页',
  docsDir: 'src',

  head: [
    ['link', { rel: 'manifest', href: 'manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],

  // 使用vite构建
  bundler: '@vuepress/bundler-vite',

  // Vite 打包工具的配置项
  bundlerConfig: {
    viteOptions: {
      plugins: []
    }
  },

  // 插件
  plugins: [
    [
      '@vuepress/container',
      '@vuepress/plugin-external-link-icon',
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-google-analytics',
      '@vuepress/plugin-medium-zoom',
      '@vuepress/plugin-nprogress',
      '@vuepress/plugin-register-components',
      '@vuepress/pwa',
      ['@vuepress/plugin-pwa'],
      '@vuepress/plugin-pwa-popup',
      '@vuepress/plugin-prismjs',
      '@vuepress/plugin-shiki',
      '@vuepress/plugin-theme-data',
      [
        '@vuepress/plugin-search',
        {
          locales: {
            '/': {
              placeholder: '搜索'
            }
          },
          // 排除首页
          isSearchable: page => page.path !== '/',
          // 允许搜索 Frontmatter 中的 `tags`
          getExtraFields: page => page.frontmatter.tags ?? []
        }
      ]
    ]
  ],

  // markdown
  markdown: {
    code: {
      lineNumbers: false // 不显示行号
    }
  },

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/logo.jpeg',
    navbar,
    sidebar
  }
}

module.exports = configs
