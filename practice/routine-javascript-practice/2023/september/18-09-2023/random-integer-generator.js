function generateRandomInt(){
    let rangeStart =  Number(document.getElementById("range-start").value);
    let rangeEnd =  Number(document.getElementById("range-end").value);
    let howMany = Number(document.getElementById("count").value);
    var outputStr = '';
    for (var i = 0; i < howMany; i++) {
        outputStr += generateRandomNumber(rangeStart, rangeEnd);
        outputStr += "\n";
    }
    let answer = outputStr;
    document.getElementById("generatedRandomIntTextArea").value = answer;
}

function generateRandomNumber(rangeStart, rangeEnd) {
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
}

function copyGeneratedRandomInt() {
    copyToClipboard(
      document.getElementById("generatedRandomIntTextArea").value
    );
    document.getElementById("generatedRandomIntTextArea").select();
  }
  function downloadGeneratedData() {
    var blob = new Blob(
      ["" + document.getElementById("generatedRandomIntTextArea").value + ""],
      {
        type: "text/plain;charset=utf-8",
      }
    );
    fileDownloadCB(blob, gViewName + ".txt");
  }
  