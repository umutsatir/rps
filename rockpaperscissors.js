// write all the moves into an array and declare variables
let moves = ["rock", "paper", "scissors"];
let computerWin = 0;
let playerWin = 0;

// create a function that creates computer selection
function computerPlay() {
    return moves[Math.floor(Math.random() * moves.length)];
}

// create a function that receives player selection
function playerPlay() {
    let userChoice = prompt("Please write your move: ");
    for (let i = 0; i < moves.length; i++) {
        if (userChoice == moves[i]){
            return userChoice;
        }
    }
    alert("Wrong typo, please type again: ");
    playerPlay();
}

// create a function that plays a round
function playRound() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection){
        alert("Tie!");
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        playerWin++;
        alert("Player win! Player selected " + playerSelection + " and computer selected " + computerSelection + ". Current situation = Computer:" + computerWin + ", Player:" + playerWin);
    }
    else{
        computerWin++;
        alert("Player lose! Player selected " + playerSelection + " and computer selected " + computerSelection + ". Current situation = Computer:" + computerWin + ", Player:" + playerWin);
    }
}

// create a function that receives how many rounds to play and runs the round function that many times
function play(){
    computerWin = 0;
    playerWin = 0;
    while (playerWin != 5 && computerWin != 5){
        playRound();
    }
    if (playerWin == 5){
        alert("Player win!");
    }
    else if (computerWin == 5){
        alert("Computer win!");
    }
}

// run the function
play();
