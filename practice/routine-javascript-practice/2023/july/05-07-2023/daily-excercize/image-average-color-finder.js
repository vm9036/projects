function preview_image(event) {
    let colorDiv = document.getElementById("colorDiv");
    colorDiv.style.display = "";
  
    let imgdiv = document.getElementById("imgdiv");
    imgdiv.style.display = "";
  
    let image_before = document.getElementById("image_before");
    image_before.style.display = "none";
  
    let pic = document.getElementById("filename");
    pic.style.display = "";
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("output_image");
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log("image name : " + event.target.files[0].name);
    pic.innerHTML = event.target.files[0].name;
  }
  
  function getBackgroundColor() {
    var colorThief = new BackgroundColorTheif();
    var rgb = colorThief.getBackGroundColor(
      document.getElementById("output_image")
    );
    //alert("rgb value from image: " + rgb);
    let backgroundColor = rgb.toString();
    //alert("background color : " + backgroundColor);
    let rgb1 = backgroundColor.split(",")[0];
    let rgb2 = backgroundColor.split(",")[1];
    let rgb3 = backgroundColor.split(",")[2];
    let rgbFirstValue = rgb1.Length == 1 ? "0" + rgb1 : rgb1;
    let rgbSecondValue = rgb2.Length == 1 ? "0" + rgb2 : rgb2;
    let rgbThirdValue = rgb3.Length == 1 ? "0" + rgb3 : rgb3;
    let hexValues = RGBToHEX(rgbFirstValue, rgbSecondValue, rgbThirdValue);
    // alert("hexvalue : " + hexValues);
    let rgbaValues =
      "rgb(" + rgbFirstValue + "," + rgbSecondValue + "," + rgbThirdValue + ")";
  
    document.getElementById("LightColor").style.backgroundColor =
      "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
  
    document.getElementById("hex1").innerHTML = hexValues;
    document.getElementById("RGBA1").innerHTML = rgbaValues;
  
    document.getElementById("HSLA").innerHTML = RGBToHSL(
      rgbFirstValue,
      rgbSecondValue,
      rgbThirdValue
    );
    document.getElementById("colorType").innerHTML = RGBToColorName(hexValues);
  }
  
  function RGBToHSL(r, g, b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
  
    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
  
    // Calculate hue
    // No difference
    if (delta == 0) h = 0;
    // Red is max
    else if (cmax == r) h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g) h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
  
    // Calculate lightness
    l = (cmax + cmin) / 2;
  
    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return "hsl(" + h + "," + s + "%," + l + "%)";
  }
  
  function RGBToHEX(r, g, b) {
    return "#" + ((r << 16) | (g << 8) | b).toString(16).toUpperCase();
  }
  
  function RGBToColorName(hexValue) {
    var n_match = ntc.name(hexValue);
    n_rgb = n_match[0]; // RGB value of closest match
    n_name = n_match[1]; // Text string: Color name
    n_exactmatch = n_match[2]; // True if exact color match
    return n_name;
  }