# 开始

## 前言

项目使用element-plus为基础组件库，同时，兼容了原组件的全部属性与方法，使用自动导入组件依赖，方便后续项目打包减少项目体积，放心食用。



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

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它，Node的版本最少是：14.19.x（如果使用pnpm的话）。

**验证**

```shell
# 查看node版本
$ node -v
# 查看npm版本
$ npm -v
```

如果你需要同时存在多个 node 版本，可以使用 [Nvm](https://github.com/nvm-sh/nvm) 或者其他工具进行 Node.js 进行版本管理。



### 安装依赖

#### 使用淘宝源

- 使用nrm来切换（推荐）：`npm i -g nrm --registry=https://registry.npmmirror.com `，然后再使用`nrm use taobao`
- 直接使用npm config来设置：`npm config set registry https://registry.npmmirror.com`
- 使用cnpm来安装：`npm i -g cnpm --registry=https://registry.npmmirror.com`



#### Pnpm安装

::: tip

如果安装失败了，可以考虑看看下面的`常见安装问题`，考虑使用 代理 进行安装，最后，可以来我们的官方交流群进行反馈。

:::

建议使用 [pnpm](https://pnpm.io/installation)进行依赖安装（若其他包管理器安装不了需要自行处理）。

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



## 常见安装问题

### 安装imagemin失败问题

imagemin官方issues：https://github.com/imagemin/imagemin/issues/168

解决方案：

- 使用淘宝加速源
- 安装对应平台的依赖

```
#macos平台
brew install automake autoconf libtool dpkg pkgconfig nasm libpng

# Linux - Centos
yum install wget autoconf automake gcc nasm libtool

# Linux - Ubuntu
apt-get install -y --no-install-recommends autoconf  libtool  libpng-dev  pkg-config nasm
```



### homebrew（macos）

Homebrew国内开源安装脚本库：

- [https://gitee.com/cunkai/HomebrewCN](https://gitee.com/cunkai/HomebrewCN)
- [https://gitee.com/huwei1024/HomebrewCN](https://gitee.com/huwei1024/HomebrewCN)



手动安装：

清华源https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/，推荐intel芯片的小伙伴，自己动手，如果是M1版本的小伙伴，直接用上面的脚本库。



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
    "prepare": "husky install",
    // 测试相关
    "test": "vitest",
    "test:dev": "vitest dev",
    "test:watch": "vitest -w",
    "coverage": "vitest run --coverage"
  },
  // ...
}
```



## 目录说明

```bash
.
├── auto-imports.d.ts         # 自动组件
├── build                     # 构建脚本相关
├── commitlint.config.js
├── components.d.ts
├── index.html
├── jsconfig.json
├── mock                      # mock文件
├── package.json
├── pnpm-lock.yaml            # 推荐使用pnpm 管理项目依赖
├── postcss.config.js
├── public                    # 公共资源目录
│   ├── favicon.ico
│   └── resource
│       └── img
├── src
│   ├── App.vue               # Vue入口
│   ├── api                   # api目录
│   │   ├── page
│   │   └── sys
│   ├── assets                # 静态资源目录
│   │   ├── images
│   │   ├── logo.png
│   │   ├── style
│   │   └── svg
│   ├── components            # 基础组件
│   │   ├── Calendar          # 日历组件
│   │   ├── Card              # 卡片组件
│   │   ├── ChooseArea        # 区域选择组件
│   │   ├── ChooseCity        # 城市选择组件
│   │   ├── CollapseContainer # 折叠容器组件
│   │   ├── CountDown         # 倒计时组件
│   │   ├── Cropper           # 剪切组件
│   │   ├── DEcharts          # 动态图表
│   │   ├── DNumbers          # 动态数字
│   │   ├── DProgress         # 动态进度条
│   │   ├── DSlider           # 动态滑块
│   │   ├── Descriptions      # 描述组件
│   │   ├── DropDown          # 下拉菜单
│   │   ├── Editor            # 常见的MD + 所见即所得编辑器
│   │   ├── Form              # 表格
│   │   ├── Icon              # 图标组件
│   │   ├── Input             # 输入组件封装
│   │   ├── List              # 列表组件
│   │   ├── Menu              # 菜单组件
│   │   ├── NoticePad         # 弹出菜单
│   │   ├── QrCode            # 二维码
│   │   ├── SplitPanel        # 分割面板
│   │   ├── StrengthMeter     # 密码强度指示器
│   │   ├── Table             # 表格
│   │   ├── ThemeSetting      # 主题设置
│   │   ├── Transition        # 过渡效果
│   │   ├── Trend             # 趋势组件
│   │   ├── Verify            # 密码验证组件
│   │   ├── Waterfall         # 瀑布流
│   │   ├── Weather           # 天气组件
│   │   └── index.ts
│   ├── config
│   │   ├── index.ts
│   │   └── theme.config.ts
│   ├── directive
│   │   ├── index.ts
│   │   └── modules
│   ├── enums
│   │   └── cacheEnum.ts
│   ├── env.d.ts
│   ├── hooks                 # 工具集
│   │   ├── useEventListener.ts
│   │   ├── useGlobSetting.ts
│   │   ├── useI18n.ts
│   │   ├── useLocale.ts
│   │   ├── useRequest
│   │   ├── useScript.ts
│   │   └── useWatermark.ts
│   ├── layouts               # 布局
│   │   ├── blank.vue
│   │   ├── default.vue
│   │   ├── header
│   │   ├── sider
│   │   └── tabs
│   ├── locales               # 国际化
│   │   ├── en.json
│   │   ├── setupI18n.ts
│   │   └── zh-CN.json
│   ├── main.ts               # 核心入口ts
│   ├── plugins
│   │   ├── element-icons.ts
│   │   └── index.ts
│   ├── router
│   │   ├── index.ts          # 路由入口
│   │   ├── modules           # 路由模板，按照功能划分
│   │   └── types.d.ts
│   ├── settings
│   │   ├── encryptionSetting.ts
│   │   ├── localeSetting.ts
│   │   └── siteSetting.ts
│   ├── store
│   │   ├── index.ts
│   │   └── modules
│   ├── utils
│   │   ├── cache
│   │   ├── calendar.ts
│   │   ├── cipher.ts
│   │   ├── domUtils.ts
│   │   ├── env.ts
│   │   ├── event.ts
│   │   ├── file
│   │   ├── index.ts
│   │   ├── is.ts
│   │   ├── log.ts
│   │   ├── request.ts
│   │   ├── sendCode.ts
│   │   ├── theme
│   │   └── tsxHelper.tsx
│   └── views                 # 示例页面分类
│       ├── about
│       ├── charts
│       ├── components
│       ├── dashboard
│       ├── excel
│       ├── guide
│       ├── iframe
│       ├── menus
│       ├── pages
│       └── system
├── stylelint.config.js
├── tsconfig.json             # TypeScript配置文件
├── tsconfig.node.json
├── types                     # TypeScript类型文件
│   ├── config.d.ts
│   ├── global.d.ts
│   ├── index.d.ts
│   ├── store.d.ts
│   └── vue-router.d.ts
├── vite.config.ts            # vite构建配置
├── vitest.config.ts          # vitest配置
└── windi.config.ts           # windicss配置
```
