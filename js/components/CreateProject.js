// This class is HTML element and represents our footer element.
class CreateProject extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <form>
            <label for="projectName">Project Name:</label>
            <input type="text" id="projectName" name="projectName">

            <label for="projectImage">Project Image:</label>
            <input type="text" id="projectImage" name="projectImage">

            <button type="submit">Submit</button>
        </form>
    `;
  }
}
customElements.define("create-project-form", CreateProject);
