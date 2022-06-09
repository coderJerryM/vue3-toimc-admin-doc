# v-copy
扩展自定义指令复制功能

## 效果

![v-copy](./assets/v-copy.png)

## 基础用法

```typescript
<template>
  <t-card header="复制指令示例" class="text-lg font-bold">
    <div class="flex items-center justify-center mt-10 mb-10">
      <el-input v-model="data" placeholder="请输入内容" style="width: 500px" />
      <el-button v-copy="data" type="primary">复制</el-button>
    </div>
  </t-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const data = ref<string>('我是被复制的内容')
</script>

```