const RANDOM_QUOTE_API_URL = 'https://type.fit/api/quotes'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

function totalCharCount(){
    let storeSpan = document.querySelectorAll('span');
    console.log(storeSpan);
}
console.log(totalCharCount());

var redCount = 0;
var greenCount = 0;
quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    let correct = true;
    
    var total = 0;
    greenCount = 0;
    redCount = 0;
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false;
            // redCount++;
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
            greenCount++;
        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false;
            redCount++;
        }
        total++;
    })
    console.log("Total :-> "+ total);
    document.getElementById("totalCount").innerHTML = "Total : " + total;
    document.getElementById("totalCharCount").innerHTML = "Textarea Total character Count : " + ( greenCount + redCount);
    document.getElementById("greenTextCount").innerHTML = "Green Text Count :" + greenCount;
    document.getElementById("redTextCount").innerHTML = " Red Text Count : " + redCount;
    // console.log("Red Count :-> "+redCount);
    // console.log("GreenCount :-> " +greenCount);
    if (correct) renderNewQuote()
})

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data[Math.floor(Math.random() * data.length)].text) // Select a random quote
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML = ' '
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null
    startTimer()
}

let startTime
function startTimer() {
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

renderNewQuote()


// const RANDOM_QUOTE_API_URL = 'https://type.fit/api/quotes'
// const quoteDisplayElement = document.getElementById('quoteDisplay')
// const quoteInputElement = document.getElementById('quoteInput')
// const timerElement = document.getElementById('timer')


// quoteInputElement.addEventListener('input', () => {
//     const arrayQuote = quoteDisplayElement.querySelectorAll('span')
//     const arrayValue = quoteInputElement.value.split('')

//     let correct = true;
//     arrayQuote.forEach((characterSpan, index) => {
//         const character = arrayValue[index]
//         if(character == null) {
//             characterSpan.classList.remove('correct')
//             characterSpan.classList.remove('incorrect')
//             correct = false
//         }
//         else if(character === characterSpan.innerText){
//             characterSpan.classList.add('correct')
//             characterSpan.classList.remove('incorrect')
//         } else {
//              characterSpan.classList.remove('correct')
//             characterSpan.classList.add('incorrect')
//             correct = false
//         }
//     })

//     if(correct) renderNewQuote()
// })

// function getRandomQuote() {
//     return fetch(RANDOM_QUOTE_API_URL)
//         .then(response => response.json())
//         .then(data => data.content)
// }

// async function renderNewQuote() {
//     const quote = await getRandomQuote();
//     quoteDisplayElement.innerHTML = ''
//     quote.split('').forEach(character => {
//         const charcterSpan = document.createElement('span')
//         charcterSpan.innerText = character;
//         quoteDisplayElement.appendChild(charcterSpan)
//     });
//     quoteInputElement.value = null
//     startTimer()
// }

// let startTime 
// function startTimer() {
//  timerElement.innerText = 0;
//  startTime = new Date()
//  setInterval(() => {
//     timerElement.innerText = getTimerTime()
//  }, 1000);
// }

// function getTimerTime() {
//   return  Math.floor((new Date() - startTime) / 1000)
// }

// renderNewQuote();