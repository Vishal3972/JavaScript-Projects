let userScore=0;
let compScore=0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorepara = document.getElementById('user-score');
const compScorepara = document.querySelector('#comp-score')

const genCompChoice = () =>{
    const options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log('Game drawn');
    msg.innerText = 'Game Drawn ! Play Again ...';
    msg.style.backgroundColor = 'rgb(6, 13, 87)';
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        console.log('user win');
        userScorepara.innerText = userScore;
        msg.innerText = `You Won ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }else{
        compScore++;
        console.log('compter win');
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const playGame = (userChoice) => {
    console.log('user choice =',userChoice);

    const compChoice = genCompChoice();
    console.log('computer choice =',compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
        }else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true;
        }else{
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    }); 
});