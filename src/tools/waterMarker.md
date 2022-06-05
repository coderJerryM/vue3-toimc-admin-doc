# v-waterMarker

扩展自定义指令水印功能

![waterMarker](./assets/v-waterMarker.png)


## 基础用法

```typescript
<template>
  <div
    v-waterMarker="{ text: 'toimc watermark', textColor: 'rgba(180, 180, 180, 0.6)' }"
    class="flex flex-col items-center h-full pt-20 text-lg font-bold"
  >
    <span>水印指令示例</span>
  </div>
</template>

```