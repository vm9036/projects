function highlighted() {
    const buttonDiv = document.getElementById("fontId");
    buttonDiv.style.display = "";
  }
  
  /*function showtext() {
    var vara = new Vara(
      "#container-animation",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json"
    );
  }*/
  
  /*function setFontFamily() {
    alert();
    var vara = new Vara(
      "#container-animation",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json"
    );
    const text = document.getElementById("text");
    text.style.setProperty("font-family", vara);
  }*/
  
  function veryLow() {
    const fontId = document.getElementById("fontId");
    fontId.style.display = "none";
  
    const veryLow = document.getElementById("outputDiv");
    veryLow.style.fontFamily = "serif";
  }
  
  function Low() {
    const fontId = document.getElementById("fontId");
    fontId.style.display = "none";
  
    const Low = document.getElementById("outputDiv");
    Low.style.fontFamily = "system-ui";
  }
  
  function medium() {
    const fontId = document.getElementById("fontId");
    fontId.style.display = "none";
  
    const medium = document.getElementById("outputDiv");
    medium.style.fontFamily = "sans-serif";
  }
  
  function high() {
    const fontId = document.getElementById("fontId");
    fontId.style.display = "none";
  
    const high = document.getElementById("outputDiv");
    high.style.fontFamily = "Georgia";
  }
  
  function veryHigh() {
    const fontId = document.getElementById("fontId");
    fontId.style.display = "none";
  
    const veryHigh = document.getElementById("outputDiv");
    veryHigh.style.fontFamily = "system-ui";
  }