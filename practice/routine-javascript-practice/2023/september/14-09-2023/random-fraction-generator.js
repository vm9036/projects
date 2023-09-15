function randomFraction() {
  let rangeStart = Number(document.getElementById("range-start").value);
  console.log("rangeStart :-> " + rangeStart);

  let rangeEnd = Number(document.getElementById("range-end").value);
  console.log("rangeEnd :-> " + rangeEnd);

  let howMany = Number(document.getElementById("count").value);
  console.log("howMany :-> " + howMany);

  let precision = Number(document.getElementById("precision").value);
  console.log("precision :-> " + precision);

  var outputStr = "";
  for (var i = 0; i < howMany; i++) {
    outputStr += generateRandomFraction(rangeStart, rangeEnd).toFixed(
      precision
    );
    outputStr += "\n";
  }
  let answer = outputStr;
  document.getElementById("generatedRandomFractionTextArea").value = answer;
}

function generateRandomFraction(rangeStart, rangeEnd) {
  return Math.random() * (rangeEnd - rangeStart) + rangeStart;
}

function copyGeneratedRandomFraction() {
  copyToClipboard(
    document.getElementById("generatedRandomFractionTextArea").value
  );
  document.getElementById("generatedRandomFractionTextArea").select();
}
function downloadGeneratedData() {
  var blob = new Blob(
    [
      "" +
        document.getElementById("generatedRandomFractionTextArea").value +
        "",
    ],
    {
      type: "text/plain;charset=utf-8",
    }
  );
  fileDownloadCB(blob, gViewName + ".txt");
}
