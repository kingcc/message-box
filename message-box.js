var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';
import { host, root, content, button, animation } from './message-box.style';
var Status;
(function (Status) {
    Status[Status["sightless"] = 0] = "sightless";
    Status[Status["visible"] = 1] = "visible";
    Status[Status["triiggered"] = 2] = "triiggered";
})(Status || (Status = {}));
let MessageBox = class MessageBox extends LitElement {
    constructor() {
        //// Component configurations ////
        super(...arguments);
        this.shadow = '0 1rem 1rem';
        this.out = '';
        this.status = Status.sightless;
        this.timeout = '0';
        //// Event Listeners ////
        this.transitionend = () => {
            if (this.status === Status.triiggered) {
                this.status = Status.sightless;
                this.dispatchEvent(new CustomEvent('triggered'));
            }
        };
        this.sendTriggered = () => {
            this.status = Status.triiggered;
        };
    }
    //// Lifecycles ////
    connectedCallback() {
        super.connectedCallback();
        this.status = Status.visible;
        const timeout = Number(this.timeout);
        if (timeout > 0) {
            setTimeout(this.sendTriggered, timeout * 1000);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.status = Status.sightless;
    }
    render() {
        const { height, width, minWidth, border, color, radius, shadow, out, status, timeout, } = this;
        const rootClass = {
            root: true,
            out: status === Status.triiggered,
            [`out-${out}`]: status === Status.triiggered && out,
            'progress-gradient': Number(timeout) > 0,
        };
        const rootStyle = {
            height,
            width,
            minWidth,
            border,
            borderRadius: radius,
            boxShadow: /^[0-9\spxrem]+$/.test(shadow)
                ? `${shadow} rgba(
          var(--message-box-background-color),
          calc(var(--message-box-opacity) * 0.8)
        )`
                : shadow,
            color: color && `rgb(${color})`,
            animation: Number(timeout) > 0
                ? `${timeout}s linear progress`
                : 'initial'
        };
        return html `
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
    `;
    }
};
MessageBox.styles = [host, root, content, button, animation];
MessageBox.shadowRootOptions = { mode: 'closed' };
__decorate([
    property({ type: String })
], MessageBox.prototype, "height", void 0);
__decorate([
    property({ type: String })
], MessageBox.prototype, "minWidth", void 0);
__decorate([
    property({ type: String })
], MessageBox.prototype, "width", void 0);
__decorate([
    property({ type: String })
], MessageBox.prototype, "border", void 0);
__decorate([
    property({ type: String })
], MessageBox.prototype, "color", void 0);
__decorate([
    property({ type: String })
], MessageBox.prototype, "radius", void 0);
__decorate([
    property({ type: String })
], MessageBox.prototype, "shadow", void 0);
__decorate([
    property({ type: String })
], MessageBox.prototype, "out", void 0);
__decorate([
    property({ type: Status })
], MessageBox.prototype, "status", void 0);
__decorate([
    property({ type: String })
], MessageBox.prototype, "timeout", void 0);
MessageBox = __decorate([
    customElement('message-box')
], MessageBox);
export { MessageBox };
//# sourceMappingURL=message-box.js.map