class LoginPanel extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <div id="login-wrapper" class="bg-black text-white ">
        <form action="./index.html" method="post">
          <div class="text-white">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <a href="./register.html" class="sign-in text-white"> Sign In</a>
          </div>
          <div class="login-div">
            <button type="submit" class="bg-red   text-white login-button">Login</button>
          </div>
          <div>
          </div>
        </form>
      </div>
      
      `;
  }
}
customElements.define("login-panel", LoginPanel);
