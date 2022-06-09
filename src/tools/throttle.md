# v-throttle

扩展自定义指令节流功能

## 效果

![v-throttle](./assets/v-throttle.png)


## 基础用法

```typescript
<template>
  <t-card header="节流指令示例" class="text-lg font-bold">
    <div class="flex items-center justify-center mt-10 mb-10">
      <el-button v-throttle="throttleClick" type="primary">节流按钮 (每隔1S秒后执行)</el-button>
    </div>
  </t-card>
</template>

<script setup lang="ts">
  import { ElMessage } from 'element-plus'
  const throttleClick = () => {
    ElMessage.success('节流按钮触发事件')
  }
</script>

```