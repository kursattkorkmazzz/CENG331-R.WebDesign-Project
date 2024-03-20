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
