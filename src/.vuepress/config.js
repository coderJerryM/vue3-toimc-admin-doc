const viteImagemin = require('vite-plugin-imagemin')
const sidebar = require('./configs/sidebar')
const navbar = require('./configs/navbar')

const configs = {
  // 站点配置
  lang: 'zh-CN',
  title: 'vue-toimc-admin',
  description:
    'vue-toimc-admin 目标是为中大型项目开发，提供现成的开箱解决方案及丰富的示例',
  base: '/vue3-toimc-admin-doc/',
  dest: `${process.cwd()}/dist`, // 输出目录

  head: [
    ['link', { rel: 'manifest', href: 'manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],

  // 使用vite构建
  bundler: '@vuepress/bundler-vite',

  // Vite 打包工具的配置项
  bundlerConfig: {
    viteOptions: {
      plugins: [
        viteImagemin({
          gifsicle: {
            optimizationLevel: 7,
            interlaced: false
          },
          optipng: {
            optimizationLevel: 7
          },
          mozjpeg: {
            quality: 20
          },
          pngquant: {
            quality: [0.8, 0.9],
            speed: 4
          },
          svgo: {
            plugins: [
              {
                name: 'removeViewBox'
              },
              {
                name: 'removeEmptyAttrs',
                active: false
              }
            ]
          }
        })
      ]
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
      '@vuepress/plugin-pwa',
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
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-disable-url-encode'))
    }
  },

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/toimc-logo.png',
    navbar,
    sidebar,
    sidebarDepth: 3, // 侧边栏显示深度，默认为1，最大为3，可以显示当前级别以及子级别
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',

    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接'
    ],
    backToHome: '返回首页',

    // a11y
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换模式',
    toggleSidebar: '切换侧边栏',
    docsDir: 'src'
  }
}

module.exports = configs
