let randomNum = parseInt( Math.random() * 100 +1 );
const submit = document.querySelector('#submit');
const userInput = document.querySelector('.guessFeild');
const guessSlot = document.querySelector('.previousGuesses');
const remaining = document.querySelector('.remaining');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.results');
const p = document.createElement('p');
const p0 = document.createElement('p');

let previousGuess = [];
let numGuess = 5;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess); 
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a Valid Number !!")
    }else if (guess > 100 || guess < 1){
        alert("Number should be between 1 and 100")
    }else{

        previousGuess.push(guess);
        checkGuess(guess);
        displayGuess(guess);
        if(numGuess === 0){
            // displayGuess(guess);
            displayMsg(`Game Over !! the right number was ${randomNum}`)
            endGame ();
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMsg(`HURRAY !! YOU WON !! You guessed it right`)
        endGame();
    }else if (guess > randomNum){
        displayMsg(`Your guess is little high`)
    }else if (guess < randomNum){
        displayMsg(`your guess is little low`)
    }
}
function displayGuess(guess){
    userInput.value = ''
    if(numGuess>1){
        guessSlot.innerHTML += `${guess}, `;
    }else{
        guessSlot.innerHTML += `${guess}`;
    }
    numGuess--;
    remaining.innerHTML = `${numGuess}`;
}

function displayMsg(message){
    lowOrHigh.innerHTML = `<h3>${message}<h3>`
}
function endGame(){
    userInput.value= ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNum =  parseInt( Math.random() * 100 + 1 )
        previousGuess = [];
        numGuess = 5;
        guessSlot.innerHTML = ''
        displayMsg('')
        remaining.innerHTML = `${numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true;
    })
}