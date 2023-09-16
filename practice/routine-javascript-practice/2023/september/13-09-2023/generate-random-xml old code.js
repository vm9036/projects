var inputData,
    maxDepth,
    elementsPerBranch,
    maxStringLength,
    satisfyDepth,
    stringType;
function generaterRandomXML() {
    inputData = document.getElementById("inputData").value;
    console.log("inputData :->" + inputData);

    maxDepth = Number(document.getElementById("depth").value);
    console.log("maxDepth :->" + maxDepth);

    elementsPerBranch = Number(document.getElementById("max-elements").value);
    console.log("elementsPerBranch :->" + elementsPerBranch);

    maxStringLength = Number(document.getElementById("max-string-length").value);
    console.log("maxStringLength :->" + maxStringLength);

    var wrapTag = document.getElementById("xml-root").value;
    console.log("wrapTag :->" + wrapTag);

    satisfyDepth = document.getElementById("always-max-elements").checked;
    console.log("satisfyDepth:->" + satisfyDepth);

    var englishStrings = false;
    var randomStrings = false;

    stringType = document.getElementsByName("string");
    for (var radio of stringType) {
        if (radio.checked) {
            if (radio.value == "randomEnglish") {
                englishStrings = true;
            }

            if (radio.value == "randomStrings") {
                randomStrings = true;
            }
        }
    }
    console.log("englishStrings :->" + englishStrings);
    console.log("randomStrings :->" + randomStrings);

    var formattingSpaces = false;
    var formattingTabs = false;
    var formattingNone = false;

    var radiosIndentation = document.getElementsByName("use");
    for (var radio of radiosIndentation) {
        if (radio.checked) {
            if (radio.value == "formatting-spaces") {
                formattingSpaces = true;
            }

            if (radio.value == "formatting-tabs") {
                formattingTabs = true;
            }

            if (radio.value == "formatting-none") {
                formattingNone = true;
            }
        }
    }
    console.log("formattingSpaces :->" + formattingSpaces);
    console.log("formattingTabs :->" + formattingTabs);
    console.log("formattingNone :->" + formattingNone);

    var xmlMeta = document.getElementById("xml-meta").checked;
    console.log("xmlMeta:->" + xmlMeta);

    var xmlAttributes = document.getElementById("xml-attributes").checked;
    console.log("xmlAttributes:->" + xmlAttributes);

    var xmlCData = document.getElementById("xml-cdata").checked;
    console.log("xmlCData:->" + xmlCData);

    var xmlComments = document.getElementById("xml-comments").checked;
    console.log("xmlMeta:->" + xmlComments);

    if (englishStrings) {
        var stringType = "english";
    } else {
        var stringType = "random";
    }
    if (isNaN(maxDepth)) {
        this.output.showNegativeBadge(
            "Can't generate",
            "Depth is not a valid number."
        );
        return "";
    }
    if (isNaN(elementsPerBranch)) {
        this.output.showNegativeBadge(
            "Can't generate",
            "Elements per depth level is not a valid number."
        );
        return "";
    }
    if (maxDepth < 0) {
        this.output.showNegativeBadge("Can't generate", "Depth is negative.");
        return "";
    }
    if (elementsPerBranch < 0) {
        this.output.showNegativeBadge(
            "Can't generate",
            "Elements per depth level is negative."
        );
        return "";
    }
    if (stringType == "string") {
        if (isNaN(maxStringLength)) {
            this.output.showNegativeBadge(
                "Can't generate",
                "Max string length is not a number."
            );
            return "";
        }
        if (maxStringLength < 0) {
            this.output.showNegativeBadge(
                "Can't generate",
                "Max string length is negative."
            );
            return "";
        }
    }

    var generator = new RandomJsonGenerator({
        maxDepth: maxDepth,
        satisfyDepth: satisfyDepth,
        elementsPerBranch: elementsPerBranch,
        stringType: stringType,
        possibleElements: ["strings", "numbers", "objects"],
        randomKeyAlphabet:
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_-abcdefghijklmnopqrstuvwxyz",
        randomKeyRestrictions: ["alpha-or-underscore-first", "length-one-plus"],
        maxStringLength: maxStringLength,
    });

    var formatting = null;
    if (formattingNone) formatting = false;
    else if (formattingTabs) formatting = "\t";
    else if (formattingSpaces) formatting = "  ";
    var json = generator.generate();
    // var json = generator;
    if (maxDepth == 0) {
        json = {};
        this.output.showWarningBadge(
            "No depth",
            "Depth of zero can only generate the root element."
        );
    }
    var xml = json2xml(json);
    // var xml;
    var xmlDocument = null;
    if (!wrapTag) {
        this.output.showWarningBadge(
            "Wrapper tag not specified",
            "Using <root> instead."
        );
        wrapTag = "root";
    } else if (!/^[a-z_:][a-z0-9.\-_]*$/gi.test(wrapTag)) {
        this.output.showNegativeBadge(
            "Invalid wrapper tag",
            '"' + wrapTag + '" does not match XML standarts.'
        );
        return "";
    }
    xml = "<" + wrapTag + ">" + xml + "</" + wrapTag + ">";
    if (window.DOMParser) {
        var parser = new DOMParser();
        xmlDocument = parser.parseFromString(xml, "text/xml");
    } else {
        xmlDocument = new ActiveXObject("Microsoft.XMLDOM");
        xmlDocument.async = false;
        xmlDocument.loadXML(xml);
    }
    var root = xmlDocument.documentElement;
    var elements = root.querySelectorAll("*");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (xmlAttributes == "xml-attributes" && chance(0.5)) {
            var k = WordDictionary.random();
            var v = WordDictionary.random();
            element.setAttribute(k, v);
        }
        if (xmlCData == "xml-cdata" && chance(0.25)) {
            var cdata = xmlDocument.createCDATASection(sentence());
            insertRandomly(cdata, element);
        }
        if (xmlComments == "xml-comments" && chance(0.25)) {
            var comment = xmlDocument.createComment(sentence());
            insertRandomly(comment, element);
        }
    }
    var output = root.outerHTML;
    if (xmlMeta == "xml-meta") {
        output = '<?xml version="1.0" encoding="UTF-8" ?>' + output;
    }
    let answer = !formatting ? output : vkbeautify.xml(output, formatting);
    console.log(answer);
}



