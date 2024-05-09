class TodoCard extends HTMLElement {
  constructor(id, todoName, description, status) {
    super();
    this._id = id;
    this.todoName = todoName;
    this.description = description;
    this.status = status;
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="todo-card-wrapper" draggable="true" ondragstart="drag(event,${
      this._id
    })">
    <h1>${this.todoName ?? "Todo Name"}</h1>
    <p>
    ${this.description ?? "Todo Description"}
    </p>
    <p class="status" style="display:none;">${this.status ?? "todo"}</p>
    <p class="id" style="display:none;">${this._id ?? "null"}</p>
  </div>
    
    `;
  }
}

customElements.define("todo-card", TodoCard);
