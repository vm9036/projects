// Select the input file element
var fileInput = document.querySelector('#file-input');
var originalHeight, originalWidth;
// global variable to preserve original image data
// selecting the image canvas
var canvas = document.getElementById('my-image');
var ctx = canvas.getContext("2d");


var container = document.getElementById("imageContainer");
var slider = document.querySelector('#radius-slider');


// onchage event on loading of a file which will draw image and canvas for
// original image
$('#file-input').change(function () {
  var file = this.files[0];
  var image = new Image();

  // Load the image into the canvas and resize it
  var reader = new FileReader();
  reader.onload = function (event) {
    image.src = event.target.result;
    image.onload = function () {
      let width, height;
      originalHeight = image.height;
      originalWidth = image.width;
      if (image.width > image.height) {
        var widthRatio = 500 / image.width;
        width = 500;
        height = image.height * widthRatio;
        if (height > 500) {
          var heightRatio = 500 / height;
          height = 500;
          width = width * heightRatio;
        }
      } else {
        var heightRatio = 500 / image.height;
        height = 500;
        width = image.width * heightRatio;
        if (width > 500) {
          var widthRatio = 500 / width;
          width = 500;
          height = height * widthRatio;
        }
      }
      canvas.width = width;
      canvas.height = height;
      console.log(width, height);
      container.style.height = height + 10 + "px";
      container.style.width = width + 10 + "px";
      ctx.drawImage(image, 0, 0, width, height);
      originalData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    };
  };
  reader.readAsDataURL(file);
});

//add eventListner to JPG and PNG download buttons
document.getElementById("imageJPG").addEventListener("click", downloadImage);
document.getElementById("imagePNG").addEventListener("click", downloadImage);

function downloadImage(event) {
  var modifiedCanvas = document.createElement('canvas');
  modifiedCanvas.width = originalWidth;
  modifiedCanvas.height = originalHeight;
  var modifiedCtx = modifiedCanvas.getContext('2d');
  modifiedCtx.drawImage(canvas, 0, 0, originalWidth, originalHeight);
  modifiedCtx.globalCompositeOperation = 'destination-in';
  modifiedCtx.rect(0, 0, originalWidth, originalHeight);
  modifiedCtx.fill();
  var downloadLink = document.createElement('a');
  if (event.target.id === 'imageJPG') {
    downloadLink.download = 'my-image.jpg';
    downloadLink.href = modifiedCanvas.toDataURL('image/jpeg');
  } else if (event.target.id === 'imagePNG') {
    downloadLink.download = 'my-image.png';
    downloadLink.href = modifiedCanvas.toDataURL('image/png');
  }
  downloadLink.click();


}

document.getElementById('invert-btn').addEventListener('click', () => {

  // invert the colors of the canvas
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    // invert the color of each pixel
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
    // keep the alpha value the same
  }

  // put the inverted image data back to the canvas
  ctx.putImageData(imageData, 0, 0);
  console.log("inverted");
}
);