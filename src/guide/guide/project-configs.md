# 项目配置

## 主题配置
> src 文件夹下找到 theme.config.ts 文件，此文件为项目整体的主题配置
```js
/**
 * 导出默认主题配置
 */
const sysTheme = {
  // 'siderbar' 左侧菜单 | 'mix' 左侧+顶部菜单 | 'top' 顶部菜单 | 'mixbar' 双列菜单
  layout: 'siderbar',
  // 固定头部
  fixHeader: true,
  // 暗黑模式
  darkMode: false,
  // 主题颜色
  primaryColor: '#409eff',
  // 菜单宽度
  menuWidth: '266px',
  // 显示tab page
  tabPage: true
}
```

## 环境变量配置
项目的环境变量配置在根目录下，以三种环境配置为主。

```
├── .env                                                    # 基础环境变量
├── .env.development                                        # 开发环境变量
├── .env.production                                         # 生产环境变量
```
## 配置解读
内置10个环境变量`VITE_USE_MOCK`、`VITE_PUBLIC_PATH`、`VITE_PROXY`、`VITE_DROP_CONSOLE`、`VITE_HTTPS`、`VITE_GLOB_API_URL`、`VITE_GLOB_UPLOAD_URL`、`VITE_GLOB_API_URL_PREFIX`、`VITE_GLOB_APP_TITLE`、`VITE_GLOB_APP_SHORT_NAME`

```env
# 项目本地运行端口号
VITE_PORT = 5500

# spa-title
VITE_GLOB_APP_TITLE = Vue Toimc Admin

# spa shortname
VITE_GLOB_APP_SHORT_NAME = vue_toimc_admin

# 是否开启mock
VITE_USE_MOCK = true

# 开发环境读取配置文件路径
VITE_PUBLIC_PATH = /

# 开发环境代理
VITE_PROXY = /api

# https配置
VITE_HTTPS = false

# 是否删除项目中console
VITE_DROP_CONSOLE = false

# 文件上传目录
VITE_GLOB_UPLOAD_URL = /upload

# 接口前缀 
VITE_GLOB_API_URL_PREFIX

# 是否启用图像压缩
VITE_USE_IMAGEMIN= true

# 使用 pwa
VITE_USE_PWA = false

# 是否与旧版浏览器兼容
VITE_LEGACY = false
```


## 用法
在 vue 或 ts 文件中使用 vite 代码
```js
// vite.config.ts
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  // loadEnv读取的布尔类型是一个字符串。这个函数可以转换为布尔类型
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE, VITE_HTTPS, VITE_USE_MOCK } = viteEnv
}
```

> 更多用法请查看 [vite.config.ts](https://github.com/toimc-team/vue3-toimc-admin/blob/main/vite.config.ts)

## script 配置

```json
// package.json 代码
"scripts": {
    "dev": "vite", // 运行项目
    "serve": "npm run dev", // 运行项目
    "build:emit": "vue-tsc --noEmit && vite build", // 构建项目
    "build": "vite build", // 构建项目
    "report": "rimraf dist && vite build", // 删除dist后 构建项目
    "preview": "npm run build && vite preview", // 运行并预览
    "preview:dist": "vite preview", // 预览构建后的项目
    "log": "conventional-changelog -p angular -i CHANGELOG.md -s", // changelog
    "lint:eslint": "eslint \"{src,mock}/**/*.{vue,ts,tsx}\" --fix", // eslint 修复
    "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"", // prettier 格式化
    "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.js", // 用于husky，提交前校验
    "lint:stylelint": "stylelint --cache --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/", // stylelint格式化修复
    "prepare": "husky install" // 安装husky（https://typicode.github.io/husky/#/）
  },
```
