
function filteredWords() {
    var text = document.getElementById("generatedFilteredWordsInputTextArea").value;
    let answer = filteredWordsLogic(text);
    document.getElementById("generatedFilteredWordsOutputTextArea").value = answer;
}

function filteredWordsLogic(text) {

    var tool = this;
    var opts = parseOptions(tool);
    if (!opts)
        return "";
    if (text.trim().length == 0)
        return "";
    var wordOpts = {
        preserveApostrophe: true,
        preserveHyphen: true
    };
    var wordsAndPunct = extractWordsAndPunct(text, wordOpts);
    var words = [];
    for (var i = 0; i < wordsAndPunct.length; i++) {
        if (isWord(wordsAndPunct[i]))
            words.push(wordsAndPunct[i]);
    }
    var filtered = [];
    if (opts.filter == 'by-string') {
        filtered = filterWordsBySubstring(words, opts.strings, opts.invert);
    } else if (opts.filter == 'by-char-set') {
        filtered = filterWordsBySymbolSet(words, opts.symbolSet, opts.invert);
    } else {
        filtered = filterWordsByRegExp(words, opts.regex, opts.invert)
    }
    if (opts.makeLowercase)
        filtered = filtered.map(word => word.toLowerCase());
    if (opts.removeCopies)
        filtered = unique(filtered);
    return filtered.join(opts.outputSep);

}

function parseOptions(tool) {
    // var options = tool.options.get();
    var error = function (a, b) {
        tool.output.showNegativeBadge(a, b, -1);
    }
    var outputSep = document.getElementById("output-separator").value || '\n';
    if (outputSep == "\\n")
        outputSep = "\n";
    if (outputSep == "\\t")
        outputSep = "\t";


    var filterByString = false;
    var filterByRegex = false;
    var radios = document.getElementsByName('filter');
    for (var radio of radios) {
        if (radio.checked) {
            if (radio.value == "filter-by-string") {
                filterByString = true
            }
            if (radio.value == "filter-by-regex") {
                filterByRegex = true
            }
        }
    }
    console.log("filterByString :->" + filterByString);
    console.log("filterByRegex :->" + filterByRegex);

    var filter = filterByString ? 'by-string' : filterByRegex ? 'by-regex' : 'by-char-set';
    var strings = document.getElementById("strings").value;
    strings = strings.split('\n');
    strings = strings.filter(string => string.length > 0);
    var symbolSet = document.getElementById("symbol-set").value;
    var regex = document.getElementById("regex").value;
    var invert = document.getElementById("invert").checked;
    var makeLowercase = document.getElementById("make-lowercase").checked;
    var removeCopies = document.getElementById("remove-duplicates").checked;
    
    return {
        outputSep: outputSep,
        filter: filter,
        strings: strings,
        symbolSet: symbolSet,
        regex: regex,
        invert: invert,
        makeLowercase: makeLowercase,
        removeCopies: removeCopies
    }
}

function sampleBtn() {
    let testStr = "the sun rises in the east and sets in the west";
    document.getElementById("generatedFilteredWordsInputTextArea").value = testStr;
    filteredWords();
}

function filterWordsBySubstring(words, strings, invert) {
    var filteredWords = words.filter(word => {
        var matches = strings.filter(string => word.indexOf(string) !== -1);
        return invert ? matches.length === 0 : matches.length > 0;
    }
    );
    return filteredWords;
}
function filterWordsBySymbolSet(words, symbolSet, invert) {
    var charSet = splitIntoGraphemes(symbolSet);
    var filteredWords = [];
    for (var i = 0; i < words.length; i++) {
        var wordChars = splitIntoGraphemes(words[i]);
        var match = true;
        for (var j = 0; j < wordChars.length; j++) {
            if (charSet.indexOf(wordChars[j]) === -1) {
                match = false;
                break;
            }
        }
        if (invert ? !match : match) {
            filteredWords.push(words[i]);
        }
    }
    return filteredWords;
}
function filterWordsByRegExp(words, regex, invert) {
    var regexParts = regex.match(/^\/(.*?)\/([gimuy]*)$/);
    if (regexParts) {
        var re = new RegExp(regexParts[1], regexParts[2]);
    } else {
        var re = new RegExp(regex);
    }
    var filteredWords = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (invert ? !re.test(word) : re.test(word)) {
            filteredWords.push(word);
        }
    }
    return filteredWords;
}
function unique(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var number = arr[i];
        obj[number] = true;
    }
    return Object.keys(obj);
}
function splitIntoGraphemes(text) {
    var splitter = new GraphemeSplitter();
    var chars = splitter.splitGraphemes(text);
    return chars;
}