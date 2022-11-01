---
title: 输入框 Input
mobile: true
nav:
  title: 组件
  path: /components
group:
  title: 表单组件
---

## 输入框 Input

常见表单组件，并在其原生控件上进行了功能扩展，可组合使用。

我们对其 `type` 屏蔽了 `radio`、`checkbox` 和 `file` 这三个类型。

所以使用这三个原生`type`类型时请不要觉得他是一个`bug`，我们为您准备了单独的`checkbox`、`file`、`radio` 组件。

`Tips：使用过程中 models 或 value、onChange必传，不然输入框内容不会改变。`

### 基础用法

<code src="./demo/index.tsx" />

### 禁用

<code src="./demo/index-disabled.tsx" />

### 双向绑定

<code src="./demo/index-model.tsx" />

<!-- API说明 -->
<API src="./index-api.tsx" />