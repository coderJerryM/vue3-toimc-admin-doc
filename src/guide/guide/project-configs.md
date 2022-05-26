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
### .env

::: tip

该文件为所有模式共享配置项。

:::

```sh
# port
VITE_PORT = 5500

# spa-title
VITE_GLOB_APP_TITLE = VueToimcAdmin-基于Vue3+ElementPlus的中后台管理系统模板

# spa shortname
VITE_GLOB_APP_SHORT_NAME = VueToimcAdmin

# config file
VITE_APP_CONFIG_FILE_NAME = "_app.config.js"

# dist path
VITE_APP_OUTPUT_DIR=dist

# Optional: hash | html5
VITE_APP_ROUTE_MODE = "hash"
```



### .env.development

```sh
# 是否开启mock
VITE_USE_MOCK = true

# 公共文件目录
VITE_PUBLIC_PATH = /

# Cross-domain proxy, you can configure multiple
# Please note that no line breaks
VITE_PROXY = [["/dev-api","http://localhost:3000"],["/upload","http://localhost:3300/upload"]]

# Delete console
VITE_DROP_CONSOLE = false

VITE_HTTPS = false

# Basic interface address SPA
VITE_GLOB_API_URL=/dev-api

# File upload address， optional
VITE_GLOB_UPLOAD_URL=/upload

# Interface prefix
VITE_GLOB_API_URL_PREFIX=
```



### .env.production

```env
# 是否开启mock
VITE_USE_MOCK = true

# 开发环境读取配置文件路径
VITE_PUBLIC_PATH = /

# 开发环境代理
VITE_PROXY = /api

# https配置
VITE_HTTPS = false

# 是否开启压缩输出，一般nginx配置了之后，不需要前端进行压缩输出
# 支持的选项：gzip | brotli | none，可以使用,号隔开
VITE_BUILD_COMPRESS = 'none'

# 配合上面的选项，是否删除源文件
VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE = false

# 是否删除项目中console
VITE_DROP_CONSOLE = false

# 文件上传目录
VITE_GLOB_UPLOAD_URL = /upload

# 接口前缀 
VITE_GLOB_API_URL_PREFIX = 

# 是否启用图像压缩
VITE_USE_IMAGEMIN= true

# 使用 pwa
VITE_USE_PWA = false

# 是否与旧版浏览器兼容
VITE_LEGACY = false
```



## 生产环境动态配置

::: tip

思考：如何在生产过程中，不需要重新构建代码，也能使用.env相关文件中的配置呢？

方便在打包之后，通过一个配置文件修改线上的部分参数。

:::



思路：

- 打包过程中，把.env.*文件中，相关的的变量读取并输出到特定的文件`_app.config.js`；
- 在线上的代码，读取`_app.config.js`，并使用其中的变量；

这样，相当于全局生效的变量。比如：

```js
// _app.config.js
window.__PRODUCTION__VUETOIMCADMIN__CONF__ = {
	VITE_GLOB_API_URL: "/api"
  VITE_GLOB_API_URL_PREFIX: ""
  VITE_GLOB_APP_SHORT_NAME: "VueToimcAdmin"
  VITE_GLOB_APP_TITLE: "VueToimcAdmin-基于Vue3+ElementPlus的中后台管理系统模板"
  VITE_GLOB_UPLOAD_URL: "/upload"
}
```

具体做法：当执行`npm run build`构建项目之后，会自动生成 `_app.config.js` 文件并插入 `index.html`。

**注意: 开发环境不会生成**



### 作用

`_app.config.js` 用于项目在打包后，需要动态修改配置的需求，如接口地址。不用重新进行打包，可在打包后修改 `/dist/_app.config.js` 内的变量，刷新即可更新代码内的局部变量。



### 如何获取

想要获取 `_app.config.js` 内的变量，可以使用 [src/hooks/useGlobSetting.ts](https://github.com/toimc-team/vue3-toimc-admin/blob/main/src/hooks/useGlobSetting.ts) 提供的函数来进行获取。



### 如何新增

1. 首先在 `.env` 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 `VITE_GLOB_`开头

2. `VITE_GLOB_` 开头的变量会自动加入环境变量，通过在 `types/config.d.ts` 内修改 `GlobEnvConfig` 和 `GlobConfig` 两个环境变量的值来定义新添加的类型；

3. [src/hooks/useGlobSetting.ts](https://github.com/toimc-team/vue3-toimc-admin/blob/main/src/hooks/useGlobSetting.ts) 中添加新增的返回值即可：

   ```ts
   import type { GlobConfig } from 'types/config'
   
   import { warn } from '@/utils/log'
   import { getAppEnvConfig } from '@/utils/env'
   
   // 获取由esno形成的全局的配置文件_app.config.js中的配置
   export const useGlobSetting = (): Readonly<GlobConfig> => {
     const {
       VITE_GLOB_APP_TITLE,
       VITE_GLOB_API_URL,
       VITE_GLOB_APP_SHORT_NAME,
       VITE_GLOB_API_URL_PREFIX,
       VITE_GLOB_UPLOAD_URL
     } = getAppEnvConfig()
   
     if (!/[a-zA-Z\_]*/.test(VITE_GLOB_APP_SHORT_NAME)) {
       warn(
         'VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.'
       )
     }
   
     // Take global configuration
     const glob: Readonly<GlobConfig> = {
       title: VITE_GLOB_APP_TITLE,
       apiUrl: VITE_GLOB_API_URL,
       shortName: VITE_GLOB_APP_SHORT_NAME,
       urlPrefix: VITE_GLOB_API_URL_PREFIX,
       uploadUrl: VITE_GLOB_UPLOAD_URL
     }
     return glob as Readonly<GlobConfig>
   }
   ```

   

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
