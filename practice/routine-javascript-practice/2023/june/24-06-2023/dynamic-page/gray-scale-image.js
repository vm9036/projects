const canvas = document.getElementById('image-canvas');
const ctx = canvas.getContext('2d');
const fileInput = document.getElementById('file-input');
const imageContainer = document.getElementsByClassName('image-upload');
const downloadButton = document.getElementById('downloadButton');
const splitContainer = document.getElementsByClassName("split-container");
const displaySection = document.querySelector('#grayscale-container');
let originalImageData, originalHeight,originalWidth;
const maxCanvasWidth = 400; // Maximum canvas width

// image spliting section


fileInput.addEventListener('change', () => {
  image = new Image();
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    image.onload = () => {
      originalWidth = image.width;
      originalHeight = image.height;
      let width = originalWidth;
      let height = originalHeight;
      let canvasWidth = originalWidth;
      let canvasHeight = originalHeight;
      if (width > maxCanvasWidth) {
        canvasWidth = maxCanvasWidth;
        canvasHeight = height * (maxCanvasWidth / width);
      }
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
    }
    image.src = reader.result;
  }
  reader.readAsDataURL(file);
});



const generateGrayScale = () => {
  displaySection.innerHTML = "";
  const grayscaleCanvas = document.createElement('canvas');
  grayscaleCanvas.setAttribute('id','grayscale-canvas');
  grayscaleCanvas.width = canvas.width;
  grayscaleCanvas.height = canvas.height;
  grayscaleContext = grayscaleCanvas.getContext('2d');
  grayscaleContext.drawImage(canvas, 0, 0);
  const imageData = grayscaleContext.getImageData(0, 0, grayscaleCanvas.width, grayscaleCanvas.height);
  for (let i = 0; i < imageData.data.length; i += 4) {
    const r = imageData.data[i];
    const g = imageData.data[i + 1];
    const b = imageData.data[i + 2];
    const gray = (r + g + b) / 3;
    imageData.data[i] = gray;
    imageData.data[i + 1] = gray;
    imageData.data[i + 2] = gray;
  }
  grayscaleContext.putImageData(imageData, 0, 0);
  displaySection.appendChild(grayscaleCanvas);
};


//add eventListner to JPG and PNG download buttons
document.getElementById("download-jpg").addEventListener("click", downloadImage);
document.getElementById("download-png").addEventListener("click", downloadImage);

function downloadImage(event) {
  var modifiedCanvas = document.createElement('canvas');
  modifiedCanvas.width = originalWidth;
  modifiedCanvas.height = originalHeight;
  var modifiedCtx = modifiedCanvas.getContext('2d');
  let newCanvas = document.getElementById('grayscale-canvas');
  modifiedCtx.drawImage(newCanvas, 0, 0, originalWidth, originalHeight);
  modifiedCtx.globalCompositeOperation = 'destination-in';
  modifiedCtx.rect(0, 0, originalWidth, originalHeight);
  modifiedCtx.fill();
  var downloadLink = document.createElement('a');
  if (event.target.id === 'download-jpg') {
    downloadLink.download = 'my-image.jpg';
    downloadLink.href = modifiedCanvas.toDataURL('image/jpeg');
  } else if (event.target.id === 'download-png') {
    downloadLink.download = 'my-image.png';
    downloadLink.href = modifiedCanvas.toDataURL('image/png');
  }
  downloadLink.click();
}