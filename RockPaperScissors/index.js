// variables
let playerScore = 0;
let computerScore = 0;
const playerOptions = document.querySelectorAll(".playerImg");
const computerOptions = document.querySelectorAll(".pcImg");
const pcSc = document.getElementById('pcScore');
const playerSc = document.getElementById('playerScore');
const battleResult = document.getElementById('battleResult');


function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3)
  if(choice == 0)
    return "Rock";
  else if (choice == 1)
    return "Paper";
  else 
    return "Scissors"; 
}

function playRound(playerSelection, computerSelection) {
  let result;
  computerOptions.forEach(option => {
    option.classList.remove('active');
  })
  playerOptions.forEach(option => {
    option.classList.remove('active');
  })

  if(playerSelection == "Rock" && computerSelection == "Rock"){
    result = "Egalite fraternite!";
  }
  else if(playerSelection == "Rock" && computerSelection == "Paper"){
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
  else if(playerSelection == "Rock" && computerSelection == "Scissors")
  {
    result = `You Won! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }
  else if(playerSelection == "Paper" && computerSelection == "Rock")
  {
    result = `You Won! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }
  else if(playerSelection == "Paper" && computerSelection == "Paper")
  {
    result = "Egalite fraternite!";
  }
  else if(playerSelection == "Paper" && computerSelection == "Scissors")
  {
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
  else if(playerSelection == "Scissors" && computerSelection == "Rock")
  {
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
  else if(playerSelection == "Scissors" && computerSelection == "Paper")
  {
    result = `You Won! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }
  else if(playerSelection == "Scissors" && computerSelection == "Scissors")
  {
    result = "Egalite fraternite!";
  }

  pcSc.innerHTML = computerScore;
  playerSc.innerHTML = playerScore;
  battleResult.innerHTML = result;
  document.getElementById('pc' + computerSelection).classList.add('active');
  document.getElementById('player' + playerSelection).classList.add('active');
}

function getPlayerChoice(playerSelection) {
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}

function resetScore(){
  playerScore = 0;
  computerScore = 0;
  pcSc.innerHTML = computerScore;
  playerSc.innerHTML = playerScore;
  battleResult.innerHTML = 'Choose your weapon!';
  computerOptions.forEach(option => {
    option.classList.remove('active');
  })
  playerOptions.forEach(option => {
    option.classList.remove('active');
  })
}