var RandomJsonGenerator = function (opts) {
    if (!(this instanceof RandomJsonGenerator))
        return new RandomJsonGenerator(opts);
    var self = this;
    self.possibleElements = opts.possibleElements
    self.maxDepth = opts.maxDepth;
    self.elementsPerBranch = opts.elementsPerBranch;
    self.stringType = opts.stringType;
    self.maxStringLength = opts.maxStringLength;
    self.satisfyDepth = opts.satisfyDepth;
    self.randomStringAlphabet = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    self.randomKeyAlphabet = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    self.randomKeyRestrictions = [];
    if (opts.randomStringAlphabet) {
        self.randomStringAlphabet = opts.randomStringAlphabet;
    }
    if (opts.randomKeyAlphabet) {
        self.randomKeyAlphabet = opts.randomKeyAlphabet;
    }
    if (opts.randomKeyRestrictions) {
        self.randomKeyRestrictions = opts.randomKeyRestrictions;
    }
    self.generate = function () {
        startingChoices = [];
        if (self.possibleElements.indexOf("objects") >= 0) {
            startingChoices.push({});
        }
        if (self.possibleElements.indexOf("arrays") >= 0) {
            startingChoices.push([]);
        }
        var startingElement = chooseOne(startingChoices);
        var generated = generateRandomJson(startingElement, self.elementsPerBranch, self.maxDepth, self.satisfyDepth);
        return generated;
    }
}


function generateRandomString(alphabet) {
    if (self.stringType == "random") {
        var length = parseInt(Math.random() * (self.maxStringLength + 1));
        var string = "";
        for (var i = 0; i < length; i++) {
            string += chooseOne(alphabet);
        }
        return string;
    } else {
        return WordDictionary.random();
    }
}

// function chooseOne(array) {
//     return array[Math.floor(Math.random() * array.length)];
// }

function generateRandomJson(startingElement, elementsPerBranch, depthLeft, satisfyDepth) {
    if (satisfyDepth) {
        var elemsLeft = elementsPerBranch;
    } else {
        var elemsLeft = parseInt(Math.random() * elementsPerBranch);
    }
    if (depthLeft == 0) {
        var possibleElementsAtDepthZero = self.possibleElements;
        ["arrays", "objects"].forEach(function (remove) {
            var removeIndex = possibleElementsAtDepthZero.indexOf(remove);
            if (removeIndex >= 0) {
                possibleElementsAtDepthZero.splice(removeIndex, 1);
            }
        });
        return generateRandomVal(possibleElementsAtDepthZero).val;
    }
    while (elemsLeft) {
        var randVal = generateRandomVal(self.possibleElements);
        if (randVal.type == "array" || randVal.type == "object") {
            var newVal = generateRandomJson(
                randVal.val,
                elementsPerBranch,
                depthLeft - 1,
                satisfyDepth
            );
        } else {
            var newVal = randVal.val;
        }
        if (startingElement instanceof Array) {
            startingElement.push(newVal);
        } else if (typeof startingElement == "object") {
            var newKey = generateRandomKey(
                self.randomKeyAlphabet,
                self.randomKeyRestrictions
            );
            startingElement[newKey] = newVal;
        }
        elemsLeft--;
    }
    return startingElement;
}

function chooseOne(choices) {
    return choices[parseInt(Math.random() * choices.length)];
}

function generateRandomVal(possibleElements) {
    var what = chooseOne(possibleElements);
    if (what == "booleans") {
        return {
            type: "boolean",
            val: chooseOne([true, false]),
        };
    }
    if (what == "numbers") {
        var isInteger = chooseOne([true, false]);
        var isNegative = chooseOne([true, false]);
        var maxNum = 2147483648;
        var x = Math.random() * maxNum;
        if (isInteger) {
            x = parseInt(x);
        }
        if (isNegative) {
            x = -x;
        }
        return {
            type: "number",
            val: x,
        };
    }
    if (what == "strings") {
        return {
            type: "string",
            val: generateRandomString(self.randomStringAlphabet),
        };
    }
    if (what == "arrays") {
        return {
            type: "array",
            val: [],
        };
    }
    if (what == "objects") {
        return {
            type: "object",
            val: {},
        };
    }
}
// return self;



function generateRandomKey(alphabet, restrictions) {
    if (self.stringType == "random") {
        var length = parseInt(Math.random() * (self.maxStringLength + 1));
        if (length == 0) {
            if (restrictions.indexOf("length-one-plus") >= 0) {
                length = 1;
            }
        }
        var string = "";
        for (var i = 0; i < length; i++) {
            var char = chooseOne(alphabet);
            if (i == 0) {
                if (restrictions.indexOf("alpha-or-underscore-first") >= 0) {
                    while (1) {
                        if (/^[a-zA-Z_]$/.test(char)) {
                            break;
                        }
                        var char = chooseOne(alphabet);
                    }
                }
            }
            string += char;
        }
        return string;
    } else {
        return WordDictionary.random();
    }
}
