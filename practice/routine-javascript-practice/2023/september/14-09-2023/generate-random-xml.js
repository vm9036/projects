function generaterRandomXML() {
  let satisfyDepth = document.getElementById("always-max-elements").checked;
  console.log("satisfyDepth:->" + satisfyDepth);

  let maxDepth = Number(document.getElementById("depth").value);
  console.log("maxDepth :->" + maxDepth);

  let englishStrings = false;
  let randomStrings = false;

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

  elementsPerBranch = Number(document.getElementById("max-elements").value);
  console.log("elementsPerBranch :->" + elementsPerBranch);

  maxStringLength = Number(document.getElementById("max-string-length").value);
  console.log("maxStringLength :->" + maxStringLength);

  var optXMLRoot = document.getElementById("xml-root").value;
  console.log("optXMLRoot :->" + optXMLRoot);

  var optFormattingSpaces = false;
  var optFormattingTabs = false;
  var optformattingNone = false;

  var radiosIndentation = document.getElementsByName("use");
  for (var radio of radiosIndentation) {
    if (radio.checked) {
      if (radio.value == "formatting-spaces") {
        optFormattingSpaces = true;
      }

      if (radio.value == "formatting-tabs") {
        optFormattingTabs = true;
      }

      if (radio.value == "formatting-none") {
        optformattingNone = true;
      }
    }
  }
  console.log("optFormattingSpaces :->" + optFormattingSpaces);
  console.log("optFormattingTabs :->" + optFormattingTabs);
  console.log("optformattingNone :->" + optformattingNone);

  var optXmlMeta = document.getElementById("xml-meta").checked;
  console.log("optXmlMeta:->" + optXmlMeta);

  var optXmlAttributes = document.getElementById("xml-attributes").checked;
  console.log("optXmlAttributes:->" + optXmlAttributes);

  var optXmlCData = document.getElementById("xml-cdata").checked;
  console.log("optXmlCData:->" + optXmlCData);

  var optXmlComments = document.getElementById("xml-comments").checked;
  console.log("optXmlComments:->" + optXmlComments);

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
  if (optformattingNone) formatting = false;
  else if (optFormattingTabs) formatting = "\t";
  else if (optFormattingSpaces) formatting = "  ";
  var json = generator.generate();
  if (maxDepth == 0) {
    json = {};
    this.output.showWarningBadge(
      "No depth",
      "Depth of zero can only generate the root element."
    );
  }
  var xml = json2xml(json);
  var xmlDocument = null;
  var wrapTag = optXMLRoot;
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
    if (optXmlAttributes && chance(0.5)) {
      var k = WordDictionary.random();
      var v = WordDictionary.random();
      element.setAttribute(k, v);
    }
    if (optXmlCData && chance(0.25)) {
      var cdata = xmlDocument.createCDATASection(sentence());
      insertRandomly(cdata, element);
    }
    if (optXmlComments && chance(0.25)) {
      var comment = xmlDocument.createComment(sentence());
      insertRandomly(comment, element);
    }
  }
  var output = root.outerHTML;
  if (optXmlMeta) {
    output = '<?xml version="1.0" encoding="UTF-8" ?>' + output;
  }
  let answer = !formatting ? output : vkbeautify.xml(output, formatting);

  //console.log("answer:->" +answer);

  document.getElementById("generatedXMLTextArea").value = answer;
}
