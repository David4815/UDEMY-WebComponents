class Tooltip extends HTMLElement {
    constructor() {
        super();
        
    }

    connectedCallback(){
const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)'; // Info icon
        this.appendChild(tooltipIcon);
        // this.attachShadow({ mode: 'open' });
    }
}

customElements.define('my-tooltip', Tooltip);