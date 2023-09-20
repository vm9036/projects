function splitText(){
    var text = document.getElementById("generatedSplitTextInputTextArea").value;
    let answer = splitTextLogic(text);
    console.log(answer);
    document.getElementById("generatedSplitTextOutputTextArea").value =answer;
}

function splitTextLogic(text) {
  
    var tool = this;
    var opts = parseOptions(tool);
    if (!opts)
        return '';
    if (text.trim().length == 0)
        return '';
    if (opts.splitByChar) {
        if (opts.char.length == 0) {
            var chunks = splitIntoGraphemes(text);
        } else {
            var chunks = text.split(opts.char);
        }
    } else if (opts.splitByRegex) {
        if (opts.regex == "//") {
            var chunks = splitIntoGraphemes(text);
        } else {
            var regexParts = opts.regex.match(/^\/(.*?)\/([gimuy]*)$/);
            if (regexParts) {
                var re = new RegExp(regexParts[1],regexParts[2]);
            } else {
                var re = new RegExp(opts.regex);
            }
            var chunks = text.split(re);
        }
    } else {
        var chars = splitIntoGraphemes(text);
        if (opts.length == 0) {
            var chunks = chars;
        } else {
            var chunks = [];
            for (var i = 0; i < chars.length; i += opts.length) {
                chunks.push(chars.slice(i, i + opts.length).join(''));
            }
        }
    }
    if (opts.charBefore.length == 0 && opts.charAfter.length == 0) {
        return chunks.join(opts.sep);
    }
    chunks = chunks.map(function(x) {
        return opts.charBefore + x + opts.charAfter
    });
    return chunks.join(opts.sep);
  
}

function splitIntoGraphemes(text) {
  var splitter = new GraphemeSplitter();
  var chars = splitter.splitGraphemes(text);
  return chars;
}

function parseOptions(tool) {
  var error = function (a, b) {
    tool.output.showNegativeBadge(a, b, -1);
  };
  var splitByChar = false;
  var splitByRegex = false;
  var splitByLength = false;

  var radios = document.getElementsByName("split");
  for (var radio of radios) {
    if (radio.checked) {
      if (radio.value == "split-by-char") {
        splitByChar = true;
      }

      if (radio.value == "split-by-regex") {
        splitByRegex = true;
      }

      if (radio.value == "split-by-length") {
        splitByLength = true;
      }
    }
  }
  console.log("splitByChar :->" + splitByChar);
  console.log("splitByRegex :->" + splitByRegex);
  console.log("splitByLength :->" + splitByLength);

  var sep = document.getElementById("separator").value;
  console.log("sep :-> " + sep);

  var char = document.getElementById("char").value;
  console.log("char :-> " + char);

  var regex = document.getElementById("regex").value;
  regex = regex || "/\\s+/";
  console.log("regex :-> " + regex);

  var charBefore = document.getElementById("symbol-before-chunk").value;
  charBefore = charBefore || "";
  console.log("charBefore :-> " + charBefore);

  var charAfter = document.getElementById("symbol-after-chunk").value;
  charAfter = charAfter || "";
  console.log("charAfter :-> " + charAfter);

  if (/\\n/.test(sep)) sep = sep.replace(/\\n/g, "\n");
  if (/\\t/.test(sep)) sep = sep.replace(/\\t/g, "\t");
  if (splitByLength) {
    var length = document.getElementById("length").value;
    length = length.trim();
    console.log("length :-> " + length);
    if (!/^-?\d+$/.test(length)) {
      error(
        "Invalid Fragment Length",
        "Fragment length value isn't a valid number."
      );
      return false;
    }
    length = parseInt(length);
    if (length < 0) {
      error(
        "Invalid Fragment Length",
        "Fragment length value cannot be negative."
      );
      return false;
    }
  }
  return {
    splitByChar: splitByChar,
    splitByRegex: splitByRegex,
    sep: sep,
    char: char,
    regex: regex,
    length: length,
    charBefore: charBefore,
    charAfter: charAfter,
  };
}

function sampleBtn() {
  let testStr ="1 - eins,2 - zwei,3 - drei,4 - vier,5 - fünf,6 - sechs,7 - sieben,8 - acht,9 - neun,10 - zehn";
  document.getElementById("generatedSplitTextInputTextArea").value = testStr;
  splitText();
}
