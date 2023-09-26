function morseCode() {
    var text = document.getElementById("InputTextArea").value;
    let answer = morseCodeLogic(text);
    document.getElementById("").value = answer;
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
    let testStr ="Humility is the practice of recognizing our limitations and imperfections, and it is essential to personal growth and development. Whether it's acknowledging our mistakes and shortcomings, seeking feedback from others, or approaching new situations with a sense of openness and curiosity, humility can help us learn and grow in meaningful ways.";
    document.getElementById("InputTextArea").value = testStr;
    morseCode();
}

function morseCodeAuto(){
    if(document.getElementById("isAuto").checked)
    {
        morseCode();
    };
}


