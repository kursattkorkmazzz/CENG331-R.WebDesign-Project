// This class is HTML element and represents our header element.
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header id="header">
      <div id="banner">
        <h1>Product Name</h1>
      </div>
      <nav id="navbar">
        <ul>
          <li>
            <a href="./">Homepage</a>
          </li>
          <li>
            <a href="./dashboard.html">Go to app</a>
          </li>
          <li>
            <a href="./contact.html">Contact Us</a>
          </li>
        </ul>
        <li>
          <a href="./login.html">Login or Register</a>
        </li>
      </nav>
    </header>
    `;
  }
}

customElements.define("common-header", Header);
