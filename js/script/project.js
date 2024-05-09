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

function updateStatusOfTodo(id, newStatus) {}
