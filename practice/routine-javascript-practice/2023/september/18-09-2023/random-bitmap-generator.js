function generateRandomBitmap() {
  var tool = this;
  var opts = parseOptions(tool);
  if (!opts) return "";
  var size = opts.size;
  var colors = opts.colors;
  var shade = opts.shade;
  var colorPicker = document.getElementById("color-picker").value;
  console.log("colorPicker :-> " + colorPicker);

  threshold = stick_to_range(opts.threshold, 0, 1);
  var canvas = document.querySelector(".data");
  var preview = document.querySelector(".preview");
  var ctx = canvas.getContext("2d");
  canvas.width = opts.width || preview.clientWidth;
  canvas.height = opts.height || preview.clientHeight;
  // opts.showStatus(canvas.width + "×" + canvas.height);
  ctx.fillStyle = opts.background;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i <= canvas.width; i += size) {
    for (var j = 0; j <= canvas.height; j += size) {
      var color = random_element(colors) || random_color();
      if (shade) {
        color = shade
          ? shade_color(color, random_number(-threshold, threshold))
          : color;
      }
      ctx.fillStyle = color;
      ctx.fillRect(i, j, size, size);
    }
  }
  tool.respond();
  preview.width = preview.clientWidth;
  preview.height = preview.clientHeight;
  fillTransparencyEffect(preview);
  var fit = best_image_fit(
    canvas.width,
    canvas.height,
    preview.width,
    preview.height
  );
  preview
    .getContext("2d")
    .drawImage(canvas, fit.offsetX, fit.offsetY, fit.width, fit.height);
  tool.output.showStatus(canvas.width + "×" + canvas.height);
}

function parseOptions(tool) {
  // var options = tool.options.get();
  var error = function (a, b) {
    tool.output.showNegativeBadge(a, b, -1);
  };
  var size = document.getElementById("size").value;
  var extension = "png";
  size = size.trim() || 5;
  console.log("size :-> " + size);
  if (!/^[+-]?\d+$/.test(size)) {
    error("Invalid Bit Size", "Bit size is not a number.");
    return false;
  }
  size = parseInt(size);
  if (size < 1) {
    error("Invalid Bit Size", "Bit size must be a positive number.");
    return false;
  }
  var set = document.getElementById("colors").value;
  set = (set.trim() || "").split(/\n+/);
  console.log("set :-> " + set);
  var colors = [];
  for (var i = 0; i < set.length; i++) {
    if (/^\s*$/.test(set[i]) || set[i] == "random") {
      continue;
    }
    if (!isColorValid(set[i])) {
      error(
        "Invalid Color",
        'The color "{0}" is not a valid color.'.format(set[i])
      );
      return false;
    }
    colors.push(set[i]);
  }
  var shade = document.getElementById("shade").checked;
  console.log("shade :-> " + shade);
  if (shade) {
    var threshold = document.getElementById("shade-threshold").value;
    threshold = threshold.trim();
    console.log("thrsehold :-> " + threshold);
    if (!/^[+-]?\d*\.?\d+$/.test(threshold)) {
      error("Invalid Shade Threshold", "Shade threshold is not a number.");
      return false;
    }
    threshold = parseFloat(threshold);
    if (threshold < 0 || threshold > 1) {
      error(
        "Invalid Shade Threshold",
        "Shade threshold must be between 0 and 1."
      );
      return false;
    }
  } else {
    var threshold = 0;
  }
  var width = document.getElementById("width").value;
  width = width.trim();
  console.log("Width :-> " + width);
  if (width.length == 0 || width == "auto") {
    width = false;
  } else {
    if (!/^[+-]?\d+$/.test(width)) {
      error("Invalid Width", "Width is not a number.");
      return false;
    }
    width = parseInt(width);
    if (width <= 0) {
      error("Invalid Width", "Width must be a positive number.");
      return false;
    }
  }
  var height = document.getElementById("height").value;
  height = height.trim();
  console.log("height :-> " + height);
  if (height.length == 0 || height == "auto") {
    height = false;
  } else {
    if (!/^[+-]?\d+$/.test(height)) {
      error("Invalid Height", "Height is not a number.");
      return false;
    }
    height = parseInt(height);
    if (height <= 0) {
      error("Invalid Height", "Height must be a positive number.");
      return false;
    }
  }
  var background = "white" || "transparent";
  if (extension === "jpg") {
    var rgba = colorToRGBA(background);
    if (rgba.a < 255) {
      background = "white";
    }
  }
  return {
    size: size,
    colors: colors,
    shade: shade,
    threshold: threshold,
    width: width,
    height: height,
    background: background,
  };
}

function fillTransparencyEffect(canvas) {
  var ctx = canvas.getContext("2d");
  var w = canvas.width;
  var h = canvas.height;
  var size = 15;
  var odd = true;
  for (var i = 0; i <= w; i += size) {
    for (var j = 0; j <= h; j += size) {
      if (odd) ctx.fillStyle = "#ffffff";
      else ctx.fillStyle = "#efefef";
      odd = !odd;
      ctx.fillRect(i, j, i + size, j + size);
    }
  }
}
function stick_to_range(number, from, to) {
  var stuck = number;
  if (number < from) stuck = from;
  if (number > to) stuck = to;
  return stuck;
}
function random_element(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function random_number(min, max) {
  return Math.random() * (max - min) + min;
}
function random_int(min, max) {
  return Math.round(random_number(min, max));
}
function random_color() {
  var color = random_int.bind(null, 0, 255);
  var alpha = random_number.bind(null, 0, 1);
  return "rgba({0}, {1}, {2}, {3})".format(
    color(),
    color(),
    color(),
    alpha().toFixed(2)
  );
}
function shade_color(text, percent) {
  if (percent == 0) return text;
  var color = colorToRGBA(text);
  var t = percent < 0 ? 0 : 255;
  var red = Math.round((t - color.r) * -percent) + color.r;
  var green = Math.round((t - color.g) * -percent) + color.g;
  var blue = Math.round((t - color.b) * -percent) + color.b;
  return "rgba({0}, {1}, {2}, {3})".format(red, green, blue, color.a / 255);
}

function downloader(cb) {
  var tool = this;
  var mimes = {
    png: "image/png",
    jpg: "image/jpeg",
  };
  var ext = this.options.get().extension || "png";
  var outputCanvas = tool.output.element.querySelector(".data");
  if (ext == "png" || ext == "jpg") {
    outputCanvas.toBlob(function (blob) {
      return cb([blob, "output-" + tool.siteName + "." + ext], null);
    }, mimes[ext]);
  } else if (ext == "bmp") {
    var blob = CanvasToBMP.toBlob(outputCanvas);
    return cb([blob, "output-" + tool.siteName + ".bmp"], null);
  }
}
