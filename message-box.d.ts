import { LitElement } from 'lit';
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
export { default as generator } from './message-box.generator';
//# sourceMappingURL=message-box.d.ts.map