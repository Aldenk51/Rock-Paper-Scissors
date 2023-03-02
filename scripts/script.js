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
            (playerSelection == "scissor" && computerSelection == "paper")) {
        document.querySelector('#playerScore').textContent ++;
        return "You win!";
    }
    document.querySelector('#compScore').textContent++;
    return "You lose!"
}


/**
 * Interacts with buttons
 */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#reload').addEventListener("click", () => {
        location.reload();
    })
    document.querySelector('#rock').addEventListener("click", () => {
       console.log(playRound("rock", getComputerChoice()));
    })
    document.querySelector('#paper').addEventListener("click", () => {
       console.log(playRound("paper", getComputerChoice()));
    })
    document.querySelector('#scissor').addEventListener("click", () => {
       console.log(playRound("scissor", getComputerChoice()));
    })
});