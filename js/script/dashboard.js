const PROJECT_LIST = [];

$(document).ready(function () {
  updateUI();

  mockUserLoader();

  $("#create_project_button").on("click", function () {
    $("#create-project-form").css("display", "block");
  });

  $("#create-project-form").on("submit", createProject);

  $(".project_img").magnificPopup({
    type: "image",
    closeBtnInside: false,
    closeOnContentClick: false,

    callbacks: {
      open: function () {
        var self = this;
        self.wrap.on("click.pinhandler", "img", function () {
          self.wrap.toggleClass("mfp-force-scrollbars");
        });
      },
      beforeClose: function () {
        this.wrap.off("click.pinhandler");
        this.wrap.removeClass("mfp-force-scrollbars");
      },
    },

    image: {
      verticalFit: false,
    },
  });
});

function updateUI() {
  const projectList = document.getElementById("project-list");
  projectList.innerHTML = "";

  if (PROJECT_LIST.length === 0) {
    mockProjectLoader(projectList);
    return;
  }

  PROJECT_LIST.forEach((project) => {
    projectList.appendChild(project);
  });
}

// This function is called when the form is submitted
// It creates a new project card and appends it to the project list
function createProject(event) {
  event.preventDefault(); // prevent the form from submitting normally

  // get form data
  var formData = new FormData(event.target);

  var file = formData.get("imageUpload"); // replace 'imageUpload' with the name of your file input
  if (file) {
    // create a URL representing the file
    var url = URL.createObjectURL(file);
    let id = 0;
    while (PROJECT_LIST.find((project) => project.id === id)) {
      id++;
    }

    let card = new ProjectCard(id, formData.get("projectName"), url);
    // log the URL to the console
    PROJECT_LIST.push(card);

    updateUI();
  } else {
    console.log("No file was selected");
  }
  $("#create-project-form").css("display", "none");
}
