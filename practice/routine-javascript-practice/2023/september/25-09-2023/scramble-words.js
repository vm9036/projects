function scrambleWords() {
  var text = document.getElementById("InputTextArea").value;
  let answer = scrambleWordsLogic(text);
  document.getElementById("OutputTextArea").value = answer;
}

function scrambleWordsLogic(text) {
  var tool = this;
  var opts = parseOptions(tool);
  if (!opts) return "";
  if (text.trim().length == 0) return "";
  if (opts.letterCase == "make-lowercase") text = text.toLowerCase();
  else if (opts.letterCase == "make-uppercase") text = text.toUpperCase();
  var wordOpts = {
    preserveApostrophe: true,
    preserveHyphen: true,
  };
  var textParts = extractWordsAndPunct(text, wordOpts);
  var output = [];
  for (var i = 0; i < textParts.length; i++) {
    if (isWord(textParts[i])) {
      var charsApostrHyphen = cleanAndPreserveApostropheHyphen(
        textParts[i],
        opts
      );
      var groups = splitCharsIntoGroups(
        charsApostrHyphen.chars,
        opts.groupSize
      );
      var scrambled = scrambleWord(groups, opts.freeze).join("");
      var scrambledWithApostHyph = restoreApostropheHyphen(
        scrambled,
        charsApostrHyphen,
        opts
      );
      output.push(scrambledWithApostHyph);
    } else {
      output.push(textParts[i]);
    }
  }
  return output.join("");
}

function parseOptions(tool) {
  var error = function (a, b) {
    tool.output.showNegativeBadge(a, b, -1);
  };

  var groupSize = document.getElementById("group-size").value;
  groupSize = groupSize.trim();
  if (!/^\d+$/.test(groupSize)) {
    error("Invalid Group Size", "Group size isn't a valid number.");
    return false;
  }
  groupSize = parseInt(groupSize);
  if (groupSize < 1) {
    error("Invalid Group Size", "Group size should be a positive value.");
    return false;
  }

  var freezeFirstLetter = document.getElementById("freeze-first-letter").checked;
  var freezeMiddleLetter = document.getElementById("freeze-middle-letter").checked;
  var freezeLastLetter = document.getElementById("freeze-last-letter").checked;

  var freeze = {
    "first-letter": freezeFirstLetter,
    "middle-letter": freezeMiddleLetter,
    "last-letter": freezeLastLetter,
  };

  var letterCase = document.getElementById("case").value;
  var hyphenBehav = document.getElementById("hyphen-behavior").value;
  var apostrBehav = document.getElementById("apostrophe-behavior").value;

  return {
    groupSize: groupSize,
    freeze: freeze,
    letterCase: letterCase,
    hyphenBehav: hyphenBehav,
    apostrBehav: apostrBehav,
  };
}

function sampleBtn() {
  let testStr = 
`Bull, Strange, Little-town, Eastern, Appoinment, Car, Jones's
The individual who was well-adjusted performed exceptionally well on the test.`;
  document.getElementById("InputTextArea").value = testStr;
  scrambleWords();
}

function scrambleWordsAuto() {
  if(document.getElementById("isAuto").checked) {
    scrambleWords();
  };
}

function restoreApostropheHyphen(scrambled, apostropheHyphen, opts) {
  var chars = splitIntoGraphemes(scrambled);
  var apostrophes = apostropheHyphen.apostrophes;
  var hyphens = apostropheHyphen.hyphens;
  for (var i = 0; i < hyphens.length; i++) {
    var hyphen = hyphens[i];
    if (opts.hyphenBehav == "preserve-hyphens") {
      chars.splice(hyphen.index, 0, hyphen.char);
    } else if (opts.hyphenBehav == "put-hyphens-last") {
      chars.push(hyphen.char);
    } else if (opts.hyphenBehav == "put-hyphens-first") {
      chars.unshift(hyphen.char);
    }
  }
  for (var i = 0; i < apostrophes.length; i++) {
    var apostrophe = apostrophes[i];
    if (opts.apostrBehav == "preserve-apostrophes") {
      chars.splice(apostrophe.index, 0, apostrophe.char);
    } else if (opts.apostrBehav == "put-apostrophes-last") {
      chars.push(apostrophe.char);
    } else if (opts.apostrBehav == "put-apostrophes-first") {
      chars.unshift(apostrophe.char);
    }
  }
  return chars.join("");
}
function cleanAndPreserveApostropheHyphen(word, opts) {
  var cleanWord = word;
  if (opts.hyphenBehav !== "scramble-hyphens") {
    cleanWord = cleanWord.replace(/[\-‐‑֊־᠆﹣－⁃]/g, "");
  }
  if (opts.apostrBehav !== "scramble-apostrophes") {
    cleanWord = cleanWord.replace(/['`´ʹʻʼʽʾʿˈˊʹ΄՚׳᾽᾿‘’‛′‵Ꞌꞌ＇]/g, "");
  }
  var chars = splitIntoGraphemes(word);
  var apostrophes = [];
  var hyphens = [];
  for (var i = 0; i < chars.length; i++) {
    if (/['`´ʹʻʼʽʾʿˈˊʹ΄՚׳᾽᾿‘’‛′‵Ꞌꞌ＇]/.test(chars[i])) {
      apostrophes.push({
        char: chars[i],
        index: i,
      });
    } else if (/[\-‐‑֊־᠆﹣－⁃]/.test(chars[i])) {
      hyphens.push({
        char: chars[i],
        index: i,
      });
    }
  }
  return {
    apostrophes: apostrophes,
    hyphens: hyphens,
    chars: splitIntoGraphemes(cleanWord),
  };
}
function splitCharsIntoGroups(chars, groupSize) {
  var groups = [];
  for (var i = 0; i < chars.length; i += groupSize) {
    var group = [];
    for (var j = 0; j < groupSize; j++) {
      if (chars[i + j] !== undefined) {
        group.push(chars[i + j]);
      }
    }
    groups.push(group.join(""));
  }
  return groups;
}
function scrambleWord(groups, freeze) {
  var indicesToExclude = [];
  var middle = groups.length / 2;
  var middleIndex =
    Math.floor(middle) === middle
      ? randomInt(middle - 1, middle)
      : Math.floor(middle);
  if (freeze["first-letter"]) indicesToExclude.push(0);
  if (freeze["middle-letter"]) indicesToExclude.push(middleIndex);
  if (freeze["last-letter"]) indicesToExclude.push(groups.length - 1);
  var itemsToShuffle = groups.filter(
    (item, index) => indicesToExclude.indexOf(index) === -1
  );
  var shuffled = shuffle(itemsToShuffle);
  var scrambled = [];
  var excludeIndCount = 0;
  var shuffleIndCount = 0;
  for (var i = 0; i < groups.length; i++) {
    if (indicesToExclude.indexOf(i) > -1) {
      scrambled.push(groups[indicesToExclude[excludeIndCount]]);
      excludeIndCount++;
    } else {
      scrambled.push(itemsToShuffle[shuffleIndCount]);
      shuffleIndCount++;
    }
  }
  return scrambled;
}
function shuffle(array) {
  var i = array.length;
  while (i-- > 0) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
function randomInt(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
function splitIntoGraphemes(text) {
  var splitter = new GraphemeSplitter();
  var chars = splitter.splitGraphemes(text);
  return chars;
}
