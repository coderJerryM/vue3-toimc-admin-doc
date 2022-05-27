# 水印

平台已经集成水印能力的支持，您可以使用 hook 的方式轻松的在你需要的位置上添加上水印。

## 基础用法

```js
import { useWatermark } from '@/hooks/useWatermark'
const { setWatermark, clear } = useWatermark();

setWatermark('这是水印文字');
```

## 图片水印

如果纯文本的水印不满足您的显示需求，你可以可以直接直接传入一个地址来将图片作为水印，使用方式为：

```ts
setWatermark({ imgUrl: 'https://xxx.png' });
```

## 其他配置

除了基础的文字和图片作为水印支持之外，平台还提供了更多的配置选项，您可以通过下面的方式来设置水印的其他配置，关于 `setWatermark` 的参数说明：

```ts
type WatermarkOptions = string | {
  // 水印文字
  str?: string
  // 文字大小
  fontSize?: number
  // 图片水印的地址
  imgUrl?: string
  // 水印区域的宽度，默认为水印所在元素宽度
  width?: number
  // 水印区域的高度，默认为水印所在元素高度
  height?: number
  // 水印之间的距离
  gap?: 'small' | 'default' | 'large'
}
```

## 全局水印和局部水印

默认情况下，水印是被添加的全局的。

某些情况下，你可能只需要将其应用到某个元素内部，此时您可以在 `useWatermark` 传入中一个元素，此时水印将只被应用到这个元素内部。

关于 `useWatermark` 的签名如下:

```ts
useWatermark(
  appendEl: Ref<HTMLElement | null> = ref(document.body) as Ref<HTMLElement>
): {
  setWatermark: (options: WatermarkOptions) => void
  clear: () => void
}
```
