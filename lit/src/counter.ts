import { css, customElement, html, LitElement, property, PropertyValues } from "lit-element";
@customElement("wvn-counter")
class Counter extends LitElement
{
    static styles = [css`
    button
    {
        color:var(--wvn-button-color, red);
    }

    `];

    @property({type:Number})
    public count = 0;

    increment()
    {
        this.count++;
    }

    decrement()
    {
        this.count--;
    }

    update(changedProperties: PropertyValues)
    {
        super.update(changedProperties)
        if (changedProperties.has('count'))
        {
            this.dispatchEvent(new CustomEvent('counterChanged', {bubbles: true}));
        }
    }

    render()
    {
        console.info('render');
        return html`
<button part="decrement" @click=${this.decrement}>-</button>
<span part="count">${this.count}</span>
<button part="increment" @click=${this.increment}>+</button>
`;
    }
}