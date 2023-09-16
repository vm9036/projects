// Select the input file element
const fileInput = document.querySelector('#file-input');
// global variable to preserve original image data
var originalData,originalWidth,originalHeight;
// global varibles for selected coordinates of image using imgareaselect
var x1, y1, x2, y2;
// checkbox for auto preview
var checkbox = document.getElementById("auto-preview-btn");
// selecting the image canvas
var canvas = document.getElementById('image-canvas');
var ctx = canvas.getContext("2d");



// calling onclick function for button pixelate when auto-preview is 
// not enabled
$('#pixelate-btn').click(function () {
    pixelate();
});

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
            originalWidth = image.width;
            originalHeight = image.height;
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
            const initImgAreaSelect = function () {
                $('#image-preview').imgAreaSelect({
                    x1: 0,
                    y1: 0,
                    x2: 100,
                    y2: 100,
                    handles: true,
                    onSelectEnd: function (img, selection) {
                        selectedArea = selection; // set the global variable
                        setTimeout(function () {
                            // use selectedArea after a delay of 1 second
                            if (selectedArea !== null) {
                                x1 = selectedArea.x1;
                                y1 = selectedArea.y1;
                                x2 = selectedArea.x2;
                                y2 = selectedArea.y2;
                                w = selection.width;
                                h = selection.height;
                                console.log(x1, y1, x2, y2);
                                // perform further processing
                                if (checkbox.checked) pixelate();
                            }
                        }, 1000);
                    }
                });
            };            
            if (canvas.width && canvas.height) {
                console.log("canvas is complete");
                initImgAreaSelect();
            }

        };
    };
    reader.readAsDataURL(file);
});



function pixelate() {
  ctx.putImageData(originalData, 0, 0);
  
  // Get the dimensions of the selected region and the canvas
  const regionWidth = x2 - x1;
  const regionHeight = y2 - y1;
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  
  // Calculate the optimal block size based on the dimensions of the selected region
  let blockSize = Math.max(5, Math.min(Math.floor(regionWidth / 10), Math.floor(regionHeight / 10)));
  
  // Loop through each block
  for (let y = y1; y < y2; y += blockSize) {
    for (let x = x1; x < x2; x += blockSize) {
      let r = 0, g = 0, b = 0, a = 0, count = 0;
      
      // Calculate the average color of the block
      for (let dy = 0; dy < blockSize && y + dy < y2; dy++) {
        for (let dx = 0; dx < blockSize && x + dx < x2; dx++) {
          const pixelData = ctx.getImageData(x + dx, y + dy, 1, 1).data;
          r += pixelData[0];
          g += pixelData[1];
          b += pixelData[2];
          a += pixelData[3];
          count++;
        }
      }
      r /= count;
      g /= count;
      b /= count;
      a /= count;
      
      // Set the block color
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
      ctx.fillRect(x, y, Math.min(blockSize, x2 - x), Math.min(blockSize, y2 - y));
    }
  }
  ctx.putImageData(imageData, 0, 0);
  console.log("pixelated");
}



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
