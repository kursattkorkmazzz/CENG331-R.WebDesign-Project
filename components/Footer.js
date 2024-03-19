class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("Connected Callback");
    this.innerHTML = `
      <footer>
      <p>2024 © ❤️ ile yapıldı.</p>
    </footer>
      `;
  }
}

customElements.define("common-footer", Footer);
