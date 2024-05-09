class GetContactForm extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <form id="get-contact-form" class="bg-black text-white">
        <div id="user-infos">
            <div>
                <label for="name">Name & Surname</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
        </div>
        <div>
            <label for="message-title">Message Title:</label>
            <input type="text" id="message-title" name="message-title" required />
        </div>
        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" cols="50" required></textarea>
        </div>
        <div>
            <button class="bg-white" type="submit">Submit</button>
        </div>
    </form>`;

    this.querySelector('#get-contact-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully');
        location.reload();
      });
  } 
}
customElements.define("get-contact-form", GetContactForm);
