function joinTextMain() {
    var text = document.getElementById("InputTextArea").value;
    var answer = joinTextLogic(text);
    console.log(answer);
    document.getElementById("OutputTextArea").value = answer;
}


function joinTextLogic(text) {
    var tool = this;
    var opts = parseOptions(tool);
    if (text.trim().length == 0) {
        return "";
    }
    if (opts.preservePar) {
        var output = [];
        var textParts = text.split(/(\n+(?:[\t ]*\n)+)/);
        for (var i = 0; i < textParts.length; i++) {
            if (/(\n+(?:[\t ]*\n)+)/.test(textParts[i])) {
                output.push(textParts[i]);
            } else {
                output.push(joinText(textParts[i], opts));
            }
        }
        return output.join('');
    } else {
        return joinText(text, opts);
    }
}

function joinText(text, opts) {
    if (opts.re) {
        var lines = text.split(opts.re);
    } else {
        var lines = text.split(opts.inputSep);
    }
    var linesOut = [];
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (opts.leftTrim) {
            line = line.replace(/^\s+/g, "");
        }
        if (opts.rightTrim) {
            line = line.replace(/\s+$/g, "");
        }
        if (opts.removeEmpty) {
            if (line.length == 0)
                continue;
        }
        linesOut.push(line);
    }
    return linesOut.join(opts.joinChar);
}


function parseOptions(tool) {
    // var options = tool.options.get();
    var stringSep = true;
    var regexpSep = false;
    var inputSep = '\n';
    var joinChar = document.getElementById("char").value;
    joinChar = joinChar || '';
    // var leftTrim = document.getElementById("remove-leading-whitespace").checked;
    // var leftTrim = options['remove-leading-whitespace'] || options['left-trim'];
    var rightTrim = document.getElementById("remove-trailing-whitespace").checked;
    // var rightTrim = options['remove-trailing-whitespace'] || options['right-trim'];
    if (undefined) {
        var leftTrim = true;
        var rightTrim = true;
    }
    var removeEmpty = document.getElementById("remove-empty-lines").checked;
    if (undefined) {
        var preservePar = true;
        var removeEmpty = false;
    } else if (undefined) {
        var preservePar = false;
        var removeEmpty = true;
    } else if (undefined) {
        var preservePar = false;
        var removeEmpty = false;
    } else {
        var preservePar = false;
    }
    var re = null;
    if (regexpSep) {
        var regexParts = inputSep.match(/^\/(.*?)\/([gimuy]*)$/);
        if (regexParts) {
            re = new RegExp(regexParts[1], regexParts[2]);
        } else {
            re = new RegExp(inputSep);
        }
    } else {
        if (inputSep == "\\n")
            inputSep = "\n";
    }
    if (joinChar == "\\n")
        joinChar = "\n";
    return {
        inputSep: inputSep,
        joinChar: joinChar,
        stringSep: stringSep,
        re: re,
        removeEmpty: removeEmpty,
        leftTrim: leftTrim,
        rightTrim: rightTrim,
        preservePar: preservePar
    };
}

function sampleBtn() {
    let testStr =
`Take out the trash

Don't touch 
hot stove

Listen carefully instructions
Turn off the lights 
before leaving`;
    document.getElementById("InputTextArea").value = testStr;
    joinTextMain();
}

function joinTextAuto(){
    if(document.getElementById("isAuto").checked)
    {
        joinTextMain();
    }
}