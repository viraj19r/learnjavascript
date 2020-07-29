class ConfirmLink extends HTMLAnchorElement {
  // here we are targeting only the custom elements only
  connectedCallback() {
    this.addEventListener("click", (event) => {
      if (!confirm("Do you really want to leave this page ?")) {
        event.preventDefault();
      }
    });
  }
}
customElements.define("my-confirm-link", ConfirmLink, { extends: "a" }); // here i need to add a third argument in order to extend inbuilt anchor tag which we are already using
