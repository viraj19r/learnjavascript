class Tooltip extends HTMLElement {
  // HTMLElements is a base element that we always need to extend to create custom elements

  constructor() {
    super(); // required use it to call the constructor of base class HTMLElement
    this._tooltipContainer; // we added it here so that we can remove it later when the hover over action is done
    this._tooltipText = "default text in case not set in text attribute inside html code";
    this.attachShadow({ mode: "open" }); // attach a shadow tree to give style to tooltip box
    // open means we can also access it outside of this file too
    this.shadowRoot.innerHTML = `
     <style>
        div {
            background-color : black;
            color: white;
            position: absolute;
            z-index : 10;
        }
     </style>
     <slot> some default value for slot</slot>
     <span> (?) </span>`; // slots are added to show content/text inside the template which is in between our custom elements
    // here we can not attach child to our newly created elements,here we can only do basic initializations like creating elements
  } // so to connect the html content to dom we use connectedCallback method(for dom initialization)

  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._tooltipText = this.getAttribute("text");
    }
    const toolTipIcon = this.shadowRoot.querySelector("span");
    toolTipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    toolTipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));
    this.shadowRoot.appendChild(toolTipIcon); // this will now access the shadow dom tree and append the child to it but the text will not be shown (that will be shown when we use html templates)
    this.style.position = "relative";
  }
  _showTooltip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = this._tooltipText;
    this.shadowRoot.appendChild(this._tooltipContainer);
    
  }
  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}
// we should always name custom elements using two names and a dash(-) in between them so that they never match  with the inbuilt elements

customElements.define("my-tooltip", Tooltip); // customElements.define("custom element name", class where our logic is defined)
