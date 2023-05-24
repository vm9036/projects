const fileInput = document.querySelector("#file-input");
var originalWidth, originalHeight;
const canvas = document.querySelector("#my-canvas");
const radiusSlider = document.querySelector("#radius-slider");
// const bgColorPicker = document.querySelector('#color-picker');
const downloadButton = document.querySelector("#download-button");
const container = document.getElementById("image-container");

// image upload file
const fileInput1 = document.querySelector('#file-js-example input[type=file]');
  fileInput1.onchange = () => {
    if (fileInput1.files.length > 0) {
      const fileName = document.querySelector('#file-js-example .file-name');
      fileName.textContent = fileInput1.files[0].name;
    }
  }

// load image from file input and draw it on the canvas
fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    const img = new Image();
    img.onload = function () {
      const maxWidth = 800;
      const maxHeight = 500;
      const width = img.width;
      const height = img.height;
      originalHeight = img.height;
      originalWidth = img.width;
      if (width > maxWidth || height > maxHeight) {
        if (width / height > maxWidth / maxHeight) {
          canvas.width = maxWidth;
          canvas.height = (height * maxWidth) / width;
        } else {
          canvas.width = (width * maxHeight) / height;
          canvas.height = maxHeight;
        }
      } else {
        canvas.width = width;
        canvas.height = height;
      }
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
});

// change the border radius of the canvas based on the value of the slider
radiusSlider.addEventListener("input", function () {
  var radius = this.value;
  canvas.style.borderRadius = radius + "px";
});

// // change the background color of the container based on the value of the color picker
// bgColorPicker.addEventListener('input', function () {
//   const bgColorValue = this.value;
//   // document.querySelector('#image-container').style.backgroundColor ='transparent';
//   // canvas.style.backgroundColor = 'rgba(0, 0, 0, 0)';
// });

// download the modified canvas when the button is clicked
downloadButton.addEventListener("click", function () {
  html2canvas(document.querySelector("#my-canvas"), {
    backgroundColor: null,
    useCORS: true,
  }).then(function (canvas) {
    const downloadCanvas = document.createElement("canvas");
    downloadWidth = originalWidth;
    downloadHeight = originalHeight;
    downloadCanvas.width = originalWidth;
    downloadCanvas.height = originalHeight;

    // draw the uploaded image onto the new canvas, using the original width and height of the image
    const downloadCtx = downloadCanvas.getContext("2d");
    downloadCtx.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      downloadWidth,
      downloadHeight
    );

    // get the base64-encoded data URL of the resized image
    const dataURL = downloadCanvas.toDataURL("image/png", 0.8);

    // create a link element with the download attribute set to the desired filename and the href attribute set to the data URL of the resized image
    const downloadLink = document.createElement("a");
    downloadLink.download = "image.png";
    downloadLink.href = dataURL;

    // simulate a click on the link element to initiate the download
    downloadLink.click();
  });
});
