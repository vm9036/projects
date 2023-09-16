const fileInput = document.getElementById('inputTag');
var imagePreview = document.getElementById('input-image');
const downloadButton = document.getElementById('download-button');
let originalWidth, originalHeight;

//changes to the file input
fileInput.addEventListener('change', function () {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    imagePreview.src = event.target.result;
    imagePreview.onload = function () {
      // get width and height
      let width, height;
      width = imagePreview.naturalWidth;
      height = imagePreview.naturalHeight;
      originalHeight = height;
      originalWidth = width;
      if (width > height) {
        if (width > 500) {
          height *= 500 / width;
          width = 500;
        }
      } else {
        if (height > 500) {
          width *= 500 / height;
          height = 500;
        }
      }
      console.log(width, height);
      // update DOM elements
      imagePreview.style.width = width + "px";
      imagePreview.style.height = height + "px";
    };
  };

  reader.readAsDataURL(file);
  $('#slider-icon').css("display", "none");
  $('#image-process-text').css("display", "none");
});

downloadButton.addEventListener('click', function () {
  var modifiedCanvas = document.createElement('canvas');
  modifiedCanvas.width = originalWidth;
  modifiedCanvas.height = originalHeight;
  var modifiedCtx = modifiedCanvas.getContext('2d');
  modifiedCtx.filter = getComputedStyle(imagePreview).filter;
  modifiedCtx.drawImage(imagePreview, 0, 0);
  var downloadLink = document.createElement('a');
  downloadLink.download = 'my-image.jpg';
  downloadLink.href = modifiedCanvas.toDataURL('image/jpeg');
  downloadLink.click();
});

function changeFilter(classname) {
  classname = classname.split(" ");
  element = document.getElementById("input-image");
  element.setAttribute("class", "container" + " " + classname[0]);
}



// function to reset image
function resetImage() {
  changeFilter("normal");
}
