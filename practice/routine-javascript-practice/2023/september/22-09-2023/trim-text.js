function trimText(){
    var text = document.getElementById("InputTextArea").value;
    let answer = trimTextLogic(text);
    console.log(answer);
    document.getElementById("OutputTextArea").value = answer;
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
    let testStr =
`    JAVASCRIPT    
JAVA  
    PYTHON
C# 
    ASP.NET`
    document.getElementById("InputTextArea").value = testStr;
    trimText();
}

function trimTextAuto(){
    if(document.getElementById("isAuto").checked) {
        trimText();
    };
}