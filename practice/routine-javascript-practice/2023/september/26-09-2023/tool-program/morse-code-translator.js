function morseCode() {
    var text = document.getElementById("generatedMorseCodeInputTextArea").value;
    let answer = morseCodeLogic(text);
    document.getElementById("generatedMorseCodeOutputTextArea").value = answer;
}

function morseCodeLogic(text) {
    var dot = (document.getElementById("dot").value || ".");
    var dash = (document.getElementById("dash").value || "-");
    var morse = textToMorse(text);
    morse = morse.replace(/\./g, dot);
    morse = morse.replace(/\-/g, dash);
    return morse;
}

function sampleBtn() {
    let testStr ="Per unit of time is taken as the duration of one point. The duration of the dash is equal to three points. The pause between elements of the same sign is one point, between the signs in the word - 3 points, between words - 7 points.";
    document.getElementById("generatedMorseCodeInputTextArea").value = testStr;
    morseCode();
}


