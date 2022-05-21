# 外部模块

在开发过程中，除了自带组件外，有时我们还需要引入其他外部模块。这里我们以`element-plus` 为例：

## 安装

安装 `element-plus`.

```sh
# 选择一个你喜欢的包管理器

# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus

# pnpm
$ pnpm install element-plus
```

## 使用

### 全局使用

```ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')

```

### 按需导入

- 自动导入：

首先你需要安装 `unplugin-vue-components` 和 `unplugin-auto-import` 这两款插件。

```sh
npm install -D unplugin-vue-components unplugin-auto-import
```

然后把下列代码插入到项目根目录的 `Vite` 的配置文件中。

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```

- 手动导入:

`Element Plus` 提供了基于 `ES Module` 开箱即用的 `Tree Shaking` 功能。

但是需要安装 `unplugin-element-plus` 来导入样式。

```vue
<template>
  <el-button>I am ElButton</el-button>
</template>
<script>
  import { defineComponent } from 'vue';
  import { ElButton } from 'element-plus'
  export default defineComponent({
    components: { ElButton },
  });
</script>
```

```ts
// vite.config.ts
import ElementPlus from 'unplugin-element-plus/vite'

export default {
  plugins: [ElementPlus()],
}
```

## 注意

如果组件有**依赖样式**，则需要再**引入**样式文件。