
function replacedText() {
    var text = document.getElementById("InputTextArea").value;
    console.log("inputText:->" + text);

    let answer = replacedTextLogic(text);
    document.getElementById("OutputTextArea").value = answer;

}

function sampleBtn() {
    let testStr = 
`The sound of a thunderstorm rumbled in the distance, creating an ominous feeling. But I sat on the porch, sipping tea and watching as the rain poured down. It was a reminder that sometimes, we need the storms to appreciate the sunshine.
1. tone
2. harmony
3. melody
4. vibration
5. accent`;
    document.getElementById("InputTextArea").value = testStr;
    replacedText();
}

function replacedTextAuto() {
    if (document.getElementById("isAuto").checked) {
        replacedText();
    }
}

function replacedTextLogic(text) {

    let findByString = false;
    let findByRegex = false;
    var radios = document.getElementsByName('pattern');
    for (var radio of radios) {
        if (radio.checked) {

            if (radio.value == "text") {
                findByString = true;
            }

            if (radio.value == "regex") {
                findByRegex = true;
            }
        }

    }
    console.log("findByString :->" + findByString);
    console.log("findByRegex :->" + findByRegex);

    let replaceFrom = document.getElementById("find").value;
    console.log("replaceFrom:->" + replaceFrom);

    var splitRegex = document.getElementById("regex").value;
    console.log("regExp :-> " + splitRegex);

    let newString = document.getElementById("new-string").value;
    console.log("newString :->" + newString);

    if (findByString == true) {
        return text.split(replaceFrom).join(newString);
    } else {
        var regexParts = splitRegex.match(/^\/(.*?)\/([gimuy]*)$/);
        if (regexParts) {
            var re = new RegExp(regexParts[1], regexParts[2]);
        } else {
            var re = new RegExp(splitRegex);
        }
        return text.replace(re, newString);
    }

}

