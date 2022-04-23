# 开始

## 环境准备

本地环境需要安装 [pnpm](https://pnpm.io/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

注意

- 使用[pnpm](https://pnpm.io/)，否则依赖可能安装不上。
- [Node.js](http://nodejs.org/) 版本推荐 `14.x` 及以上。

## 工具配置

如果您使用的 IDE 是[vscode](https://code.visualstudio.com/)(推荐)的话，可以安装以下工具来提高开发效率及代码格式化

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
- [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - vue3 开发必备
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

## 代码获取

注意

注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动可能会出错。

### 从 GitHub 获取代码

```shell
# clone 代码
$ git clone https://github.com/toimc-team/vue3-toimc-admin.git
```

### 从 Gitee 获取代码

如果从 github clone 代码较慢的话，可以尝试用 [Gitee](https://gitee.com/toimc-team/vue3-toimc-admin) 同步代码到自己的仓库，再 clone 下来即可。

也可以通过下方地址进行 clone

```shell
$ git clone https://gitee.com/toimc-team/vue3-toimc-admin
```

## 安装

### 安装 Node.js

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它。

**验证**

```shell
# 查看node版本
$ node -v
# 查看npm版本
$ npm -v
```

如果你需要同时存在多个 node 版本，可以使用 [Nvm](https://github.com/nvm-sh/nvm) 或者其他工具进行 Node.js 进行版本管理。

### 安装依赖

#### Pnpm安装

必须使用 [pnpm](https://pnpm.io/installation)进行依赖安装（若其他包管理器安装不了需要自行处理）。

如果未安装`pnpm`，可以用下面命令来进行全局安装

```shell
# 全局安装pnpm
$ npm install -g pnpm@next-7
# 验证 查看pnpm的版本
$ pnpm -v 
```

#### 依赖安装命令

在项目根目录下，打开命令窗口执行，耐心等待安装完成即可

```shell
$ pnpm install
```

## npm script

```json
{
  // ...
  "scripts": {
    // 运行项目
    "dev": "vite",
    // 运行项目
    "serve": "npm run dev",
    // 构建项目
    "build:emit": "vue-tsc --noEmit && vite build",
    // 构建项目
    "build": "vite build",
    // 清除 dist 并构建
    "report": "rimraf dist && vite build",
    // 预览打包后的内容
    "preview": "npm run build && vite preview",
    // 直接预览本地 dist 文件目录
    "preview:dist": "vite preview",
    // 生成 ChangeLog
    "log": "conventional-changelog -p angular -i CHANGELOG.md -s",
    // 执行 eslint 校验，只会执行src/mock下的vue、ts、tsx文件
    "lint:eslint": "eslint \"{src,mock}/**/*.{vue,ts,tsx}\" --fix",
    // 执行 prettier 校验
    "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
    "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.js",
    // 执行 stylelint 格式化
    "lint:stylelint": "stylelint --cache --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
    "prepare": "husky install"
  },
  // ...
}
```

## 目录说明

```
.
├── build
├── mock
├── public
├── src
│   ├── assets
│   │   ├── svg
│   │   ├── images
│   │   └── style
│   ├── components
│   │   ├── ChooseCity
│   │   ├── CollapseContainer
│   │   ├── DProgress
│   │   ├── List
│   │   ├── Trend
│   │   ├── index.ts
│   │   ├── Icon
│   │   ├── Card
│   │   ├── ChooseArea
│   │   ├── Cropper
│   │   ├── DNumbers
│   │   ├── Descriptions
│   │   ├── Form
│   │   ├── Input
│   │   ├── Menu
│   │   ├── NoticePad
│   │   ├── QrCode
│   │   ├── Table
│   │   ├── Transition
│   │   └── Header
│   ├── layouts
│   ├── plugins
│   ├── router
│   │   └── modules
│   ├── settings
│   ├── store
│   │   └── modules
│   ├── utils
│   ├── main.ts
│   ├── views
│   │   ├── about
│   │   ├── dashboard
│   │   ├── menus
│   │   ├── charts
│   │   ├── pages
│   │   │   ├── form
│   │   │   ├── errors
│   │   │   └── login
│   │   ├── system
│   │   ├── components
│   │   │   ├── area
│   │   │   ├── city
│   │   │   ├── notice-message
│   │   │   ├── progress
│   │   │   ├── trends
│   │   │   ├── icon
│   │   │   ├── cropper
│   │   │   ├── display
│   │   │   ├── numbers
│   │   │   ├── share
│   │   │   ├── table
│   │   │   ├── transitions
│   │   │   └── forms
│   │   └── iframe
│   ├── App.vue
│   └── env.d.ts
├── types
├── .editorconfig
├── .env
├── .env.development
├── .env.production
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── .stylelintignore
├── auto-imports.d.ts
├── commitlint.config.js
├── components.d.ts
├── index.html
├── jsconfig.json
├── LICENSE
├── README.md
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── stylelint.config.js
├── vite.config.ts
├── windi.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── components.d.ts
```
