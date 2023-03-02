/**
 * Returns Villain's choice of either Rock, Paper or Scissors using a randomly generated number x
 * @returns {string} Rock if x<0.33, Paper if x<0.66, else Scissor 
 */
function getComputerChoice() {
    let x = Math.random();
    if (x < 0.33) return "rock"
    if (x < 0.66) return "paper"
    return "scissor"
}


/**
 * Simulates a single round of Rock, Paper, Scissors and updates scores
 * @param {string} playerSelection - The choice of the player
 * @param {string} computerSelection - The choice of the villain
 * @returns {string} The result of the showdown
 */
function winner(playerSelection, computerSelection) {
    let playerScore = document.querySelector('#playerScore');
    let compScore = document.querySelector('#compScore');
    console.log(playerSelection);
    console.log(computerSelection);
    let result = "";
    if ((playerSelection == "rock" && computerSelection == "scissor") || 
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissor" && computerSelection == "paper")) {
                playerScore.textContent++;
        result = "You win!";
    } else {
        compScore.textContent++;
        result = "You lose!"
    }
    return result;
}


/**
 * Starts a round of Rock, Paper, Scissors, and calls winner() to calculate the winner with choices.
 */
function playRound() {
    let playerChoice = "", computerChoice = "";
    do {
        document.querySelector('#rock').addEventListener("click", () => {
            playerChoice = "rock";
        })
        document.querySelector('#paper').addEventListener("click", () => {
            playerChoice = "paper";
        })
        document.querySelector('#scissor').addEventListener("click", () => {
            playerChoice = "scissor";
        })
        computerChoice = getComputerChoice();
        console.log("test");
    } while(playerChoice != computerChoice);
    winner(playerChoice, computerChoice);
    return;
}


/**
 * Interacts with buttons to start/restart game.
 */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#start').addEventListener("click", () => {
        document.querySelector('#start').textContent = "Restart"
        document.querySelector('#result').textContent = "";
        document.querySelector('#compScore').textContent = 0;
        document.querySelector('#playerScore').textContent = 0;
        console.clear();
        for (let i = 0; i < 5; i ++) {
            playRound();
        }
        if(playerScore.textContent == 5) {
            document.querySelector('#result').textContent = "Player Wins!";
        } else if(compScore.textContent == 5) {
            document.querySelector('#result').textContent = "Computer Wins!";
        }
    })
});