import { css } from 'lit'

export const host = css`
  :host {
    display: block;
    --message-box-background-color: 0, 0, 0;
    --message-box-opacity: 0.8;
  }
`

export const root = css`
  .root {
    display: grid;
    grid-template-columns: auto 1fr;
    color: white;
    background: rgba(
      var(--message-box-background-color),
      var(--message-box-opacity)
    );
    margin: 1rem;
    overflow: hidden;
    padding: 0;
    transition: all 256ms ease-in;
  }
  .root > * {
    padding: .5rem 1rem;
  }
`

export const content = css`
  .content {
    display: inline-flex;
    align-items: center;
    flex: 1 0;
  }
`

export const button = css`
  [name=button] {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  ::slotted(button) {
    border: none;
    flex: 1 0;
    margin: 0;
    padding: .25rem 1rem;
    background: none;
    cursor: pointer;
    color: inherit;
    font-weight: bold;
    outline: none;
  }
  ::slotted(button:hover) {
    background-color: rgba(255, 255, 255, 0.1)
  }
`

export const animation = css`
  .progress-gradient {
    background-image: linear-gradient(
      to right,
      rgba(
        var(--message-box-background-color),
        calc(var(--message-box-opacity) * 1.2)
      ) 49%,
      rgba(
        var(--message-box-background-color),
        calc(var(--message-box-opacity) * 0.6)
      ) 51%
    );
    background-size: 202% 100%;
  }
  @keyframes progress {
    from {
      background-position: right;
    }
    to {
      background-position: left;
    }
  }
  .out {
    opacity: 0;
  }
  .out-top {
    transform: translate(0, -100%);
  }
  .out-right {
    transform: translate(100%, 0);
  }
`
