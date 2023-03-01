/**
 * Returns Villains choice of either Rock, Paper or Scissors using a randomly generated number x
 * @returns {string} Rock if x<0.33, Paper if x<0.66, else Scissor 
 */
function getComputerChoice() {
    let x = Math.random();
    if (x < 0.33) return "rock"
    if (x < 0.66) return "paper"
    return "scissor"
}


/**
 * Simulates a single round of Rock, Paper, Scissors
 * @param {string} playerSelection - The choice of the player
 * @param {string} computerSelection - The choice of the villain
 * @returns {string} The result of the showdown
 */
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection == computerSelection)return "It was a tie!"
    if ((playerSelection == "rock" && computerSelection == "scissor") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper"))  return "You win!";
    return "You lose!"
}


/**
 * Starts the game and carries out 5 rounds of Rock, Paper, Scissors, printing out the results
 */
function playGame() {
    let playerSelection = "";
    for(let i = 0; i < 5; i ++) {
        playerSelection = prompt("Round " + (i+1) + ": Wat u choose? (Rock, Paper, or Scissor)").toLowerCase();
        while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissor") {
            playerSelection = prompt("Still round " + (i+1) + ": You made a type (Rock, Paper, or Scissor)").toLowerCase();
        }
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}


/**
 * Interacts with buttons
 */
document.addEventListener("DOMContentLoaded", () => {

    if (document.querySelector('#rock')) {
        document.querySelector('#rock').addEventListener("click", () => {
           console.log("rock");
        })
    }
    if (document.querySelector('#paper')) {
        document.querySelector('#paper').addEventListener("click", () => {
           console.log("paper");
        })
    }
    if (document.querySelector('#scissor')) {
        document.querySelector('#scissor').addEventListener("click", () => {
           console.log("scissor");
        })
    }
});