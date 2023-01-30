// declaring variables
let moves = ["rock", "paper", "scissors"];
let computerWin = 0;
let playerWin = 0;
let result = document.querySelector("#result");
let score = document.querySelector("#score");

// create a function that creates computer selection
function computerPlay() {
    return moves[Math.floor(Math.random() * moves.length)];
}

// create a function that plays a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        result.textContent = "It's a tie!You selected " + playerSelection + " and computer selected " + computerSelection + ".";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        playerWin++;
        result.textContent = "You win! You selected " + playerSelection + " and computer selected " + computerSelection + ".";
    }
    else{
        computerWin++;
        result.textContent = "You lose! You selected " + playerSelection + " and computer selected " + computerSelection + ".";
    }
    score.textContent = "Player: " + playerWin + " Computer: " + computerWin;
}

// create a function that restarts the game
function restart(){
    playerWin = 0;
    computerWin = 0;
    score.textContent = "Player: " + playerWin + " Computer: " + computerWin;
    result.textContent = "";
}

// run the function
let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.id, computerPlay());
            if (playerWin == 5){
                alert("Player win!");
                restart();

            }
            else if (computerWin == 5){
                alert("Computer win!");
                restart();
            }
        });
});
