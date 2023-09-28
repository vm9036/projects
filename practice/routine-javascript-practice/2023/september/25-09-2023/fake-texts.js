function fakeText() {
  var text = document.getElementById("InputTextArea").value;
  let answer = fakeTextLogic(text);
  document.getElementById("OutputTextArea").value = answer;
}

function fakeTextLogic(text) {
  var tool = this;
  if (text.length == 0) return "";
  var spoofSpaces = document.getElementById("spoof-spaces").checked;
  var spoofPunct = document.getElementById("spoof-punctuation").checked;
  var previewSpoof = document.getElementById("preview-spoof").checked;
  var zeroWidthSpaces = document.getElementById("insert-zero-width-spaces").checked;
  var chars = splitIntoGraphemes(text);
  var output = [];
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    var spoofChar = getSpoofChar(char);
    var unchanged = previewSpoof && char != "\n" ? "◌" : char;
    if (/[a-zA-Z]/g.test(char)) {
      output.push(spoofChar.letters || unchanged);
    } else if (/[!.,;-]/g.test(char) && spoofPunct) {
      output.push(spoofChar.punctuation || unchanged);
    } else if (/ /g.test(char) && spoofSpaces) {
      output.push(" ");
    } else {
      output.push(unchanged);
    }
    var notNTCur = char != "\n" && char != "\t";
    var notNTNext = chars[i + 1] != "\n" && chars[i + 1] != "\t";
    var notLastChar = chars[i + 1] != undefined;
    if (zeroWidthSpaces && notLastChar && notNTCur && notNTNext) {
      if (char == " " && spoofSpaces) {
        output.push("​");
      } else {
        output.push("﻿");
      }
    }
  }
  return output.join("");
}

function sampleBtn() {
    let testStr ="You've truly impressed everyone with your remarkable skills. Well done!";
    document.getElementById("InputTextArea").value = testStr;
    fakeText();
}

function fakeTextAuto(){
  if(document.getElementById("isAuto").checked)
  {
    fakeText();
  }
}

function getSpoofChar(char) {
  var letters = {
    a: "а",
    c: "с",
    e: "е",
    i: "і",
    j: "ј",
    o: "о",
    p: "р",
    s: "ѕ",
    x: "х",
    y: "у",
    A: "А",
    B: "В",
    C: "С",
    E: "Е",
    H: "Н",
    I: "І",
    K: "Κ",
    M: "М",
    N: "Ν",
    O: "О",
    P: "Р",
    S: "Ѕ",
    T: "Т",
    X: "Х",
    Y: "Υ",
    Z: "Ζ",
  };
  var punctuation = {
    "!": "ǃ",
    ".": "․",
    ";": ";",
    ",": "‚",
    "-": "‐",
  };
  return {
    letters: letters[char],
    punctuation: punctuation[char],
  };
}

function splitIntoGraphemes(text) {
  var splitter = new GraphemeSplitter();
  var chars = splitter.splitGraphemes(text);
  return chars;
}
