const MOCK_PROJECT_URL = "../../mock/project.json";
const MOCK_TASK_URL = "../../mock/task.json";

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
