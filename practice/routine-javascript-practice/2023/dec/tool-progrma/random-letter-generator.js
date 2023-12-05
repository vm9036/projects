function randomLetterGenerator() {
    let allString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let capitalString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerString = 'abcdefghijklmnopqrstuvwxyz'
    let capital = document.getElementById("capitalLetter").checked;
    let lower = document.getElementById("lowerLetter").checked;
    let strAns = "", randomNumber;
    let numberOfLetter = parseInt(document.getElementById("numberOfLetter").value);
    let separator = document.getElementById("separator").value;

    if (separator == "\\n"){
        separator = "\n";
    }

    for (let i = 1; i <= numberOfLetter; i++) {
        if (capital == true && lower == true) {
            randomNumber = Math.floor(Math.random() * 52);
            let ans = allString.charAt(randomNumber);
            if(i < numberOfLetter)
            {
                strAns = strAns + ans + separator;
            }
            else
            {
                strAns = strAns + ans;
            }
        }
        else if(capital == true) {
            randomNumber = Math.floor(Math.random() * 26);
            let ans = capitalString.charAt(randomNumber);
            if(i < numberOfLetter)
            {
                strAns = strAns + ans + separator;
            }
            else
            {
                strAns = strAns + ans;
            }
        }
        else if (lower == true) {
            randomNumber = Math.floor(Math.random() * 26);
            let ans = lowerString.charAt(randomNumber);
            if(i < numberOfLetter)
            {
                strAns = strAns + ans + separator;
            }
            else
            {
                strAns = strAns + ans;
            }
        }
        else {
            randomNumber = Math.floor(Math.random() * 26);
            let ans = lowerString.charAt(randomNumber);
            if(i < numberOfLetter)
            {
                strAns = strAns + ans + separator;
            }
            else
            {
                strAns = strAns + ans;
            }
        }
    }
    document.getElementById("displayLetter").value = strAns;
    updateFontSize();
}

function updateFontSize(){
    let numberOfLetter = parseInt(document.getElementById("numberOfLetter").value);
    console.log("numberOfLetter :-> "+numberOfLetter);
    let outputTextAreaElement = document.getElementById("displayLetter");
    outputTextAreaElement.rows = 2;
    console.log("outputTextAreaElement :-> "+outputTextAreaElement);

    if(numberOfLetter <= 1) {
        outputTextAreaElement.rows = 2;
        outputTextAreaElement.style.fontSize = "150px";
        document.getElementById("displayFontSize").innerHTML = "150px";
        console.log("less than equal 1");
    }
    else if(numberOfLetter <= 2) {
        outputTextAreaElement.rows = 2;
        outputTextAreaElement.style.fontSize = "75px";
        document.getElementById("displayFontSize").innerHTML = "75px";
        console.log("less than 2");
    } else if(numberOfLetter <= 3){
        outputTextAreaElement.rows = 2;
        outputTextAreaElement.style.fontSize = "37.5px";
        document.getElementById("displayFontSize").innerHTML = "37.5px";
        console.log("less than 3");
    }
    else if(numberOfLetter <= 4){
        outputTextAreaElement.rows = 2;
        outputTextAreaElement.style.fontSize = "19.25px";
        document.getElementById("displayFontSize").innerHTML = "19.25px";
        console.log("less than 4");
    }
    else if(numberOfLetter <= 5){
        outputTextAreaElement.rows = 2;
        outputTextAreaElement.style.fontSize = "18px";
        document.getElementById("displayFontSize").innerHTML = "18px";
        console.log("less than 5");
    }
    else{
        outputTextAreaElement.rows = 2;
        outputTextAreaElement.style.fontSize = "15px";
        document.getElementById("displayFontSize").innerHTML = "15px";
        console.log("greater than");
    }

}

// function getRandomLetter() {
//     // Unicode values for lowercase letters 'a' to 'z'
//     const startCharCode = 'a'.charCodeAt(0);
//     const endCharCode = 'z'.charCodeAt(0);

//     // Generate a random integer within the range of Unicode values for lowercase letters
//     const randomCharCode = Math.floor(Math.random() * (endCharCode - startCharCode + 1)) + startCharCode;

//     // Convert the random Unicode value to a character
//     const randomLetter = String.fromCharCode(randomCharCode);

//     return randomLetter;
// }

// function randomLetterGenerator(){
//     let numberOfLetter = document.getElementById("numberOfLetter").value;
//     // let optionSelect = document.getElementById("optinSelect").value;

//     let display = getRandomLetter();33
//     document.getElementById("displayLetter").innerHTML = display;

// }