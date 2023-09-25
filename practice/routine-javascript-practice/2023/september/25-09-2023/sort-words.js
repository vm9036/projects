function sortWords() {
  var text = document.getElementById("generatedSortWordsInputTextArea").value;
  let answer = sortWordsLogic(text);
  document.getElementById("generatedSortWordsOutputTextArea").value = answer;
}

function sortWordsLogic(text) {
  var tool = this;
  var opts = parseOptions(tool);
  if (!opts) return "";
  if (text.trim().length == 0) return "";
  if (opts.sortArea == "sort-in-text") {
    var textParts = [text];
    var joiner = "";
  } else if (opts.sortArea == "sort-in-line") {
    var textParts = text.split(/\n/);
    var joiner = "\n";
  } else if (opts.sortArea == "sort-in-sentence") {
    var textParts = tokenizer.sentences(text);
    var joiner = ". ";
  } else if (opts.sortArea == "sort-in-paragraph") {
    var textParts = text.split(/\n+(?:[\t ]*\n+)/);
    var joiner = "\n\n";
  }
  var splitOpts = {
    preserveApostrophe: !opts.changeApostrophe,
    preserveHyphen: !opts.changeHyphen,
  };
  var output = [];
  for (var i = 0; i < textParts.length; i++) {
    var wordsAndPunct = extractWordsAndPunct(textParts[i], splitOpts);
    var words = [];
    for (var j = 0; j < wordsAndPunct.length; j++) {
      if (isWord(wordsAndPunct[j])) {
        words.push(wordsAndPunct[j]);
      }
    }
    var sortedWords = sortListItems(words, opts);
    if (opts.removeCopies) {
      sortedWords = removeDuplicates(sortedWords);
    }
    output.push(sortedWords.join(opts.outputSep));
  }
  var outputStr = output.join(joiner);
  if (opts.sortArea == "sort-in-sentence") outputStr += ".";
  return outputStr;
}

function parseOptions(tool, error) {
//   var options = tool.options.get();
  var error = function (a, b) {
    tool.output.showNegativeBadge(a, b, -1);
  };
  var outputSep = document.getElementById("output-separator").value;
  outputSep = outputSep || "\n";
  if (outputSep == "\\n") outputSep = "\n";
  if (outputSep == "\\t") outputSep = "\t";
  var sortMethod = document.getElementById("sort-method").value;
  var sortOrder = document.getElementById("sort-order").value;
  var removeCopies = document.getElementById("remove-duplicates").checked;
  var caseSensitive = document.getElementById("case-sensitive").checked;

  var sortInText = false;
  var sortInLine = false;
  var sortInSentence = false;
  var sortInParagraph = false;

  var radios = document.getElementsByName("sort");
  for (var radio of radios) {
    if (radio.checked) {
      if (radio.value == "sort-in-text") {
        sortInText = true;
      }
      if (radio.value == "sort-in-line") {
        sortInLine = true;
      }
      if (radio.value == "sort-in-sentence") {
        sortInSentence = true;
      }
      if (radio.value == "sort-in-paragraph") {
        sortInParagraph = true;
      }
    }
  }
  console.log("sortInText :-> " + sortInText);
  console.log("sortInLine :-> " + sortInLine);
  console.log("sortInSentence :-> " + sortInSentence);
  console.log("sortInParagraph :-> " + sortInParagraph);

  if (sortInText) {
    var sortArea = "sort-in-text";
  } else if (sortInLine) {
    var sortArea = "sort-in-line";
  } else if (sortInSentence) {
    var sortArea = "sort-in-sentence";
  } else if (sortInParagraph) {
    var sortArea = "sort-in-paragraph";
  }
  return {
    outputSep: outputSep,
    sortMethod: sortMethod,
    sortOrder: sortOrder,
    removeCopies: removeCopies,
    caseSensitive: caseSensitive,
    sortArea: sortArea,
  };
}

function sampleBtn() {
  let testStr ="The more I think it over, the more I feel that there is nothing more truly artistic than to love people. Vincent van Goghohn Taylor Smith";
  document.getElementById("generatedSortWordsInputTextArea").value = testStr;
  sortWords();
}

function removeDuplicates(chars) {
  var seenItems = {};
  var newList = [];
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    if (!seenItems[char]) {
      seenItems[char] = true;
      newList.push(char);
    }
  }
  return newList;
}
function sortListItems(chars, opts) {
  if (opts.sortMethod == "alphabetically") {
    if (opts.caseSensitive) {
      chars = chars.sort();
    } else {
      chars.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
    }
  } else if (opts.sortMethod == "numerically") {
    chars = sortNumerically(chars);
  } else if (opts.sortMethod == "by-length") {
    chars = sortByLength(chars);
  } else if (opts.sortMethod == "by-complexity") {
    chars = sortByComplexity(chars);
  }
  if (opts.sortOrder == "decreasing") {
    chars.reverse();
  }
  return chars;
}
function sortByComplexity(items) {
  var arr = [];
  for (var i = 0; i < items.length; i++) {
    var entropyVal = entropy(splitIntoGraphemes(items[i]));
    arr.push({
      entropy: entropyVal,
      item: items[i],
    });
  }
  arr.sort(function (a, b) {
    return a["entropy"] - b["entropy"];
  });
  return arr.map((x) => x.item);
}
function sortByLength(items) {
  var arr = [];
  for (var i = 0; i < items.length; i++) {
    arr.push(splitIntoGraphemes(items[i]));
  }
  arr.sort(function (a, b) {
    return a.length - b.length;
  });
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].join("");
  }
  return arr;
}
function splitIntoGraphemes(text) {
  var splitter = new GraphemeSplitter();
  var chars = splitter.splitGraphemes(text);
  return chars;
}
function sortNumerically(list) {
  var sortedStr = list.sort();
  var head = [];
  var nums = [];
  var tail = [];
  for (var i = 0; i < sortedStr.length; i++) {
    var element = sortedStr[i];
    var matches = element.match(/^[+-]?\d*\.?\d+$/);
    if (matches) {
      nums.push({
        orig: element,
        bigNum: new BigNumber(matches[0]),
      });
    } else if (nums.length == 0) {
      head.push(element);
    } else {
      tail.push(element);
    }
  }
  nums = nums.sort(function (a, b) {
    if (a["bigNum"].minus(b["bigNum"]).lt(0)) {
      return -1;
    }
    if (a["bigNum"].minus(b["bigNum"]).eq(0)) {
      return 0;
    }
    if (a["bigNum"].minus(b["bigNum"]).gt(0)) {
      return 1;
    }
  });
  for (var i = 0; i < nums.length; i++) {
    head.push(nums[i]["orig"]);
  }
  return head.concat(tail);
}
