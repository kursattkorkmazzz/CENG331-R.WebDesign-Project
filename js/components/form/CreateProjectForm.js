// This class is HTML element and represents our footer element.
class CreateProjectForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <form id="create-project-form">
            <label for="projectImage">Project Image:</label>
            <div id="previewContainer"></div>
            <input type="file" id="imageUpload" name="imageUpload"  required />
            
            <label for="projectName">Project Name:</label>
            <input type="text" id="projectName" name="projectName" required>
            
            <button type="submit">Submit</button>
        </form>
    `;
  }
}
customElements.define("create-project-form", CreateProjectForm);
