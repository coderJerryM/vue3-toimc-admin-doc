# 常见问题


::: tip

列举了一些常见的问题。有问题可以先来这里寻找，如果没有可以在 [issue](https://github.com/toimc-team/vue3-toimc-admin/issues) 提。

:::




## 前言

遇到问题，可以先从以下几个方面查找

1. 对应模块的 GitHub 仓库 [issue](https://github.com/toimc-team/vue3-toimc-admin/issues) 搜索

2. 从[google](https://www.google.com/)搜索问题

3. 从[百度](https://www.xn--wxtr44c.com/)搜索问题

4. 在下面列表找不到问题可以到 issue 提问 [issues](https://github.com/toimc-team/vue3-toimc-admin/issues)

5. 如果不是问题类型的，需要讨论的，请到 [discussions](https://github.com/toimc-team/vue3-toimc-admin/discussions) 讨论

   

## 关于修改配置文件的问题

当修改 `.env` 等环境文件及 `vite.config.ts` 文件时，vite 会自动重启服务。

自动重启有几率出现问题，请重新运行项目即可解决.

## imagemin 依赖安装失败

由于 imagemin 在国内安装困难，提供以下几个解决方案：

1. 使用 yarn 在 package.json 内配置（前提是必须使用 yarn）

```json
"resolutions": {
  "bin-wrapper": "npm:bin-wrapper-china"
}
```

1. 使用 npm,在电脑 host 文件加上如下配置即可

```sh
199.232.4.133 raw.githubusercontent.com
```



## 本地运行报错

由于 vite 在本地没有转换代码，且代码中用到了可选链等比较新的语法。所以本地开发需要使用版本较高的浏览器(`Chrome 85+`)进行开发



## 模版区别

- [ vue3-toimc-admin](https://github.com/toimc-team/vue3-toimc-admin) - 是包含 Demo 示例的,个人建议不要在这上面进行开发。当然，你如果动手能力强的话可以直接改。
- [vue3-toimc-admin-thin](https://github.com/toimc-team/vue3-toimc-admin-thin)精简了代码后的模版项目。适合在这基础上进行二次开发。



## 环境问题

如果出现依赖安装报错，启动报错等。先检查电脑环境有没有安装齐全。

- Node 版本推荐 >= 14 版本。
- Pnpm 或 Yarn 最新版



## 依赖安装问题

- 如果依赖安装不了或者启动报错可以先尝试 删除 `pnpm-lock.yaml`（使用yarn的是删除 `yarn.lock`）和 `node_modules`，然后重新运行 `pnpm install`
- 如果依赖安装不了或者报错，可以尝试切换手机热点来进行依赖安装。
- 如果还是不行，可以自行配置国内镜像安装。
- 也可以在项目根目录创建 `.npmrc` 文件，内容如下

```sh
# .npmrc
registry = https://registry.npm.taobao.org
```

然后重新执行 pnpm install 等待安装完成即可

## 如何保证我的代码能更新到最新代码

如果你使用了该项目进行项目开发。开发之中想同步最新的代码。你可以设置多个源的方式

1. 克隆代码

```sh
git clone https://github.com/toimc-team/vue3-toimc-admin-thin.git
```

2. 添加自己的公司 git 源地址

```sh
# up 为源名称,可以随意设置
# gitUrl为开源最新代码
git remote add up gitUrl;
```

3. 提交代码到自己公司 git

```sh
# 提交代码到自己公司
# main为分支名 需要自行根据情况修改
git push up main

# 同步公司的代码
# main为分支名 需要自行根据情况修改
git pull up main
```

4. 如何同步开源最新代码

```sh
git pull origin main
```

::: tip

同步代码的时候会出现冲突。只需要把冲突解决即可

:::

