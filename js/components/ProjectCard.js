class ProjectCard extends HTMLElement {
  constructor(name = "Project Title", imagePath = "https://dummyimage.com/600x300/525252/fff.png") {
    super();
    this.name = name;
    this.imagePath = imagePath;
  }
  connectedCallback() {
    this.innerHTML = `
    <div id="card-wrapper">
    <img
      id="card-thumbnail"
      src=${this.imagePath}
    />
    <div id="card-bottom">
      <h2 id="card-bottom-header">${this.name}</h2>
      <button class="bg-blue text-white" onclick="window.location.assign('./project.html')">Go to Project</button>
    </div>
  </div>
    `;
  }
}

customElements.define("project-card", ProjectCard);
