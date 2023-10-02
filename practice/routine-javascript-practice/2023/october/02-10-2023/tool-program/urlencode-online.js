function urlEncodeTextMain(){
    var text = document.getElementById("inputTextArea").value;

    let answer = urlEncodeTextLogic(text);
    document.getElementById("outputTextArea").value = answer;
}

function sampleUrlEncodeTextData() {
    let testStr = "Inside, the shelves were stacked high with books of every genre, their pages filled with tales of far-off lands, daring adventures, and uncharted mysteries. The soft scent of aged paper wafted through the air, inviting anyone who entered to lose themselves in the magic of storytelling. As you picked up a book and turned its pages, you couldn't help but feel that with each word you read, a new world unfurled before you, waiting to be explored.";
    document.getElementById("inputTextArea").value = testStr;
    urlEncodeTextMain();
}


function urlEncodeTextAuto(){
    if(document.getElementById("isAuto").checked)
    {
        urlEncodeTextMain();
    }
  }
  

function urlEncodeTextLogic(text) {
    var encoding = 'utf8';
    var method = undefined;
    var skipNewlines = undefined;
    var skipTabs = undefined;
    var skipSpaces = undefined;
    var lowercase = undefined;
    var encodeAllChars = document.getElementById("encode-all-chars").checked;
    console.log("encodeAllChars :-> "+encodeAllChars);

    if (method == "escape") {
        var notEncode = "*+-./0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
    } else if (method == "encode-uri") {
        var notEncode = "!#$&'()*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~";
    } else if (method == "alphanumeric-underscore") {
        var notEncode = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
    } else if (method == "custom-encode") {
        var encode = options["custom-symbols"] || "";
    } else if (method == "custom-don-not-encode") {
        var notEncode = options["custom-symbols"] || "";
    } else if (method == "encode-all-chars" || encodeAllChars) {
        var notEncode = "";
    } else {
        var notEncode = "!'()*-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~";
    }
    var chars = splitIntoGraphemes(text);
    var output = [];
    for (var i = 0; i < chars.length; i++) {
        var char = chars[i];
        var skipChar = (skipNewlines && char == "\n") || (skipTabs && char == "\t") || (skipSpaces && char == " ");
        if (skipChar) {
            output.push(char);
            continue;
        }
        if (method == "custom-encode") {
            var shouldEncode = encode.indexOf(char) >= 0;
        } else {
            var shouldEncode = notEncode.indexOf(char) < 0;
        }
        if (shouldEncode) {
            var urlEncodedChar = urlEncodeText(char, encoding, lowercase, false);
            output.push(urlEncodedChar);
        } else {
            output.push(char);
        }
    }
    if (undefined) {
        var bom = urlEncodeText("", encoding, lowercase, true);
        output.unshift(bom);
    }
    return output.join("");
}


function urlEncodeText(text, encoding, lowercase, bom) {
    var utf8 = textToUtf8(text);
    if (encoding == "utf8") {
        var urlEncoded = bytesToUrlEncoding(utf8, lowercase);
    } else if (/^(utf16|ucs2)/.test(encoding)) {
        var byteOrder = encoding.substr(-2, 2);
        var utf16Units = utf8ToUtf16(utf8, byteOrder, bom);
        var utf16Bytes = utf16ToBytes(utf16Units);
        var urlEncoded = bytesToUrlEncoding(utf16Bytes, lowercase);
    } else if (/^(utf32|ucs4)/.test(encoding)) {
        var byteOrder = encoding.substr(-2, 2);
        var utf32Units = utf8ToUtf32(utf8, byteOrder, bom);
        var utf32Bytes = utf32ToBytes(utf32Units);
        var urlEncoded = bytesToUrlEncoding(utf32Bytes, lowercase);
    }
    return urlEncoded;
}

function bytesToUrlEncoding(bytes, lowercase) {
    var urlEncoded = '';
    for (var i = 0; i < bytes.length; i++) {
        var byte = bytes[i].toString(16);
        if (byte.length == 1) {
            byte = "0" + byte;
        }
        urlEncoded = urlEncoded + "%" + byte;
    }
    if (!lowercase)
        urlEncoded = urlEncoded.toUpperCase();
    return urlEncoded;
}

function splitIntoGraphemes(text) {
    var splitter = new GraphemeSplitter();
    var chars = splitter.splitGraphemes(text);
    return chars;
}