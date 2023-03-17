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
 * Simulates a single round of Rock, Paper, Scissors and updates scores
 * @param {string} playerSelection - The choice of the player
 * @param {string} computerSelection - The choice of the villain
 * @returns {string} The result of the showdown
 */
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection)
  if (playerSelection == computerSelection) {
    console.log("It was a tie!");
  } else if ((playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")) {
    document.querySelector('#playerScore').textContent++;
    console.log("You win!");
  } else {
    document.querySelector('#compScore').textContent++;
    console.log("You lose!");
  }
  checkWinner();
}


/**
 * Checks the score to see if a winner has appeared
 */
function checkWinner() {
  if (document.querySelector('#playerScore').textContent != 5 && document.querySelector('#compScore').textContent != 5) return;

  if (document.querySelector('#playerScore').textContent == 5) {
    document.querySelector('#results').textContent = "Player wins!";
  } else {
    document.querySelector('#results').textContent = "Computer wins!";
  }
  document.querySelectorAll('button').forEach(button => { button.removeEventListener('click', playerChoice) });
  return;
}


/**
 * Interacts with buttons
 */
document.querySelector('#reload').addEventListener("click", () => {
  location.reload();
});
document.querySelectorAll('button').forEach(button => { button.addEventListener('click', playerChoice) });

function playerChoice(e) {
  let playerSelection = e.target.id;
  playRound(playerSelection, getComputerChoice());
}