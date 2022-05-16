
# 介绍

>  菜单配置、路由参数、权限等

 

目前菜单相关内容采用mock方式，后续会推出管理后台API，对接起初的菜单权限。

这个篇章主要是前端的设计与页面介绍。



其中mock服务器的配置如下`vite.config.ts`：

```js
viteMockServe({
  ignore: /^\_/,
  mockPath: 'mock',
  supportTs: true,
  prodEnabled: VITE_USE_MOCK,
  // 相当于在src/main.ts中inject下面的代码，所以注意文件的路径问题
  injectCode: `
    import { setupProdMockServer } from '../mock/_createProductionServer';
    setupProdMockServer();
  `
}),
```



菜单相关的mock接口：

![image-20220516234240983](./assets/image-20220516234240983.png)
