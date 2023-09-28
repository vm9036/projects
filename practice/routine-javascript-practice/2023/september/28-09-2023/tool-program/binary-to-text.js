
function binaryToText(){
    var binary = document.getElementById("InputTextArea").value;
    let answer = binaryToTextLogic(binary);
    document.getElementById("OutputTextArea").value  = answer;
}

function binaryToTextLogic(binary){
    var tool = this;
    binary = binary.replace(/\s+/g, ' ');
    binary = binary.replace(/^\s+/g, '');
    binary = binary.replace(/\s+$/g, '');
    if (binary.length == 0) {
        return "";
    }
    var chars = [];
    if (binary.indexOf(' ') > 0) {
        var bytes = binary.split(' ');
        for (var i = 0; i < bytes.length; i++) {
            chars.push(String.fromCharCode(parseInt(bytes[i], 2)));
        }
    } else {
        if (binary.length < 8) {
            while (binary.length < 8) {
                binary = "0" + binary;
            }
        }
        if (binary.length % 8 != 0) {
            this.output.showNegativeBadge("Can't convert.", "Input binary doesn't split into groups of 8 bits evenly.");
            return "";
        }
        for (var i = 0; i < binary.length; i += 8) {
            chars.push(String.fromCharCode(parseInt(binary.substr(i, 8), 2)));
        }
    }
    var text = chars.join("");
    if (undefined) {
        if (typeof utf8 !== "undefined") {
            text = utf8.decode(text);
        } else {
            tool.output.showNegativeBadge("Can't decode singlebyte", "UTF-8 library is not defined.");
            return "";
        }
    }
    return text;
}

function sampleBtn() {
    let testStr ="01101000 01100101 01101100 01101100 01101111";
    document.getElementById("InputTextArea").value = testStr;
    binaryToText();
}

function binaryToTextAuto(){
  if(document.getElementById("isAuto").checked)
  {
    binaryToText();
  }
}