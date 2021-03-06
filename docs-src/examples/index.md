---
layout: example.11ty.cjs
title: <message-box> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github.min.css"></link>
<style>
  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }
  .mount {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .orange {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    color: rgb(255, 133, 27);
  }
  message-box {
    max-width: 40vw;
  }
  .auto-remove {
    --message-box-opacity: 0.6; 
  }
  .colorful {
    --message-box-background-color: 133, 20, 75;
    --message-box-opacity: 1; 
    
  }
  .transparent {
    --message-box-background-color: whitesmoke;
    --message-box-opacity: 1;
  }
  .multiple-options {
    --message-box-background-color: 149, 82, 81;
  }
</style>

<section class="mount">

  <message-box timeout="10" class="auto-remove" >
    <span slot="message">
      This is a message-box web component
      that automatically disappears after 10 seconds.
    </span>
    <button slot="button">Close</button>
  </message-box>

  <message-box min-width="12em" radius="128vw" >
    <span slot="message">This is a smooth one...</span>
  </message-box>
  
  <message-box shadow="0">
    <span slot="message">
      This is a no-shadow version.
    </span>
    <button slot="button">Cool</button>
  </message-box>

  <message-box out="right" >
    <span slot="message">
      This is one using a different out animation
    </span>
    <button slot="button">Right</button>
  </message-box>
  
  <message-box out="top" class="colorful" >
    <span slot="message">
      This is one using different color
    </span>
    <button slot="button" class="orange">Cool</button>
  </message-box>

  <message-box color="0, 0, 0" border="1px solid black" shadow="0 1rem 1rem rgba(0, 0, 0, .2)" class="transparent">
    <span slot="message">
      This is one transparent.
    </span>
    <button slot="button">Cool</button>
  </message-box>
  
  <message-box class="multiple-options" >
    <span slot="message">
      You can add multiple options:
    </span>
    <button slot="button">Option1</button>
    <button slot="button">Option2</button>
  </message-box>

</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
<script>
    //// Handle message-box events ////
    const $messageBoxs = Array.from(document.querySelectorAll('message-box'))
    $messageBoxs.map(
      $messageBox => $messageBox.addEventListener('triggered', event => {
        event?.target?.parentNode?.removeChild(event?.target)
      })
    )

    // Add new element when first element triggered
    $messageBoxs[0].addEventListener('triggered', () => {
      // Create MessageBox manually
      const $githubMessage = document.createElement('span')
      $githubMessage.setAttribute('slot', 'message')
      $githubMessage.innerHTML = `
      I often share some interesting code on Github, if you like plz <strong>follow me</strong> <3
      `
      const $button = document.createElement('button')
      $button.innerHTML = `
        🧡
        <svg
          style="
            position: fixed;
            transform: scale(1,-1) rotate(70deg) translateX(-1em) translateY(3em)
          "
          width="30"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 39C1.5 32.7511 6.1 17.5173 20.5 6.57333M11.5 4.04L27 0.999998C24.8333 4.88444 20.5 13.16 20.5 15.1867"
            stroke="black"
          >
          </path>
        </svg>
      `
      $button.setAttribute('slot', 'button')
      const $githubMessageBox = document.createElement('message-box')
      $githubMessageBox.style.setProperty('--message-box-background-color', '247, 202, 201')
      $githubMessageBox.color = '44, 43, 55'
      $githubMessageBox.shadow = '0 1rem 1rem gray'
      $githubMessageBox.shadow = '0'
      $githubMessageBox.appendChild($githubMessage)
      $githubMessageBox.appendChild($button)
      $githubMessageBox.addEventListener('triggered', () => window.open('https://github.com/kingcc'))
      document.querySelector('.mount').appendChild($githubMessageBox)
    })

    //// Show Codes ////
    const $col = document.createElement('section')
    $col.classList.add('columns')
    const $pre = document.createElement('pre')
    const $code = document.createElement('code')
    $code.innerHTML = hljs.highlight(
      document.querySelector('.mount').innerHTML.replace(/\/message\-box\>/g, '/message-box>\n'),
      { language: 'html' },
    ).value
    $code.classList.add('language-html')
    $pre.appendChild($code)
    $col.appendChild($pre)
    document.body.appendChild($col)
</script>
