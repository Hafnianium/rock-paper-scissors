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
    return "Rock and rock tie."
  } else if (input == "rock" && computerChoice == "paper") {
    computerWinCounter++;
    return "You lose! Paper covers rock.";
  } else if (input == "rock" && computerChoice == "scissors") {
    playerWinCounter++;
    return "You win! Rock smashes scissors.";
  }

  if (input == "paper" && computerChoice == "rock") {
    playerWinCounter++;
    return "You win! Paper covers rock.";
  } else if (input == "paper" && computerChoice == "paper") {
    return "Paper and paper tie."
  } else if (input == "paper" && computerChoice == "scissors") {
    computerWinCounter++;
    return "You lose! Scissors cut paper!";
  }

  if (input == "scissors" && computerChoice == "rock") {
    computerWinCounter++;
    return "You lose! Rock smashes scissors!";
  } else if (input == "scissors" && computerChoice == "paper") {
    playerWinCounter++;
    return "You win! Scissor cut paper!";
  } else if (input == "scissors" && computerChoice == "scissors") {
    return "Scissors and scissors tie.";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let input = prompt("Rock, paper, or scissors?")
    input = input.toLocaleLowerCase()
    result = playRound(input)
    alert(result + " " + `Player wins: ${playerWinCounter}, Computer wins: ${computerWinCounter}`)
  }
}

let playerWinCounter = 0;
let computerWinCounter = 0;

playGame()





