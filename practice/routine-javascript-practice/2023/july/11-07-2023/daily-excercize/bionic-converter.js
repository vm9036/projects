// This is **horrible code**. If anyone is good with maths please see
// https://github.com/TayIorRobinson/bionicreading/issues/1
function showtext() {
    const inputData = document.getElementById("inputDiv"),
      outputData = document.getElementById("outputDiv");
    //alert(inputData.value);
    outputData.innerHTML = inputData.value
      // .replaceAll("/\n", "<br/>")
      //.replaceAll("/\r", "  ") ///\r|\n/
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