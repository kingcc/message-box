import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit-html/directives/class-map'
import { styleMap } from 'lit-html/directives/style-map'
import {
  host,
  root,
  content,
  button,
  animation
} from './message-box.style'

enum Status {
  sightless,
  visible,
  triiggered,
}

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('message-box')
export class MessageBox extends LitElement {

  //// Component configurations ////

  static styles = [host, root, content, button, animation]

  static shadowRootOptions: ShadowRootInit = { mode: 'closed' }

  //// Properties ////

  @property({ type: String })
  private height = 'initial'

  @property({ type: String })
  private minWidth = 'initial'

  @property({ type: String })
  private width = 'initial'

  @property({ type: String })
  private border = '0'

  @property({ type: String })
  private color = '255, 255, 255'

  @property({ type: String })
  private radius = '0'

  @property({ type: String })
  private shadow = '0 1em 1em'

  @property({ type: String })
  private out = ''

  @property({ type: Status })
  private status = Status.sightless

  @property({ type: String })
  private timeout = '0'

  //// Lifecycles ////

  connectedCallback() {
    super.connectedCallback()
    this.status = Status.visible
    const timeout = Number(this.timeout)
    if (timeout > 0) {
      setTimeout(this.sendTriggered, timeout * 1000)
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.status = Status.sightless
  }

  render() {

    const {
      height,
      width,
      minWidth,
      border,
      color,
      radius,
      shadow,
      out,
      status,
      timeout,
    } = this

    const rootClass = {
      root: true,
      out: status === Status.triiggered,
      [`out-${out}`]: status === Status.triiggered && out,
      'progress-gradient': Number(timeout) > 0,
    }

    const rootStyle = {
      height,
      width,
      minWidth,
      border,
      borderRadius: radius,
      boxShadow: /[0-9\spxrem]/.test(shadow) 
        ? `${shadow} rgba(
          var(--message-box-background-color),
          calc(var(--message-box-opacity) * 0.8)
        )`
        : shadow,
      color: `rgb(${color})`,
      animation: Number(timeout) > 0
        ? `${timeout}s linear progress`
        : 'initial'
    }

    return html`
      <div
        class=${classMap(rootClass)}
        style=${styleMap(rootStyle)}
        @transitionend=${this.transitionend}
      >
        <div class="content">
          <slot name="message"></slot>
        </div>
        <slot name="button" @click=${this.sendTriggered}></slot>
      </div>
    `

  }

  //// Event Listeners ////

  private transitionend = () => {
    if (this.status === Status.triiggered) {
      this.status = Status.sightless
      this.dispatchEvent(new CustomEvent('triggered'))
    }
  }

  private sendTriggered = () => {
    this.status = Status.triiggered
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'message-box': MessageBox;
  }
}
