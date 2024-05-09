// MODEL
var todoList = [
  new TodoCard(0, "To Do 1", "This is a description for To Do 1", "todo"),
  new TodoCard(1, "To Do 2", "This is a description for To Do 2", "done"),
];

// CONTROLLER

/**
 * Updates UI according to UI.
 */

function updateUI() {
  todoListElement = document.getElementById("todo-list");
  inprogressListElement = document.getElementById("inprogress-list");
  inreviewListElement = document.getElementById("inreview-list");
  doneListElement = document.getElementById("done-list");

  if (todoListElement) {
    todoListElement.innerHTML = "";
  }
  if (inprogressListElement) {
    inprogressListElement.innerHTML = "";
  }
  if (inreviewListElement) {
    inreviewListElement.innerHTML = "";
  }
  if (doneListElement) {
    doneListElement.innerHTML = "";
  }
  todoList.forEach((todo) => {
    switch (todo.status) {
      case "todo":
        if (todoListElement) {
          todoListElement.appendChild(todo);
        }
        break;
      case "inprogress":
        if (inprogressListElement) {
          inprogressListElement.appendChild(todo);
        }
        break;
      case "inreview":
        if (inreviewListElement) {
          inreviewListElement.appendChild(todo);
        }
        break;
      case "done":
        if (doneListElement) {
          doneListElement.appendChild(todo);
        }
        break;
    }
  });
}

/**
 * Adds new todo
 */
function addNewToDo() {
  alert("New todo added!");
}

function updateStatusOfTodo(id, newStatus) {
  todoList.forEach((todo) => {
    if (todo._id == id) {
      todo.status = newStatus;
    }
  });

  updateUI();
}

// Drag and Drop

function drag(ev, id) {
  ev.dataTransfer.setData("drag-todo_id", id);
}

function drop(ev) {
  ev.preventDefault();
  var id = ev.dataTransfer.getData("drag-todo_id");

  switch (ev.target.id) {
    case "todo-list":
      updateStatusOfTodo(id, "todo");
      break;
    case "inprogress-list":
      updateStatusOfTodo(id, "inprogress");
      break;
    case "inreview-list":
      updateStatusOfTodo(id, "inreview");
      break;
    case "done-list":
      updateStatusOfTodo(id, "done");
      break;
  }
}
function allowDrop(ev) {
  ev.preventDefault();
}
