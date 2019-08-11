const possibleAnswers = ['computer', 'toaster', 'apple', 'jar', 'monitor', 'congress', 'idiot', 'javascript'];
let guessDisplay = document.querySelector('#word-chamber');
let yourGuess = document.querySelector('#letters-guessed');
let guessesRemain = document.querySelector('#guess-counter');
let guessCounter = 10;
let winCounter = 0;
let lossCounter = 0;

function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
}

function getRandomWord(number) {
    let randomIndex = getRandomNumber(number);
    let randomWord = possibleAnswers[randomIndex];
    return randomWord;
}

function loadGuessDisplay(randomWord) {
    const mysteryWord = [];
    let guessDisplay = document.querySelector('#word-chamber');
    
    for (let i = 0; i < randomWord.length; i++) {
        mysteryWord.push('_ ');
        mysteryWord.toString();
        guessDisplay.textContent = mysteryWord;
    }
    return mysteryWord;
}

function checkWinCondition(arr1, arr2) {
    let check1 = arr1.join();
    let check2 = arr2.join();
    
    if (check1 === check2) {
        return true;
    }
}

function reset() {

    guessesRemain.innerText = guessCounter;
    guessDisplay.innerHTML = '';
    yourGuess.innerHTML = '';
   
    
    runGame();
}

function runGame() {
    //Sets up our variables for the games uses
    let randomWord = getRandomWord(possibleAnswers.length);
    let unknownWord = loadGuessDisplay(randomWord);
    const split = randomWord.split('');
    const answerContainer = Array(randomWord.length);
    
    
    let wins = document.querySelector('#wins');
    
    
    
    
    
    document.onkeyup = function(e) {
        const userSelection = e.key.toLowerCase();
        yourGuess.innerText += userSelection;
        
        guessesRemain = document.querySelector('#guess-counter');
        guessesRemain.textContent = guessCounter;
        guessCounter--;
        

        

        for (let i = 0; i < split.length; i++) {
            
                if (split[i] == userSelection && e.keyCode >= 65 && e.keyCode <= 90) {
                    let guessDisplay = document.querySelector('#word-chamber');
                    unknownWord[i] = userSelection;
                    guessDisplay.innerText = unknownWord;
                    answerContainer[i] = userSelection;    
                }
            }
            let hasWon = checkWinCondition(split, answerContainer);
            if (hasWon == true) {
                alert('You win!'); 
                let wins = document.querySelector('#win-display'); 
                winCounter++;
                wins.textContent  = winCounter;
                guessCounter = 10;
                
            }
            else if (guessCounter < 0) {
                alert('You lose!');
                let loss = document.querySelector('#loss-display');
                lossCounter++;
                loss.textContent = lossCounter;
                guessCounter = 10;
                
            }
                 
    }
    
    
}
runGame();








