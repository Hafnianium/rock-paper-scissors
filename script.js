function computerPlay() {
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
  computerChoice = computerPlay()
  if (input == "rock" && computerChoice == "rock") {
    return "Rock and rock tie."
  } else if (input == "rock" && computerChoice == "paper") {
    return "You lose! Paper covers rock."
  } else if (input == "rock" && computerChoice == "scissors") {
    return "You win! Rock smashes scissors."
  }

  if (input == "paper" && computerChoice == "rock") {
    return "You win! Paper covers rock."
  } else if (input == "paper" && computerChoice == "paper") {
    return "Paper and paper tie."
  } else if (input == "paper" && computerChoice == "scissors") {
    return "You lose! Scissors cut paper!"
  }

  if (input == "scissors" && computerChoice == "rock") {
    return "You lose! Rock smashes scissors!"
  } else if (input == "scissors" && computerChoice == "paper") {
    return "You win! Scissor cut paper!"
  } else if (input == "scissors" && computerChoice == "scissors") {
    return "Scissors and scissors tie."
  }
}

let input = prompt("Rock, paper, or scissors?")
input = input.toLocaleLowerCase()
result = playRound(input)
console.log(result)
alert(result)



