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
    {
      text: '基础组件',
      children: ['/components/icon', '/components/form', '/components/table']
    },
    {
      text: '选择器',
      children: ['/components/select/area', '/components/select/city']
    },
    {
      text: '菜单',
      children: genSliderBarConfig(
        'components/menu',
        sliderBarOptions,
        true,
        '/components/'
      )
    },
    {
      text: '动态展示',
      children: [
        '/components/dynamic/trends',
        '/components/dynamic/progress',
        '/components/dynamic/numbers',
        '/components/dynamic/slider',
        '/components/dynamic/password'
      ]
    },
    {
      text: '通知&分享',
      children: [
        '/components/notice/menu',
        '/components/notice/qrcode',
        '/components/notice/copy'
      ]
    },
    {
      text: '功能',
      children: [
        '/components/func/transition',
        '/components/func/crop',
        '/components/func/download',
        '/components/func/print',
        '/components/func/i18n',
        '/components/func/waterprint'
      ]
    },
    {
      text: '编辑器',
      children: [
        '/components/editor/toast-ui',
        '/components/editor/vditor',
        '/components/editor/milkdown'
      ]
    },
    {
      text: '展示',
      children: [
        '/components/display/desc',
        '/components/display/card',
        '/components/display/calendar',
        '/components/display/waterfall'
      ]
    },
    {
      text: '小组件',
      children: [
        '/components/sole/calendar-card',
        '/components/sole/weather',
        '/components/sole/count-down'
      ]
    }
  ],
  '/tools/': [
    {
      text: 'Hooks',
      children: ['/tools/useI18n', '/tools/useLocale', '/tools/useWatermark']
    }
  ],
  '/about': [
    {
      text: '参与贡献',
      children: [
        '/about/contribute/docs/guide',
        '/about/contribute/docs/standard'
      ]
    },
    {
      text: 'PR教程',
      children: ['/about/contribute/code/env', '/about/contribute/code/pr']
    }
  ]
}

module.exports = sidebar
