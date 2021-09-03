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
    Status[Status["Sightless"] = 0] = "Sightless";
    Status[Status["visible"] = 1] = "visible";
    Status[Status["Triiggered"] = 2] = "Triiggered";
})(Status || (Status = {}));
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MessageBox = class MessageBox extends LitElement {
    constructor() {
        //// Component configurations ////
        super(...arguments);
        //// Properties ////
        this.height = 'initial';
        this.minWidth = 'initial';
        this.width = 'initial';
        this.border = '0';
        this.color = '255, 255, 255';
        this.radius = '0';
        this.shadow = '0 1em 1em';
        this.out = '';
        this.status = Status.Sightless;
        this.timeout = '0';
        //// Event Listeners ////
        this.transitionend = () => {
            if (this.status === Status.Triiggered) {
                this.status = Status.Sightless;
                this.dispatchEvent(new CustomEvent('triggered'));
            }
        };
        this.sendTriggered = () => {
            this.status = Status.Triiggered;
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
        this.status = Status.Sightless;
    }
    render() {
        const { height, width, minWidth, border, color, radius, shadow, out, status, timeout, } = this;
        const rootClass = {
            root: true,
            out: status === Status.Triiggered,
            [`out-${out}`]: status === Status.Triiggered && out,
            'progress-gradient': Number(timeout) > 0,
        };
        const rootStyle = {
            height,
            width,
            minWidth,
            border,
            borderRadius: radius,
            boxShadow: `${shadow} rgba(
        var(--message-box-background-color),
        calc(var(--message-box-opacity) * 0.8)
      )`,
            color: `rgb(${color})`,
            animation: Number(timeout) > 0 ? `${timeout}s linear progress` : 'initial'
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