class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
      <p>2024 © ❤️ ile yapıldı.</p>
    </footer>
      `;
  }
}

customElements.define("common-footer", Footer);
