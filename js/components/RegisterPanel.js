class RegisterPanel extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <div id="register-wrapper" class="bg-black text-white ">
        <form action="./index.html" method="post">
          <div class="text-white">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
          </div>
          <div>
          <input type="file" id="imageUpload" accept="image/*" />
          <div id="previewContainer"></div>
          </div>
          <div>
            <label for="selectOption">Choose the Role :</label>
            <select id="selectOption" name="selectOption" required>
              <option value="" disabled selected hidden>Select an option</option>
              <option value="owner">Owner</option>
              <option value="employee">Employee</option>
              <!-- Add more options as needed -->
            </select>
          </div>

          <div class="register-div">
            <button type="submit" class="bg-red   text-white">Register</button>
          </div>
        </form>
      </div>
      
      `;
  }
}
customElements.define("register-panel", RegisterPanel);
