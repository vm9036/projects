function generaterRandomNumber() {

    BigNumber.config({
        EXPONENTIAL_AT: 1e+9
    });
    var options = parseOptions();
    if (!options) {
        document.getElementById("generatedRandomNumberTextArea").value = "";
        return;
    }
    var randomNumbers = [];
    for (var i = 0; i < options.count; i++) {
        if (options.wholeNums) {
            randomNumbers.push(generateRandomWholeNumber(options.rangeStart, options.rangeEnd, options));
        } else if (options.fractNums) {
            randomNumbers.push(generateRandomFractNumber(options.rangeStart, options.rangeEnd, options).toFixed(options.precision));
        }
    }
    var sep = options.sep;
    if (sep == "\\n")
        sep = "\n";
    
    let answer = randomNumbers.join(sep);
    document.getElementById("generatedRandomNumberTextArea").value = answer;


    document.getElementById("errorMessage").innerHTML = " ";
    // document.getElementById("errorMessage").className = " ";
}

function generateRandomWholeNumber(rangeStart, rangeEnd, option) {
    return (BigNumber.random().times(option.rangeEnd.minus(option.rangeStart).plus(1)).plus(option.rangeStart)).floor();
}
function generateRandomFractNumber(rangeStart, rangeEnd, option) {
    return BigNumber.random().times(option.rangeEnd.minus(option.rangeStart)).plus(option.rangeStart);
}

function showErrorMessage(title, message) {
    document.getElementById("errorMessage").innerHTML = title + " " + message;
}


function parseOptions(tool) {
    var sep = document.getElementById("sep").value || "\n";
    var rangeStart = document.getElementById("range-start").value.trim();
    if (!/^[+-]?\d*\.?\d+$/.test(rangeStart)) {
        showErrorMessage("Invalid start range.", "Start of the range contains non digits.");
        return false;
    }
    rangeStart = new BigNumber(rangeStart);
    var rangeEnd = document.getElementById("range-end").value.trim();
    if (!/^[+-]?\d*\.?\d+$/.test(rangeEnd)) {
        showErrorMessage("Invalid end range.", "End of the range contains non digits.");
        return false;
    }
    rangeEnd = new BigNumber(rangeEnd);
    if (rangeEnd.lt(rangeStart)) {
        showErrorMessage("Invalid range.", "End of the range is less than the start.");
        return false;
    }
    var count = document.getElementById("count").value.trim();
    if (!/^\d+$/.test(count)) {
        showErrorMessage("Invalid count.", "Count contains non digits.");
        return false;
    }
    count = parseInt(count);
    if (count < 1) {
        showErrorMessage("Invalid count.", "You can't generate less than one number.");
        return false;
    }
    var precision = document.getElementById("precision").value.trim();
    if (!/^-?\d+$/.test(precision)) {
        showErrorMessage("Invalid precision.", "Precision contains non digits.");
        return false;
    }
    precision = parseInt(precision);
    if (precision < 0) {
        showErrorMessage("Invalid precision.", "Precision should be zero or more.");
        return false;
    }
    var wholeNums = false;
    var fractNums = false;

    var radios = document.getElementsByName('randomNum');
    for (var radio of radios) {
        if (radio.checked) {

            if (radio.value == "wholeNums") {
                wholeNums = true;
            }

            if (radio.value == "fractNums") {
                fractNums = true
            }
        }

    }

    if (wholeNums) {
        if (!rangeEnd.isInteger() && !rangeStart.isInteger() && parseInt(rangeEnd) == parseInt(rangeStart) && rangeEnd.times(rangeStart).gte(0)) {
            showErrorMessage("No integers in the given range.", "Range {0} to {1} contains no integer values.".format(rangeStart, rangeEnd));
            return false;
        }
        if (rangeStart.ceil().eq(rangeEnd.floor())) {
            tool.output.showWarningBadge("Only one value.", "There's only one integer value {0} in interval from {1} to {2}.".format(rangeStart.ceil(), rangeStart, rangeEnd));
        }
        rangeStart = rangeStart.ceil();
        rangeEnd = rangeEnd.floor();
    } else {
        if (rangeStart.eq(rangeEnd)) {
            tool.output.showWarningBadge("Only one value.", "There's only one fraction value {0} in interval from {1} to {2}.".format(rangeStart, rangeStart, rangeEnd));
        }
    }
    return {
        rangeStart: rangeStart,
        rangeEnd: rangeEnd,
        count: count,
        sep: sep,
        wholeNums: wholeNums,
        fractNums: fractNums,
        precision: precision
    }
}

function copyGeneratedRandomNumber() {
    copyToClipboard(document.getElementById("generatedRandomNumberTextArea").value);
    document.getElementById("generatedRandomNumberTextArea").select();
}
function downloadGeneratedData() {
    var blob = new Blob(["" + document.getElementById("generatedRandomNumberTextArea").value + ""], {
        type: "text/plain;charset=utf-8"
    });
    fileDownloadCB(blob, gViewName + ".txt");
}