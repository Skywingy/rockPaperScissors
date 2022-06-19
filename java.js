//Random selection array
const select = ["rock", "paper", "scissors"];
let playerSelectionCount = 0;
let computerSelectionCount = 0;
//Random selection function
function computerPlay() {
    const random = select[Math.floor(Math.random() * select.length)];
    return random;
}

//Com and Player selection phase and winner

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log("player:", playerSelection)
    computerSelection = computerPlay() ;
    console.log("com:", computerSelection);
    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
            playerSelectionCount++;
            console.log("Yeey you won!!! GOODJOB!");
        }
    else if (playerSelection == "rock" && computerSelection == "paper" ||
             playerSelection == "paper" && computerSelection == "scissors" ||
             playerSelection == "scissors" && computerSelection == "rock"){
                 computerSelectionCount++;
                 console.log("It's okay you will win next time! Cheer UP!");
             }
    else if (playerSelection == "rock" && computerSelection == "rock" ||
            playerSelection == "paper" && computerSelection == "paper" ||
            playerSelection == "scissors" && computerSelection == "scissors"){
                console.log("Goodgame! You tie! Shake Hands!");
            }
    else {
        console.log("Please type Rock, Paper or Scissors!");
    }
    console.log(playerSelectionCount);
    console.log(computerSelectionCount);
}


//5 round play

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerSelectionCount > computerSelectionCount) {
        console.log("Ok you're solid one! Overall you won!")
    }
    else if (playerSelectionCount == computerSelectionCount) {
        console.log("Well... Tie it's")
    }
    else {
        console.log("What can we say... I know it's hard to lose. But hey chin up!! Try better next time!")
    }
}
game();


    
