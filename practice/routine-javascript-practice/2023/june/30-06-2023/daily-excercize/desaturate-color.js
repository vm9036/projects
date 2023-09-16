var colorInput = document.getElementById("colorValue");
var colorPicker = document.getElementById("colorPicker");
var randomColorGenerator = document.getElementById("randomColor");
const displayArea = document.getElementById("color-display");

colorInput.addEventListener("input", (event) => {
  const hexColor = event.target.value;
  colorPicker.value = hexColor;
  desaturateColor();
});

colorPicker.addEventListener("input", (event) => {
  const hexColor = event.target.value;
  colorInput.value = hexColor;
  desaturateColor();
});

randomColorGenerator.addEventListener("click", (event) => {
  const hexColor = generateRandomHexColor();
  colorInput.value = hexColor;
  colorPicker.value = hexColor;
  desaturateColor();
});

const generateRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const desaturateColor = () => {
  let colorValue = colorInput.value;
  let desaturationAmount = document.getElementById("desaturate-value").value;
  let newColor = tinycolor(colorValue)
    .desaturate(Math.floor(desaturationAmount))
    .toString();
  document.getElementById("slider-value").innerHTML =
    Math.floor((desaturationAmount / 68) * 100) + "%";
  let color = tinycolor(newColor);
  const rgbValue = color.toRgbString();
  const hslValue = color.toHslString();
  const hsvValue = color.toHsvString();
  document.querySelector("#hexValue span").innerHTML = newColor.toUpperCase();
  document.querySelector("#rgbValue span").innerHTML = rgbValue;
  document.querySelector("#hslValue span").innerHTML = hslValue;
  document.querySelector("#hsvValue span").innerHTML = hsvValue;
  displayArea.style.backgroundColor = newColor;
};

desaturateColor();