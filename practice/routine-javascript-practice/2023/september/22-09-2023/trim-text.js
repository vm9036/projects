function trimText(){
    var text = document.getElementById("generatedTrimTextInputTextArea").value;
    let answer = trimTextLogic(text);
    console.log(answer);
    document.getElementById("generatedTrimTextOutputTextArea").value = answer;
}

function trimTextLogic(text) {
    // var options = this.options.get();
    var multiLine = document.getElementById("multi-line").checked;
    var leftTrims = document.getElementById("left-trim").checked;
    var rightTrims = document.getElementById("right-trim").checked;
    if (multiLine) {
        var lines = text.split("\n");
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (leftTrims) {
                line = leftTrim(line);
            }
            if (rightTrims) {
                line = rightTrim(line);
            }
            ret += line + "\n";
        }
        return ret;
    } else {
        if (leftTrims) {
            text = leftTrim(text);
        }
        if (rightTrims) {
            text = rightTrim(text);
        }
        return text;
    }
}

function leftTrim(str) {
    return str.replace(/^\s+/, '');
}

function rightTrim(str) {
    return str.replace(/\s+$/, '');
}

function sampleBtn(){
    let testStr ="      It's better to spend time on something useful and interesting than manually removing spaces.";
    document.getElementById("generatedTrimTextInputTextArea").value = testStr;
    trimText();
}

function autoClick(){
    
    let checkEl = document.getElementById("isAuto").checked;
    if(checkEl.checked == true) {
        trimText();
    }
}