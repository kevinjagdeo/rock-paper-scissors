let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNum = Math.random();

  if (randomNum < 1 / 3) {
    return "rock";
  } else if (randomNum < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

//console.log(getComputerChoice());

function getHumanChoice() {
  let userChoice = prompt("Rock, paper, or scissors?");
  return userChoice;
}

//console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  //const humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    return "Computer wins! Paper beats rock.";
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    return "Tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    return "Human wins! Rock beats scissors.";
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    return "Tie!";
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    return "Tie!";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    return "Computer wins! Rock beats scissors.";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    return "Human wins! Scissors beats paper.";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    return "Computer wins! Scissors beats paper.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanChoice += 1;
    return "Human wins! Paper beats rock.";
  } else {
    return "Invalid response!";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
