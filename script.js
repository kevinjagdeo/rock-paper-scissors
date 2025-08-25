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
  return userChoice.toLowerCase();
}

//console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  //returns -1 for tie or invalid, 0 for human win and 1 for computer win

  if (humanChoice === "rock" && computerChoice === "paper") {
    alert("Computer wins! Paper beats rock.");
    return 1;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    alert("Tie!");
    return -1;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    alert("Human wins! Rock beats scissors.");
    return 0;
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    alert("Tie!");
    return -1;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    alert("Tie!");
    return -1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    alert("Computer wins! Rock beats scissors.");
    return 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    alert("Human wins! Scissors beats paper.");
    return 0;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    alert("Computer wins! Scissors beats paper.");
    return 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    alert("Human wins! Paper beats rock.");
    return 0;
  } else {
    alert("Invalid response!");
    return -1;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  while (round < 5) {
    const computer = getComputerChoice();
    const human = getHumanChoice();

    let roundWinner = playRound(human, computer);
    if (roundWinner === 0) {
      humanScore++;
    } else if (roundWinner === 1) {
      computerScore++;
    }
    alert("Scores are human:" + humanScore + " and computer:" + computerScore);
    round++;
  }

  alert(
    "FINAL SCORES ARE human:" + humanScore + " and computer:" + computerScore
  );
}

console.log(playGame());
