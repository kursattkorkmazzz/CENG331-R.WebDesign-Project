const MOCK_PROJECT_URL = "../../mock/project.json";

// Mock project loader if there is no exist a real project.
function mockProjectLoader(projectList) {
  $.get(MOCK_PROJECT_URL, function (data) {
    $.each(data.projects, function (index, project) {
      projectList.appendChild(new ProjectCard(project.name, project.image));
    });
  });
}
