# 切割面板

可通过拖拽分割线来改变面板尺寸大小

## 效果

![splitpanel](./assets/split-panel.png)


## 用法

```typescript
<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span class="font-medium">切割面板</span>
      </div>
    </template>
    <div class="split-panel">
      <splitpanel :split-set="settingLR">
        <!-- #paneL 表示指定该组件为左侧面板 -->
        <template #pageL>
          <!-- 自定义左侧面板的内容 -->
          <div class="panel">1</div>
        </template>
        <!-- #paneR 表示指定该组件为右侧面板 -->
        <template #pageR>
          <div class="panel">2</div>
        </template>
      </splitpanel>
    </div>
  </el-card>
</template>

<script setup lang="ts">
  import splitpanel, { ContextProps } from '@/components/SplitPanel'
  import { ref } from 'vue'
  const settingLR = ref<ContextProps>({
    minPercent: 20,
    defaultPercent: 40,
    split: 'vertical'
  })
</script>

<style lang="scss" scoped>
  $panel-width: 100%;
  $panel-height: 70vh;

  .split-panel {
    width: 70vw;
    height: $panel-height;
    font-size: 50px;
    color: #fff;
    text-align: center;
    border: 1px solid #e5e6eb;

    .panel {
      width: $panel-width;
      height: $panel-width;
      line-height: $panel-height;
      color: rgba($color: dodgerblue, $alpha: 80%);
    }

    .dv-b {
      color: rgba($color: #000, $alpha: 80%);
    }
  }
</style>

```


## 插槽

可通过插槽扩展多种布局

| 名称 | 说明                                               |
| :----- | :------------------------------------------------- | 
| pageL | 左侧面板 | 
| pageR  | 右侧面板 |
