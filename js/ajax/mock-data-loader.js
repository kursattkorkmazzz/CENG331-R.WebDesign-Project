const MOCK_PROJECT_URL = "../../mock/project.json";
const MOCK_TASK_URL = "../../mock/task.json";
const MOCK_USER_URL = "https://randomuser.me/api/";

// Mock project loader if there is no exist a real project.
function mockProjectLoader(projectList) {
  $.get(MOCK_PROJECT_URL, function (data) {
    $.each(data.projects, function (index, project) {
      projectList.appendChild(
        new ProjectCard(project.id, project.name, project.image)
      );
    });
  });
}

function mockTaskLoader(todoList, project_id, callback) {
  $.get(MOCK_TASK_URL, function (data) {
    $.each(data.tasks, function (index, task) {
      if (task.project_id == project_id) {
        let todo = new TodoCard(
          task.id,
          task.name,
          task.description,
          task.status
        );

        todoList.push(todo);
      }
    });
    if (callback) {
      callback();
    }
  });
}

function mockUserLoader() {
  $.ajax({
    url: MOCK_USER_URL,
    dataType: "json",
    success: function (data) {
      $("#avatar-img").attr("src", data.results[0].picture.large);
      $("#username").text(
        data.results[0].name.first + " " + data.results[0].name.last
      );
      $("#email").text(`<< ${data.results[0].email} >>`);
    },
  });
}
