# v-draggable

扩展自定义指令拖拽功能

![v-draggble](./assets/v-draggable.png)

## 基础用法

```typescript
<template>
  <div class="h-full">
    <t-card header="拖拽指令示例" class="text-lg font-bold">
      <span class="flex items-center justify-center mt-10 mb-10">拖拽下面的元素</span>
    </t-card>

    <div v-draggable class="box">我可以拖拽哦~</div>
  </div>
</template>

```