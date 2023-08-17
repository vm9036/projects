function randomIntegers() {
    // var options = this.options.get();
    // var rangeStart = +(options["range-start"]);
    // var rangeEnd = +(options["range-end"]);
    // var howMany = +(options["count"]);

    var rangeStart = Number(document.getElementById("range-start").value);
    var rangeEnd = Number(document.getElementById("range-end").value);
    var howMany = Number(document.getElementById("count").value);
    var outputStr = '';
    for (var i = 0; i < howMany; i++) {
        outputStr += generateRandomNumber(rangeStart, rangeEnd);
        outputStr += "\n";
        document.getElementById("displayIntegers").value = outputStr;
    }
}
function generateRandomNumber(rangeStart, rangeEnd) {
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
}