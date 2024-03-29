function csvToText() {

    var delimiter = document.getElementById("char-delimiter").value;
    var comments = document.getElementById("char-comments").value;
    var quoteChar = document.getElementById("char-quote").value;
    var skipEmptyLines = document.getElementById("convert-skip-empty").checked;
    console.log("skipEmptyLines :-> " + skipEmptyLines);
    var convertHeaders = document.getElementById("convert-headers").checked;
    console.log("convertHeaders :-> " + convertHeaders);
    var o = document.getElementById("InputTextArea").value;
    s = {
        delimiter: delimiter || ",",
        comments: comments || "#",
        quoteChar: quoteChar || '"',
        headers: !1,
        skipEmptyLines: skipEmptyLines
    }
        , t = Papa.parse(o, s).data
        , v = ""
        , n = []
        , f = 0;
    convertHeaders || (f = 1);
    for (var r = f; r < t.length; r++)
        for (var e = 0; e < t[r].length; e++)
            n[e] === void 0 && (n[e] = 0),
                t[r][e].length > n[e] && (n[e] = t[r][e].length);
    for (var r = f; r < t.length; r++) {
        for (var i = t[r], e = 0; e < i.length; e++) {
            if (i[e].length < n[e])
                for (var d = n[e] - i[e].length, h = 0; h < d; h++)
                    i[e] += " ";
            v += i[e] + " "
        }
        v += "\n"
    }
    let answer = v;
    document.getElementById("OutputTextArea").value = answer;
}

function sampleBtn() {
    const testStr =
`Col 1, Col 2, Col 3, Col 4
Dog, Cat, Pony, Hamster

Mango, Orange 
Tiger, Lion, Elephant,#Giraffe`;
    document.getElementById("InputTextArea").value = testStr;
    csvToText();
}

function csvToTextAuto() {
    if (document.getElementById("isAuto").checked) {
        csvToText();
    }
}