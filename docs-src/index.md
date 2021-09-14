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
      <message-box>
        <span slot="message">
          This is a message-box web component.
        </span>
        <button slot="button">Close</button>
      </message-box>
```

  </div>
  <div>

  <message-box>
    <span slot="message">
      This is a message-box web component.
    </span>
    <button slot="button">Close</button>
  </message-box>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<message-box>` can be configured with attributed in plain HTML.

```html
      <message-box
        min-width="12em"
        radius="128vw"
      >
        <span slot="message">This is a smooth one...</span>
      </message-box>
```

  </div>
  <div>

<message-box min-width="12em" radius="128vw">
  <span slot="message">This is a smooth one...</span>
</message-box>

  </div>
</section>

