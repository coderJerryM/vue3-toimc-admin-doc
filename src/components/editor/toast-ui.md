# ToastUI

[ToastUI](https://ui.toast.com/tui-editor) 是一款 GFM Markdown 所见即所得编辑器，提供 Markdown 和 Wysiwyg 两种模式，可在书写过程中随意切换。它使用 JavaScript 实现，支持原生 Vue、React。

## 特性

- 实时预览：编辑 Markdown，同时立即呈现处HTML，所见即所得。
- 滚动同步：Markdown 和 Preview 之间的同步滚动。您无需单独滚动浏览每一项。
- 语法亮点：您可以立即检查分解标记的语法。
- 表格：通过表格的上下文菜单，可以添加或删除表格的列或行，还可以在单​​元格中排列文本。
- 自定义块编辑器：自定义块区域可以通过内部编辑器进行编辑。
- 复制和粘贴：从浏览器、屏幕截图、excel、PowerPoint 等粘贴任何内容。
- 工具栏：通过工具栏，您可以为正在编辑的文档设置样式或添加元素。
- 多主题支持：内置黑白两套主题。
- 支持只显示markdown数据而不显示编辑区域的模式。
- 多语言支持，内置中、英、繁体。
- 小部件：允许您配置将匹配到特定字符串的字符串替换为RegExp小部件节点的规则。
- 自定义块：Markdown 不支持的节点可以通过自定义块来定义。您可以通过使用自定义块编写解析逻辑来显示您想要的节点。

## 语法支持

所有 CommonMark 语法：分隔线、ATX 标题、Setext 标题、缩进代码块、围栏代码块、HTML 块、链接引用定义、段落、块引用、列表、反斜杠转义、HTML 实体、行级代码、强调、加粗、链接、图片、行级 HTML、硬换行、软换行和纯文本。

所有 GFM 语法：表格、任务列表项、删除线、自动链接、XSS 过滤。

## 用法

### 基础用法

```vue
<toast-editor
  ref="editor"
  :key="form"
  :initial-edit-type="form.mode"
  :initial-value="form.initValue"
  :preview-highlight="form.previewHighlight"
  :height="form.height"
  :language="form.language"
  :theme="form.theme"
></toast-editor>

<script lang="ts">
  // ...
  import { defineComponent } from 'vue'
  // ...
  export default defineComponent({
    setup() {
      const editor = ref()

      let form = reactive({
        show: true, // 显示editor
        mode: 'markdown', // 编辑器模式 markdown / wysiwyg
        initValue: 'hello', // 初始值
        previewHighlight: true, // 编辑块高亮
        height: 500, // 编辑器高度
        language: 'en-US', // 国际化
        theme: '' // 主题
      })
      // ...
      return {
        editor,
        form,
        // ...
      }
    }
  })
</script>
```

效果如下：

![image_20220615234028](./assets/image_20220615234028.png)

### 高级用法

更多高级用法详见 [传送门](https://github.com/toimc-team/vue3-toimc-admin/blob/main/src/views/components/editor/toast-ui/index.vue)

## API

| 属性值      | 描述                                                         | 默认值    | 
| ----------- | ------------------------------------------------------------ | --------- | 
| mode        | 渲染模式，有两种分别为：`Markdown`、`Wysiwyg` | `Markdown`      |
| value       | 编辑器初始化值                                               | ''        |    
| lang        | 语言种类：`en_US`、` zh_CN`、` zh_TW` | `zh_CN`   |     
| minHeight   | 编辑区域最小高度                                             | 300       |     
| placeholder | 输入区域为空时的提示                                         | ''        |     
| previewHighlight    | 预览高亮                                                 | `true`   |     
| theme       | 主题，分别为：`Light`、`Dark`                              | `Light` |       
| toolbar     | 工具栏配置项                                                 |           |

> 更多API 可查看 [官方文档](https://nhn.github.io/tui.editor/latest/)；示例中只用到了部分API，`props`中目前适配了常用的API。

### toolbar

```js
const options = {
  // ...
  toolbarItems: [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock'],
    ['scrollSync'],
  ],
}
```

> `toolbar` 的更多配置项可查看 [官网文档](https://github.com/nhn/tui.editor/blob/master/docs/en/toolbar.md)。