
function zalgoText(){
    var text = document.getElementById("InputTextArea").value;
    let answer = zalgoTextLogic(text);
    document.getElementById("OutputTextArea").value = answer;
}

function zalgoTextLogic(text){
    var tool = this;
    var opts = parseOptions(tool);
    if (!opts) {
        tool.output.setValue("");
        return "";
    }
    if (opts.skipWhitespace && /^\s+$/.test(text)) {
        text = text.trim();
    }
    if (text.length == 0) {
        return "";
    }
    var chars = splitIntoGraphemes(text);
    var output = addCombiningChars(chars, opts);
    return output;
}

function sampleBtn() {
    let testStr = 
`Enjoy the Art Exhibit!
The Adventure Begins

Feeling Blessed to explore nature!
Birds chirped in the nearby trees, their songs a soothing melody to the ears.`;
    document.getElementById("InputTextArea").value = testStr;
    zalgoText();
}

function zalgoTextAuto() {
    if (document.getElementById("isAuto").checked) {
        zalgoText();
    }
}

function parseOptions(tool) {
    var destroyTop = document.getElementById("destroy-top").checked;
    var destroyMiddle = document.getElementById("destroy-middle").checked;
    var destroyBottom = document.getElementById("destroy-bottom").checked;


    var totalRandom = false;
    var partRandom = false;

    var radios = document.getElementsByName("crazy");

    for (var radio of radios) {
        if (radio.checked) {

            if(radio.value == "total-random")
            {
                totalRandom = true;
            }

            if(radio.value == "partial-random")
            {
                partRandom = true;
            }
        }
       
    }
    console.log("totalRandom :->"+totalRandom);
    console.log("partRandom :->"+partRandom);

    var skipWhitespace = document.getElementById("skip-whitespace").checked;
    var minimum = document.getElementById("minimum-number-of-chars").value;
    if (!/^\d+$/.test(minimum)) {
        tool.output.showNegativeBadge("Invalid Minimum Destruction Level", "Minimum destruction level contains non digits.");
        return false;
    }
    minimum = parseInt(minimum);
    if (minimum < 0) {
        tool.output.showNegativeBadge("Invalid Minimum Destruction Level", "Minimum destruction level cannot be negative.");
        return false;
    }
    var maximum = document.getElementById("maximum-number-of-chars").value;
    if (!/^\d+$/.test(maximum)) {
        tool.output.showNegativeBadge("Invalid Maximum Destruction Level", "Maximum destruction level contains non digits.");
        return false;
    }
    maximum = parseInt(maximum);
    if (maximum < 0) {
        tool.output.showNegativeBadge("Invalid Maximum Destruction Level", "Maximum destruction level cannot be negative.");
        return false;
    }
    if (maximum < minimum) {
        tool.output.showNegativeBadge("Invalid Destruction Level.", "Maximum destruction level is less than the minimum.");
        return false;
    }
    return {
        destroyTop: destroyTop,
        destroyMiddle: destroyMiddle,
        destroyBottom: destroyBottom,
        totalRandom: totalRandom,
        partRandom: partRandom,
        skipWhitespace: skipWhitespace,
        minimum: minimum,
        maximum: maximum
    }
}

function addCombiningChars(chars, opts) {
    var output = [];
    for (var i = 0; i < chars.length; i++) {
        var char = chars[i];
        if (opts.skipWhitespace && /^\s+$/.test(char)) {
            output.push(char);
            continue;
        }
        var countTop = getRandomInteger(opts.maximum, opts.minimum);
        var countMiddle = 1;
        var countBottom = getRandomInteger(opts.maximum, opts.minimum);
        var topCombChar = "";
        var middleCombChar = "";
        var bottomCombChar = "";
        if (opts.partRandom) {
            topCombChar = getRandomCombChar(topCombiningChars);
        }
        if (opts.destroyTop) {
            char = addCharacter(char, topCombChar, countTop, topCombiningChars, opts);
        }
        if (opts.partRandom) {
            middleCombChar = getRandomCombChar(middleCombiningChars);
        }
        if (opts.destroyMiddle) {
            char = addCharacter(char, middleCombChar, countMiddle, middleCombiningChars, opts);
        }
        if (opts.partRandom) {
            bottomCombChar = getRandomCombChar(bottomCombiningChars);
        }
        if (opts.destroyBottom) {
            char = addCharacter(char, bottomCombChar, countBottom, bottomCombiningChars, opts);
        }
        output.push(char);
    }
    return output.join("");
}
function addCharacter(char, combChar, count, combCharsList, opts) {
    for (var i = 0; i < count; i++) {
        if (opts.totalRandom) {
            combChar = getRandomCombChar(combCharsList);
        }
        char += combChar;
    }
    return char;
}
function getRandomCombChar(combCharsList) {
    var allCharNames = Object.keys(combCharsList);
    var ignoreFonts = ["left-harpoon", "right-harpoon", "anticlockwise-arrow", "clockwise-arrow", "left-arrow", "right-arrow", "three-dots", "four-dots", "left-right-arrow", "wide-bridge", "asterisk", "turned-comma", "long-vertical-line", "short-vertical-line", "ring", "clockwise-ring", "anticlockwise-ring", "enclosing-circle", "enclosing-square", "enclosing-diamond", "reverse-solidus", "double-vertical-stroke", "greek-ypogegrammeni", "combining-triple-underdot", ];
    var useFonts = allCharNames.filter(function(font) {
        return !(ignoreFonts.indexOf(font) >= 0);
    });
    var randomChar = useFonts[parseInt(useFonts.length * Math.random())];
    return combCharsList[randomChar];
}
function getRandomInteger(max, min) {
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}
function splitIntoGraphemes(text) {
    var splitter = new GraphemeSplitter();
    var chars = splitter.splitGraphemes(text);
    return chars;
}