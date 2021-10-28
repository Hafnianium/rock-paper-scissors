function computerPlay() {
  number = Math.floor(Math.random() * 3) + 1;
  if (number == 1) {
    return "Rock";
  } else if (number == 2) {
    return "Paper"
  } else if (number == 3) {
    return "Scissors"
  }
}

function playRound(input) {
  computerChoice = computerPlay()
  if (input == "Rock" && computerChoice == "Rock") {
    return "Rock and Rock tie."
  } else if (input == "Rock" && computerChoice == "Paper") {
    return "You lose! Paper covers Rock."
  } else if (input == "Rock" && computerChoice == "Scissors") {
    return "You win! Rocks smashes Scissors."
  }

  if (input == "Paper" && computerChoice == "Rock") {
    return "You win! Paper covers Rock."
  } else if (input == "Paper" && computerChoice == "Paper") {
    return "Paper and Paper tie."
  } else if (input == "Paper" && computerChoice == "Scissors") {
    return "You lose! Scissors cut Paper!"
  }

  if (input == "Scissors" && computerChoice == "Rock") {
    return "You lose! Rock smashes Scissors!"
  } else if (input == "Scissors" && computerChoice == "Paper") {
    return "You win! Scissor cut Paper!"
  } else if (input == "Scissor" && computerChoice == "Scissors") {
    return "Scissors and Scissors tie."
  }
}