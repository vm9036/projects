function randomIntegers() {
    var rangeStart = +(document.getElementById("range-start").value);
    var rangeEnd = +(document.getElementById("range-end").value);
    var howMany = +(document.getElementById("count").value);
    var outputStr = '';
    for (var i = 0; i < howMany; i++) {
        outputStr += generateRandomNumber(rangeStart, rangeEnd);
        outputStr += "\n";
    }
    document.getElementById("displayIntegers").value = outputStr;
}

function generateRandomNumber(rangeStart, rangeEnd) {
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
}

randomIntegers();