---
layout: example.11ty.cjs
title: <message-box> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<style>
  message-box p {
    border: solid 1px blue;
    padding: 8px;
  }
</style>
<message-box>
  <p>This is child content</p>
</message-box>

<h3>CSS</h3>

```css
p {
  border: solid 1px blue;
  padding: 8px;
}
```

<h3>HTML</h3>

```html
<message-box>
  <p>This is child content</p>
</message-box>
```
