---
layout: page.11ty.cjs
title: <message-box> ⌲ Home
---

# &lt;message-box>

`<message-box>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<message-box>` is just an HTML element. You can it anywhere you can use HTML!

```html
<message-box></message-box>
```

  </div>
  <div>

<message-box></message-box>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<message-box>` can be configured with attributed in plain HTML.

```html
<message-box name="HTML"></message-box>
```

  </div>
  <div>

<message-box name="HTML"></message-box>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<message-box>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;message-box&gt;</h2>
    <message-box .name=${name}></message-box>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;message-box&gt;</h2>
<message-box name="lit-html"></message-box>

  </div>
</section>
