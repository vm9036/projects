function randomLetterGenerator() {
    let allString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let capitalString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerString = 'abcdefghijklmnopqrstuvwxyz'
    let capital = document.getElementById("capitalLetter").checked;
    let lower = document.getElementById("lowerLetter").checked;
    let strAns = "", randomNumber;
    let numberOfLetter = parseInt(document.getElementById("numberOfLetter").value);
    let separator = document.getElementById("separator").value;

    if (separator == " ") {
        separator = "\n";
    }
    if (separator == "\\n") {
        separator = "\n";
    }

    for (let i = 1; i <= numberOfLetter; i++) {
        if (capital == true && lower == true) {
            randomNumber = Math.floor(Math.random() * 52);
            let ans = allString.charAt(randomNumber);
            if (i < numberOfLetter) {
                strAns = strAns + ans + separator;
            }
            else {
                strAns = strAns + ans;
            }
        }
        else if (capital == true) {
            randomNumber = Math.floor(Math.random() * 26);
            let ans = capitalString.charAt(randomNumber);
            if (i < numberOfLetter) {
                strAns = strAns + ans + separator;
            }
            else {
                strAns = strAns + ans;
            }
        }
        else if (lower == true) {
            randomNumber = Math.floor(Math.random() * 26);
            let ans = lowerString.charAt(randomNumber);
            if (i < numberOfLetter) {
                strAns = strAns + ans + separator;
            }
            else {
                strAns = strAns + ans;
            }
        }
        else {
            randomNumber = Math.floor(Math.random() * 26);
            let ans = lowerString.charAt(randomNumber);
            if (i < numberOfLetter) {
                strAns = strAns + ans + separator;
            }
            else {
                strAns = strAns + ans;
            }
        }
    }
    document.getElementById("displayLetter").value = strAns;
    updateFontSize();
}

function updateFontSize() {
    let numberOfLetter = parseInt(document.getElementById("numberOfLetter").value);
    console.log("numberOfLetter :-> " + numberOfLetter);
    let outputTextAreaElement = document.getElementById("displayLetter");
    // outputTextAreaElement.rows = 2;
    console.log("outputTextAreaElement :-> " + outputTextAreaElement);


    if (numberOfLetter > 5) {
        // outputTextAreaElement.rows = 10;
        outputTextAreaElement.style.fontSize = "30px";
        outputTextAreaElement.style.height = "500px";
        document.getElementById("displayFontSize").innerHTML = "Font Size :- 30px, Height :- 500px";
    }
    else if (numberOfLetter == 5 || numberOfLetter < 5) {
        // outputTextAreaElement.rows = 5;
        outputTextAreaElement.style.fontSize = "55px";
        outputTextAreaElement.style.height = "500px";
        document.getElementById("displayFontSize").innerHTML = "Font Size :- 55px , Height :- 500px";
        // console.log("greater than");
    }
}
