const template = document.createElement('template');
template.innerHTML = `
<style>
button
{
    color:var(--wvn-button-color, red);
}
</style>
<button id="decrement" part="decrement">-<b>-</b></button>
<slot></slot> 
<span id="count" part="count"></span>
<slot name="suffix"></slot>
<button id="increment" part="increment">+</button>
`;
class Counter extends HTMLElement
{
    static get observedAttributes(){return ["count"];}

    attributeChangedCallback(name, oldValue, newValue)
    {
        if (name === 'count')
        {
            const value = Number(newValue);
            if (value !== this.count)
            {
                this.count = value;
            }
        }
    }

    constructor()
    {
        super();
        this._count = 0;
        this.attachShadow({mode:'open'});
    }

    get count()
    {
        return this._count;
    }

    set count(value)
    {
        this._count = value;
        if (this.countElement)
        {
            this.countElement.textContent = value;
        }

        this.setAttribute("count", value);
        this.dispatchEvent(new CustomEvent('counterChanged', {bubbles: true}));
    }

    increment()
    {
        this.count++;
    }

    decrement()
    {
        this.count--;
    }

    connectedCallback()
    {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.countElement = this.shadowRoot.getElementById('count');
        this.countElement.textContent = this.count;
        this.shadowRoot.getElementById('decrement').addEventListener('click', this.decrement.bind(this));
        this.shadowRoot.getElementById('increment').addEventListener('click', this.increment.bind(this));
    }
}

customElements.define('wvn-counter', Counter);