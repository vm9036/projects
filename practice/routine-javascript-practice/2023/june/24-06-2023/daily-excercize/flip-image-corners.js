// Select the input file element
const fileInput = document.querySelector('#file-input');
// global variable to preserve original image data
var originalData,originalWidth, originalHeight;
// checkbox for auto preview
var checkbox = document.getElementById("auto-preview-btn");
// selecting the image canvas
var canvas = document.getElementById('image-canvas');
var ctx = canvas.getContext("2d");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");

btn1.addEventListener('click', flipCanvasHorizontally);

btn2.addEventListener('click', flipCanvasVertically);

function flipCanvasVertically() {
    // Create a temporary canvas to store the flipped image
    var tempCanvas = document.createElement("canvas");
    console.log(canvas);
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    var tempCtx = tempCanvas.getContext("2d");
    // Flip the image vertically
    tempCtx.scale(1, -1);
    tempCtx.translate(0, -canvas.height);
    tempCtx.drawImage(canvas, 0, 0);
    // Replace the existing canvas with the flipped image
    canvas.width = tempCanvas.width;
    canvas.height = tempCanvas.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tempCanvas, 0, 0);
  }
  
  function flipCanvasHorizontally() {
    console.log("flipped");
    // Create a temporary canvas to store the flipped image
    var tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    var tempCtx = tempCanvas.getContext("2d");
    // Flip the image horizontally
    tempCtx.scale(-1, 1);
    tempCtx.translate(-canvas.width, 0);
    tempCtx.drawImage(canvas, 0, 0);
    // Replace the existing canvas with the flipped image
    canvas.width = tempCanvas.width;
    canvas.height = tempCanvas.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tempCanvas, 0, 0);
  }
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
            originalHeight = image.height;
            originalWidth = image.width;
            var canvasWidth = image.width;
            var canvasHeight = image.height;
            if (canvasWidth > 400) {
                canvasHeight = canvasHeight * (400 / canvasWidth);
                canvasWidth = 400;
            }
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
            $('#image-preview').attr('src', canvas.toDataURL()).css('display', 'inline');
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
    downloadLink.href = modifiedCanvas.toDataURL('image/jpeg',0.9);
  } else if (event.target.id === 'imagePNG') {
    downloadLink.download = 'my-image.png';
    downloadLink.href = modifiedCanvas.toDataURL('image/png',1);
  }
  downloadLink.click();
}