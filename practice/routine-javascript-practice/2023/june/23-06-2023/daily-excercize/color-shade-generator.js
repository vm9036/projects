var colorPicker = document.getElementById("colorPicker");
var darkenSlider = document.getElementById("darkenSlider");
var stepSlider = document.getElementById("stepSlider");
var colorShades = document.getElementById("colorGrid");
var colorInfo = document.getElementById("colorInfo");

colorInfo.style.display = "none";

function generateColorShades(color, darkFactor, n) {
  var colorShades = [];
  var r = parseInt(color.substr(1, 2), 16);
  var g = parseInt(color.substr(3, 2), 16);
  var b = parseInt(color.substr(5, 2), 16);

  for (var i = n; i >=1 ; i--) {
    var lighterShade = [
      Math.round(r + ((255 - r) * i) / (n + 1)),
      Math.round(g + ((255 - g) * i) / (n + 1)),
      Math.round(b + ((255 - b) * i) / (n + 1))
    ];

    // Push lighter and darker shades as RGB strings to the array
    colorShades.push(rgbToHex(lighterShade[0], lighterShade[1], lighterShade[2]));
  }
  // Push original color as RGB string to the array
  colorShades.push(rgbToHex(r, g, b));
  for (var i = 1; i <= n; i++) {
    var darkerShade = [
      Math.round(r * Math.pow(darkFactor, i)),
      Math.round(g * Math.pow(darkFactor, i)),
      Math.round(b * Math.pow(darkFactor, i))
    ];

    // Push lighter and darker shades as RGB strings to the array
    colorShades.push(rgbToHex(darkerShade[0], darkerShade[1], darkerShade[2]));
  }
  console.log(colorShades);
  return colorShades;
}

function updateBackgroundColor() {
  // Get the selected color, darkening factor, and step count
  var color = document.getElementById("colorPicker").value;
  var factor = document.getElementById("darkenSlider").value / 100;
  var count = parseInt(document.getElementById("stepSlider").value);
  document.getElementById('darkness-value').innerHTML = `${Math.floor(factor*100)}%`;
  document.getElementById('step-count').innerHTML = `${count}`;
  // Generate a palette of color shades
  var shades = generateColorShades(color, factor, count);

  // Update the color boxes in the grid with the generated color shades
  var colorGrid = document.getElementById("colorGrid");
  colorGrid.innerHTML = "";
  for (var i = 0; i < shades.length; i++) {
    var colorBox = document.createElement("div");
    colorBox.className = "colorBox";
    colorBox.style.backgroundColor = shades[i];
    colorBox.innerHTML = shades[i];
    colorBox.onclick = function () {
      var colorInfo = document.getElementById("colorInfo");
      var rgbValues = this.style.backgroundColor.slice(4, -1).split(", ");
      var hexValue =
        "#" +
        parseInt(rgbValues[0]).toString(16).padStart(2, "0") +
        parseInt(rgbValues[1]).toString(16).padStart(2, "0") +
        parseInt(rgbValues[2]).toString(16).padStart(2, "0");
      var hsiValues = rgbToHsi(
        parseInt(rgbValues[0]),
        parseInt(rgbValues[1]),
        parseInt(rgbValues[2])
      );
      colorInfo.querySelector("#rgbValue").innerHTML =
        "RGB: " + "rgb("+this.style.backgroundColor.slice(4, -1)+")";
      colorInfo.querySelector("#hexValue").innerHTML =
        "HEX: " + hexValue.toUpperCase();
      colorInfo.querySelector("#hsiValue").innerHTML =
        "HSI: " + "(" +
        hsiValues.h.toFixed(0) +
        ", " +
        Math.round(hsiValues.s * 100) +
        "%, " +
        Math.round(hsiValues.i * 100) +
        "%" + ")";
      colorInfo.style.display = "block";
    };
    colorGrid.appendChild(colorBox);
  }
}

function rgbToHsi(r, g, b) {
  r = r / 255;
  g = g / 255;
  b = b / 255;
  var i = (r + g + b) / 3;
  var s = 1 - (3 * Math.min(r, g, b)) / (r + g + b);
  var h =
    Math.acos(
      (r - 0.5 * (g + b)) / Math.sqrt((r - g) * (r - g) + (r - b) * (g - b))
    ) *
    (180 / Math.PI);
  if (b > g) {
    h = 360 - h;
  }
  return { h: h, s: s, i: i };
}

function rgbToHex(r, g, b) {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const red = componentToHex(r);
  const green = componentToHex(g);
  const blue = componentToHex(b);

  return "#" + red + green + blue;
}

updateBackgroundColor();