var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, customElement, html, LitElement, property } from "lit-element";
let Counter = class Counter extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    increment() {
        this.count++;
    }
    decrement() {
        this.count--;
    }
    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has('count')) {
            this.dispatchEvent(new CustomEvent('counterChanged', { bubbles: true }));
        }
    }
    render() {
        console.info('render');
        return html `
<button part="decrement" @click=${this.decrement}>-</button>
<span part="count">${this.count}</span>
<button part="increment" @click=${this.increment}>+</button>
`;
    }
};
Counter.styles = [css `
    button
    {
        color:var(--wvn-button-color, red);
    }

    `];
__decorate([
    property({ type: Number })
], Counter.prototype, "count", void 0);
Counter = __decorate([
    customElement("wvn-counter")
], Counter);
