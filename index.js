const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const userScoreText = document.querySelector('#user-score-text');
const compScoreText = document.querySelector('#comp-score-text');
const statementText = document.querySelector('#statement');
const buttonWrapper = document.querySelector('#button-wrapper');

const generateRandomNum = () => Math.floor(Math.random()*3);
let userScore = 0;
let compScore = 0;

const drawCondition = () => statementText.innerHTML = 'Draw due to same choice';

const changeBorderColor = (className) => {
    buttonWrapper.classList.add(className);
    setTimeout(() => buttonWrapper.classList.remove(className), 350)
};

const chooseKillingWord = (choice) => {
    let killingWord = '';
    switch (choice) {
        case 'rock':
            killingWord = 'breaks';
            break;
        case 'scissors':
            killingWord = 'cut';
            break;
        case 'paper':
            killingWord = 'wraps';
            break;
        default:
            console.log('error');
    }
    return killingWord;
};

const computerWin = (userChoice, compChoice) => {
    compScore += 1;
    compScoreText.innerHTML = compScore;
    statementText.innerHTML = `Computer's ${compChoice} ${chooseKillingWord(compChoice)} player's ${userChoice}!`;
    changeBorderColor('lose-con');
};

const userWin = (userChoice, compChoice) => {
    userScore += 1;
    userScoreText.innerHTML = userScore;
    statementText.innerHTML = `Player's ${userChoice} ${chooseKillingWord(userChoice)} computer's ${compChoice}!`;
    changeBorderColor('win-con');
};


const decideCondition = (userChoice, compChoice) => {
    if (Object.is(compChoice, userChoice)) {
        drawCondition();
        changeBorderColor('draw-con');
    }   
    else {
        if ((compChoice === 'rock' && userChoice === 'scissors') || 
        (compChoice === 'paper' && userChoice === 'rock') || 
        (compChoice === 'scissors' && userChoice === 'paper')) {
            computerWin(userChoice, compChoice);
        }
        else {
            userWin(userChoice, compChoice);
        }        
    } 
};

const makePlay = (userChoice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[generateRandomNum()];
    decideCondition(userChoice, compChoice);
};