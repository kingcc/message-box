import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MessageBox extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    static shadowRootOptions: ShadowRootInit;
    private height;
    private minWidth;
    private width;
    private border;
    private color;
    private radius;
    private shadow;
    private out;
    private status;
    private timeout;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private transitionend;
    private sendTriggered;
}
declare global {
    interface HTMLElementTagNameMap {
        'message-box': MessageBox;
    }
}
//# sourceMappingURL=message-box.d.ts.map