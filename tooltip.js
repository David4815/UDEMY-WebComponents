class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
  }

  connectedCallback() {
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = " (?)"; // Info icon
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.appendChild(tooltipIcon);
    // this.attachShadow({ mode: 'open' });
  }


  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = 'This is a tooltip text';
    this.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.removeChild(this._tooltipContainer);
  }

}

customElements.define("my-tooltip", Tooltip);
