function selectRandom() {
  number = Math.floor(Math.random() * 3) + 1;
  if (number == 1) {
    return "rock";
  } else if (number == 2) {
    return "paper"
  } else if (number == 3) {
    return "scissors"
  }
}

function playRound(input) {
  computerChoice = selectRandom()
  if (input == "rock" && computerChoice == "rock") {
    resultsDiv.textContent = "Rock and rock tie."
  } else if (input == "rock" && computerChoice == "paper") {
    computerWinCounter++;
    computerWinCounterDiv.textContent = "Computer wins " + computerWinCounter
    resultsDiv.textContent = "You lose! Paper covers rock.";
  } else if (input == "rock" && computerChoice == "scissors") {
    playerWinCounter++;
    playerWinCounterDiv.textContent = "Player wins " + playerWinCounter
    resultsDiv.textContent = "You win! Rock smashes scissors.";
  }

  if (input == "paper" && computerChoice == "rock") {
    playerWinCounter++;
    playerWinCounterDiv.textContent = "Player wins " + playerWinCounter
    resultsDiv.textContent = "You win! Paper covers rock."    
  } else if (input == "paper" && computerChoice == "paper") {
    resultsDiv.textContent = "Paper and paper tie."
  } else if (input == "paper" && computerChoice == "scissors") {
    computerWinCounter++
    computerWinCounterDiv.textContent = "Computer wins " + computerWinCounter
    resultsDiv.textContent = "You lose! Scissors cut paper!";
  }

  if (input == "scissors" && computerChoice == "rock") {
    computerWinCounter++
    computerWinCounterDiv.textContent = "Computer wins " + computerWinCounter
    resultsDiv.textContent = "You lose! Rock smashes scissors!";
  } else if (input == "scissors" && computerChoice == "paper") {
    playerWinCounter++
    playerWinCounterDiv.textContent = "Player wins " + playerWinCounter
    resultsDiv.textContent = "You win! Scissor cut paper!";
  } else if (input == "scissors" && computerChoice == "scissors") {
    resultsDiv.textContent = "Scissors and scissors tie.";
  }
}

function playGame(input) {
  result = playRound(input)
  if (playerWinCounter == 5) {
    resultsDiv.textContent = "YOU WIN"
  } else if (computerWinCounter == 5) {
    resultsDiv.textContent = "YOU LOSE"
  } else {

  }
}

let playerWinCounter = 0;
let computerWinCounter = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', function (e) {
  playGame(this.id)
}));

const winCounterDiv = document.createElement('div')
const playerWinCounterDiv = document.createElement('div')
const computerWinCounterDiv = document.createElement('div')
const resultsDiv = document.createElement('div')
playerWinCounterDiv.textContent = "Player wins " + playerWinCounter
computerWinCounterDiv.textContent = "Computer wins " + computerWinCounter
resultsDiv.textContent = "Click an option to play!"
winCounterDiv.appendChild(playerWinCounterDiv)
winCounterDiv.appendChild(computerWinCounterDiv)
winCounterDiv.appendChild(resultsDiv)
counterDiv.appendChild(winCounterDiv)