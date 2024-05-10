const imageUpload = document.getElementById("imageUpload");
const previewContainer = document.getElementById("previewContainer");

imageUpload.addEventListener("change", function () {
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = document.createElement("img"); // Create an image element
    img.src = e.target.result;
    img.alt = "Selected Image Preview";
    img.classList = "image-preview";
    previewContainer.innerHTML = ""; // Clear previous preview (if any)
    previewContainer.appendChild(img); // Add the image to the preview container
  };
  reader.readAsDataURL(this.files[0]);
});
