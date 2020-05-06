const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error');
  }
}

const getComputerChoice = () => {
  let computerChoiceDigit = Math.floor((Math.random() * 3))
  switch (computerChoiceDigit) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It is a TIE in this game';
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins';
      } else {
        return 'User wins';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins';
      } else {
        return 'User wins';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins';
      } else {
        return 'User wins';
      }
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('Paper');
  let computerChoice = getComputerChoice();
  console.log(`User's choice - ${userChoice}`);
  console.log(`Computer choice - ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

 playGame();


