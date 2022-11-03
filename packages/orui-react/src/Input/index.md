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

我们对其 `type` 进行一定数的屏蔽。

所以使用某些原生`type`类型，不生效时请不要觉得他是一个`bug`，我们为您准备了单独准备了属性相对应的组件。

`Tips：使用过程中 models 或 value、onChange必传，不然输入框内容不会改变。`

### 基础用法

<code src="./demo/index.tsx" />

### 禁用

通过`disabled`实现禁用状态

<code src="./demo/index-disabled.tsx" />

### 双向绑定

使用 `models` 可以实现数据的双向绑定

<code src="./demo/index-model.tsx" />

## 一键清空

使用`clearable`属性即可得到一个可一键清空的输入框

<code src="./demo/index-empty.tsx" />

## 密码框

当`type` 为 `password` 时，输入框右侧会显示一个眼睛按钮，默认开启，可以通过`showPassword` 关闭会开启。
<code src="./demo/index-password.tsx" />

## 带图标的输入框

图标可在左侧和右侧，`Icon` 里面的图标支持。

<code src="./demo/index-icon.tsx" />

## 文本域
可通过`type`为`textarea`为文本域输入框。

<code src="./demo/index-textarea.tsx" />


####  <font color=red>提示</font>
> <font color=red>未特别说明的 input 和 textarea 原生属性都支持。</font>

<!-- API说明 -->
<API src="./index-api.tsx" />