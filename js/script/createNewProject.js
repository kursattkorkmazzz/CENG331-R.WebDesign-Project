document.getElementById('create_project_button').addEventListener('click', function() {
    document.getElementById('create-project-form').style.display = 'block';
});


document.getElementById('create-project-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting normally

    // get form data
    var formData = new FormData(event.target);

    var file = formData.get('imageUpload'); // replace 'imageUpload' with the name of your file input
    if (file) {
        // create a URL representing the file
        var url = URL.createObjectURL(file);
    
        // log the URL to the console
        console.log('Image URL:', url);

        let card = document.createElement('project-card');
        card.name = formData.get('projectName');
        card.imagePath = url;
        document.getElementById('project-list').appendChild(card);
    } else {
        console.log('No file was selected');
    }
    document.getElementById('create-project-form').style.display = 'none';
});