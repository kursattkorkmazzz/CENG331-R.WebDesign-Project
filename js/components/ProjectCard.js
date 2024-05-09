class ProjectCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div id="card-wrapper">
    <img
      id="card-thumbnail"
      src="https://dummyimage.com/600x300/525252/fff.png"
    />
    <div id="card-bottom">
      <h2 id="card-bottom-header">Project Title</h2>
      <button class="bg-blue text-white" onclick="window.location.assign('./project.html')">Go to Project</button>
    </div>
  </div>
    
    `;
  }
}

customElements.define("project-card", ProjectCard);
