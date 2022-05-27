# useWatermark

用于提供水印能力的支持。签名如下：

```ts
useWatermark(
  appendEl: Ref<HTMLElement | null> = ref(document.body) as Ref<HTMLElement>
): {
  // 设置水印
  setWatermark: (options: WatermarkOptions) => void
  // 清除水印
  clear: () => void
}

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

使用说明参考[水印](../components/func/waterprint.md)
