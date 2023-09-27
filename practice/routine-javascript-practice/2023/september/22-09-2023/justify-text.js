function justifyText() {
   var text = document.getElementById("InputTextArea").value;
   var answer = justifyTextLogic(text);
   document.getElementById("OutputTextArea").value = answer;
}

function justifyTextLogic(text){
  var tool = this;
  var opts = parseOptions(tool);
  if (!opts) return "";
  if (text.trim().length == 0) return "";
  if (opts.useLongestLine) {
    opts.width = findLongestLine(text);
  }
  var paragraphs = text.split(/(\n\n+)/);
  var justifiedText = "";
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    if (/^\s+$/.test(paragraph)) {
      justifiedText += paragraph;
    } else {
      justifiedText += justify_text(paragraph, opts);
    }
  }
  return justifiedText;
}

function findLongestLine(text) {
  var lines = text.split(/\n+/);
  var longest = 0;
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length > longest) longest = lines[i].length;
  }
  return longest;
}

function parseOptions(tool) {
  // var options = tool.options.get();
  var error = function (a, b) {
    tool.output.showNegativeBadge(a, b, -1);
  };

  var useLongestLine = false;
  var useSpecificLength = false;

  var radios = document.getElementsByName("use");
  for (var radio of radios) {
    if (radio.checked) {
      if (radio.value == "use-longest-line") {
        useLongestLine = true;
      }

      if (radio.value == "use-specific-length") {
        useSpecificLength = true;
      }
    }
  }
  console.log("useLongestLine :->" + useLongestLine);
  console.log("useSpecificLength :->" + useSpecificLength);

  var breakWords = document.getElementById("break-words").checked;
  console.log("breakWords :-> " + breakWords);
  var justifyLastLine = document.getElementById("justify-last-line").checked;
  console.log("justifyLastLine :-> " + justifyLastLine);
  if (useLongestLine) {
    var lineLength = null;
  } else {
    var lineLength = document.getElementById("line-length").value;
    lineLength = lineLength.trim();
    console.log("lineLength :-> " + lineLength);
    if (!/^[+-]?\d+$/.test(lineLength)) {
      error("Invalid Line Length", "Line length isn't a valid integer.");
      return false;
    }
    lineLength = parseInt(lineLength);
    if (lineLength < 1) {
      error("Invalid Line Length", "Line length must be greater than zero.");
      return false;
    }
  }
  return {
    useLongestLine: useLongestLine,
    width: lineLength,
    breakWords: breakWords,
    justifyLastLine: justifyLastLine,
  };
}

function sampleBtn() {
  let testStr ="I sat on the bench in the park, watching as children ran and played around me. The sound of laughter filled the air, and I couldn't help but feel a sense of joy and contentment.The use of smart irrigation systems is another exciting development in technology and nature. Smart irrigation systems use data and analytics to optimize water use and reduce waste in agriculture and landscaping.";
  document.getElementById("InputTextArea").value = testStr;
  justifyText();
}

function justifyTextAuto(){
  if(document.getElementById("isAuto").checked) {
      justifyText();
  };
}