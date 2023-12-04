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


function randomLetterGenerator() {
    let allString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let capitalString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerString = 'abcdefghijklmnopqrstuvwxyz'
    let capital = document.getElementById("capitalLetter").checked;
    let lower = document.getElementById("lowerLetter").checked;
    let strAns = "", randomNumber;
    let numberOfLetter = document.getElementById("numberOfLetter").value;

    for (let i = 1; i <= numberOfLetter; i++) {
        if (capital == true && lower == true) {
            randomNumber = Math.floor(Math.random() * 52);
            let ans = allString.charAt(randomNumber);
            if(i < numberOfLetter)
            {
                strAns = strAns + ans + "\n";
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
                strAns = strAns + ans + "\n";
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
                strAns = strAns + ans + "\n";
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
                strAns = strAns + ans + "\n";
            }
            else
            {
                strAns = strAns + ans;
            }
        }
    }
    updateFontSize();
    document.getElementById("displayLetter").value = strAns;
}

function updateFontSize() {
    let outputTextAreaElement = document.getElementById("displayLetter");
    
    if (outputTextAreaElement.value < 3) {
        outputTextAreaElement.style.fontSize = "70px";
        
    } else{
        outputTextAreaElement.style.fontSize = "20px";
        
    }
}

