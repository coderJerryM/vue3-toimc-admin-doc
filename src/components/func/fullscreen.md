# 全屏

项目中已经集成 `'@vueuse/core'` 中的 `useFullscreen` 并已经默认导入

## 用法

全屏浏览器页面

```ts
const { isFullscreen, enter, exit, toggle } = useFullscreen()
```

全屏指定元素

```ts
const el = ref<HTMLElement | null>(null)

const { isFullscreen, enter, exit, toggle } = useFullscreen(el)
```

```js
`<videoref='el'> `
```

## 类型声明

```ts
export interface UseFullscreenOptions extends ConfigurableDocument {
  /**
   * Automatically exit fullscreen when component is unmounted
   *
   * @default false
   */
  autoExit?: boolean
}
/**
 * Reactive Fullscreen API.
 *
 * @see https://vueuse.org/useFullscreen
 * @param target
 * @param options
 */
export declare function useFullscreen(
  target?: MaybeElementRef,
  options?: UseFullscreenOptions
): {
  isSupported: boolean
  isFullscreen: Ref<boolean>
  enter: () => Promise<void>
  exit: () => Promise<void>
  toggle: () => Promise<void>
}
export declare type UseFullscreenReturn = ReturnType<typeof useFullscreen>
```
