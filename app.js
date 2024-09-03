/*
1. new function - getComputerChoice()
2. getComputerChoice will randomly return one of the 
following string values: “rock”, “paper” or “scissors”.
3. test getComputerChoice function
4. new function - getHumanChoice() - prompt method
5. check if the function getHumanChoice() will return one of the
valid choices depending on what the user inputs
6. test getHumanChoice() fucntion
7. Declare the players score variables - humanScore and computerScore
8. new fucntion playRound() with two parameters humanChoice and computerChoice
9. the game will play 5 rounds
10. new function playGame() that calls playRound to play 5 rounds, 
keeps track of the scores and declares a winner at the end.



*/


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}



function getHumanChoice(){
    let humanAnswer = prompt("Write your choice", '');
    humanAnswer = humanAnswer.toLowerCase();
    return humanAnswer;
}






function playRound(human, computer) {
    if( human === "rock" && computer === "rock"){
        console.log("Equal score");
    } else if ( human === "rock" && computer === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    } else if ( human === "rock" && computer === "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore += 1;
    } else if ( human === "paper" && computer === "rock"){
        console.log("You win! Paper beats Rock");
        humanScore += 1;
    } else if ( human === "paper" && computer === "paper"){
        console.log("Equal score");
    } else if ( human === "paper" && computer === "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;   
    } else if ( human === "scissors" && computer === "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;   
    } else if ( human === "scissors" && computer === "paper"){
        console.log("You win! Scissors beats paper");
        humanScore += 1;  
    } else if ( human === "scissors" && computer === "scissors"){
        console.log("Equal score"); 
    }

}



function playGame(){
    for ( let i = 0;  i < 5; i ++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i + 1}`);
        playRound(humanSelection, computerSelection);
        console.log(`Current result: Human - ${humanScore} Computer = ${computerScore}`);
    }

    if ( humanScore > computerScore)
    {
        console.log("Congratulations! You win!")
    } else if ( humanScore < computerScore){
        console.log("Sorry! You lose!")
    } else if ( humanScore === computerScore){
        console.log("Equeal result!");
    }
}

playGame();