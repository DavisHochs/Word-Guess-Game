const possibleAnswers = ['computer'];
const mysteryWord = [];
let guessDisplay = document.querySelector('#word-chamber');
let guessCounter = 0;
let winCounter = 0;

//Random number generator used for selecting a random word from the array of choices
function getRandomNum(n) {
    return Math.floor(Math.random() * n);
};

//R
let randomIndex = getRandomNum(possibleAnswers.length);
const randomWord = possibleAnswers[randomIndex];

function loadRandomWordAndDisplay() {

    for (let i = 0; i < randomWord.length; i++) {
        let guessDisplay = document.querySelector('#word-chamber');
        mysteryWord.push('_ ');
        mysteryWord.toString();
        guessDisplay.textContent = mysteryWord;
        
        
    }
    return mysteryWord;
};


// Gives me an array of underscores the length of the word assigned to unknownWord
const unknownWord = loadRandomWordAndDisplay();
console.log(unknownWord);



function runGame() {
    let guessCounter = unknownWord.length + 5;
    let guessesRemain = document.querySelector('#guess-number');
    guessesRemain.textContent += guessCounter;
    

    

    document.onkeyup = function(e) {
        const userSelection = e.key.toLowerCase();
        const split = randomWord.split('');
        let yourGuess = document.querySelector('#your-guess');
        yourGuess.innerText += userSelection;
        
        for (let i = 0; i < split.length; i++) {
            if (split.includes(userSelection)) {
                
                if (split[i] == userSelection) {
                    let guessDisplay = document.querySelector('#word-chamber');
                    unknownWord[i] = userSelection;
                    guessDisplay.innerText = unknownWord;
                    

                }
                
            }
        }
    }
};
runGame();


 