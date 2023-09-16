function showbutton() {
    const buttonDiv = document.getElementById("showbutton");
    buttonDiv.style.display = "";
  }
  
  /*start download img function*/
  
  function downloadImage() {
    const buttonDiv = document.getElementById("showbutton");
    buttonDiv.style.display = "none";
    content = document.getElementById("outputDiv");
    content.style.background = "white";
    content.style.padding = "10px";
    domtoimage.toBlob(content).then(function (blob) {
      window.saveAs(blob, "my-node.png");
    });
  }
  /*end download img function*/
  
  /*start copy img function*/
  
  function copyOutputValue() {
    const buttonDiv = document.getElementById("showbutton");
    buttonDiv.style.display = "none";
    const copyValue = document.getElementById("outputDiv");
    copyValue.style.background = "#08BDBA";
    copyValue.style.color = "white";
  
    //copyValue.select();
    // copyValue.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyValue.innerText);
  
    //alert("Copied the text: " + copyValue.innerText);
  }
  
  /*end copy img function*/
  
  /*start pdf function*/
  function generatePDF() {
    const buttonDiv = document.getElementById("showbutton");
    buttonDiv.style.display = "none";
    //const element = document.getElementById("outputDiv");
    const elements = document.getElementById("outputDiv");
    var opt = {
      margin: 1,
      filename: "Download.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    // Choose the element that our invoice is rendered in.
    html2pdf().set(opt).from(elements).save();
  }
  
  function downloadCode() {
    var x = document.getElementById("outputDiv");
    generatePDF();
    /* setTimeout(function () {
      window.location = window.location;
    }, 3000);*/
  }
  /* end pdf function*/
  
  /*start epub function*/
  function generateEpub() {
    const buttonDiv = document.getElementById("showbutton");
    buttonDiv.style.display = "none";
    const element = document.getElementById("outputDiv");
    document.getElementById("outputDiv").style.display = "block";
    document.getElementById("outputDiv").style.marginTop = "0px";
    /*document.getElementById("outputDiv").style.border = "1px solid black";*/
    html2pdf().from(element).save("download.epub");
  }
  
  function downloadEpub() {
    const buttonDiv = document.getElementById("showbutton");
    buttonDiv.style.display = "none";
    var x = document.getElementById("outputDiv");
    generateEpub();
    setTimeout(function () {
      window.location = window.location;
    }, 3000);
  }
  
  /*end Epub function*/
  
  /*start copy html function*/
  function copyHtml() {
    const buttonDiv = document.getElementById("showbutton");
    buttonDiv.style.display = "none";
    const copyHtml = document.getElementById("outputDiv");
  
    navigator.clipboard.writeText(copyHtml.outerHTML);
    //alert("Copied the text: " + copyHtml.outerHTML);
  }
  
  /*end copy html function*/
  
  /*start markdown function*/
  function markdown() {
    const buttonDiv = document.getElementById("showbutton");
    buttonDiv.style.display = "none";
  
    const inputData = document.getElementById("inputDiv"),
      outputData = document.getElementById("outputDiv");
    //alert(inputData.value);
    let startData = inputData.value
      //navigator.clipboard.writeText(inputData.value);
      .split(" ")
      .map(
        (w) =>
          `**${w
            .split("")
            .slice(0, Math.ceil(w.length / 2))
            .join("")}**${w
            .split("")
            .slice(Math.ceil(w.length / 2), w.length)
            .join("")} `
      )
      .join(" ");
    navigator.clipboard.writeText(
      startData.replace("<b>", "").replace("</b>", "")
    );
    // navigator.clipboard.writeText(copyText.value);
    let markdown = startData.toString().replace("<b>", "").replace("</b>", "");
    //alert("Copied the text: " + markdown);
  }
  /*end markdown function*/
  
  function updateInput(text) {
    document.getElementById("outputDiv").innerHTML =
      document.getElementById("inputDiv").value;
    const inputData = document.getElementById("inputDiv"),
      outputData = document.getElementById("outputDiv");
    //alert(inputData.value);
    outputData.innerHTML = inputData.value
  
      .split(" ")
      .map(
        (w) =>
          `<b>${w
  
            .split("")
            .slice(0, Math.ceil(w.length / 2))
            .join("")}</b>${w
            .split("")
            .slice(Math.ceil(w.length / 2), w.length)
            .join("")} `
      )
      .join(" ")
      .replaceAll("\n", "<br/>");
  }