// DOM objects
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const userScoreText = document.querySelector('#user-score-text');
const compScoreText = document.querySelector('#comp-score-text');

const choices = ['rock', 'paper', 'scissors'];

const generateRandomNum = () => Math.floor(Math.random()*3);
let userScore = 0;
let compScore = 0;

const decideCondition = (userChoice, compChoice) => {
    if (Object.is(compChoice, userChoice)) {
        
    }
    else if (!Object.is(compChoice, userChoice)) {
        if ((compChoice === 'rock' && userChoice === 'scissors') || 
        (compChoice === 'paper' && userChoice === 'rock') || 
        (compChoice === 'scissors' && userChoice === 'paper')) {
            compScore += 1;
            compScoreText.innerHTML = compScore;
        }
        else {
            userScore += 1;
            userScoreText.innerHTML = userScore;
        }        
    }
}

const makePlay = (userChoice) => {
    const compChoice = choices[generateRandomNum()];

    decideCondition(userChoice, compChoice);
};

