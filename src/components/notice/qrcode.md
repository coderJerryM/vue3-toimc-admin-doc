# 二维码

![qrcode](../assets/qecode.png)
## 基础用法

```typescript

<template>
  <div class="p-4">
    <div class="grid grid-cols-3 gap-3">
      <el-card header="基础示例" class="flex flex-col justify-center items-center">
        <qr-code :value="url"></qr-code>
      </el-card>
      <el-card header="渲染成img标签示例" class="flex flex-col justify-center items-center">
        <qr-code :value="url" tag="img" />
      </el-card>
      <el-card header="配置样式示例" class="flex flex-col justify-center items-center">
        <qr-code
          :value="url"
          :options="{
            color: { dark: '#3A8900' }
          }"
        ></qr-code>
      </el-card>
      <el-card header="本地logo示例" class="flex flex-col justify-center items-center">
        <qr-code :value="url" :logo="logoImg"></qr-code>
      </el-card>
      <el-card header="在线logo示例" class="flex flex-col justify-center items-center">
        <qr-code
          :value="url"
          logo="https://toimc-online.obs.cn-east-3.myhuaweicloud.com/brian.jpg"
          :options="{
            color: { dark: '#55D187' }
          }"
        ></qr-code>
      </el-card>
      <el-card header="logo配置示例" class="flex flex-col justify-center items-center">
        <qr-code
          :value="url"
          :logo="{
            src: 'https://toimc-online.obs.cn-east-3.myhuaweicloud.com/brian.jpg',
            logoSize: 0.2,
            borderSize: 0.05,
            borderRadius: 50,
            bgColor: 'red'
          }"
        ></qr-code>
      </el-card>
      <el-card class="flex flex-col justify-center items-center">
        <template #header>
          <div class="flex items-center">
            <span class="mr-4">下载示例</span>
            <el-tooltip content="(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)">
              <icon class="cursor-pointer" icon="ep:download" @click="download"></icon>
            </el-tooltip>
          </div>
        </template>
        <qr-code ref="qrRef" :value="url" :logo="logoImg"></qr-code>
      </el-card>
      <el-card header="配置大小示例" class="flex flex-col justify-center items-center">
        <qr-code :value="url" :width="300"></qr-code>
      </el-card>
      <el-card class="flex flex-col justify-center items-center">
        <template #header>
          <div class="flex items-center">
            <span class="mr-4">扩展绘制示例</span>
            <el-tooltip content="要进行扩展绘制则不能将tag设为img">
              <icon class="cursor-pointer" icon="ep:download" @click="download"></icon>
            </el-tooltip>
          </div>
        </template>
        <qr-code
          ref="qrDiyRef"
          :value="url"
          :width="220"
          :options="{ margin: 5 }"
          :logo="logoImg"
          @done="onQrcodeDone"
        ></qr-code>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import logoImg from '@/assets/images/brian.jpg'
  import { QrCodeActionType } from '@/components/QrCode/types'

  export default defineComponent({
    setup() {
      const url = 'https://github.com/toimc-team/vue-toimc-admin'
      const qrRef = ref<Nullable<QrCodeActionType>>(null)
      const qrDiyRef = ref<Nullable<QrCodeActionType>>(null)

      function download() {
        const qrEl = unref(qrRef)
        if (!qrEl) return
        qrEl.download('文件名')
      }

      function onQrcodeDone({ ctx }: any) {
        if (ctx instanceof CanvasRenderingContext2D) {
          // 额外绘制
          ctx.fillStyle = 'black'
          ctx.font = '16px "微软雅黑"'
          ctx.textBaseline = 'bottom'
          ctx.textAlign = 'center'
          ctx.fillText('扫码转账xx', 100, 220, 220)
        }
      }

      return {
        qrRef,
        qrDiyRef,
        url,
        logoImg,
        download,
        onQrcodeDone
      }
    }
  })
</script>
```


## 属性

| 属性       | 描述             | 类型    | 可选值 | 默认值 |
| :--------- | :--------------- | :------ | :----- | :----- |
| value      | 显示值      | string｜array  | —      |    null    |
| options | 参数   | object  | —      |      null  |
| width    | 宽度 | number | —      | 200  |
| logo    | 中间的logo图标 | string｜object  | —      | —   |
| tag    | img 不支持内嵌logo | string | canvas｜img      | canvas  |
| auto    | 自适应 | boolean | —      | true  |

