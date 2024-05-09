// This class is HTML element and represents our footer element.
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
      <p>2024 © made with ❤️.</p>
    </footer>
      `;
  }
}

customElements.define("common-footer", Footer);
