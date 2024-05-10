// MODEL
var todoList = [
  new TodoCard(0, "To Do 1", "This is a description for To Do 1", "todo"),
  new TodoCard(1, "To Do 2", "This is a description for To Do 2", "done"),
];

$(document).ready(function () {
  updateUI();
  toggleForm();

  // Plugin activation
  $("#status").selectric();
  // Form Handler
  $("#todo_list-modal_wrapper-addTodo").on("click", function (event) {
    if (event.target.id === "todo_list-modal_wrapper-addTodo") {
      $(this).hide();
    }
  });

  $("#todo_list-add_form").on("submit", addNewToDo);
});

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
function addNewToDo(ev) {
  ev.preventDefault();

  const todoName = $("#todo_list-add_form input[name='todoName']").val();
  const todoDescription = $(
    "#todo_list-add_form input[name='todoDescription']"
  ).val();
  const status = $("#todo_list-add_form select[name='status']").val();

  let newId = generateNewId();
  let newTodo = new TodoCard(newId, todoName, todoDescription, status);
  todoList.push(newTodo);

  toggleForm();
  updateUI();
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

  switch (ev.currentTarget.id) {
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

// Toggles the form for adding a new todo card
function toggleForm() {
  if ($("#todo_list-modal_wrapper-addTodo").is(":hidden")) {
    $("#todo_list-modal_wrapper-addTodo").show();
  } else {
    $("#todo_list-modal_wrapper-addTodo").hide();
  }
}

// UTILS
// Generates a new id for a new todo
function generateNewId() {
  let generatedId = 0;
  while (todoList.some((todo) => todo._id === generatedId)) {
    generatedId++;
  }
  return generatedId;
}
