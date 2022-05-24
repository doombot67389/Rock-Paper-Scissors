// function; randomly chooses be between rock, paper, and scissors
function computerPlay() {
 let r = Math.floor(Math.random() * 3)

    switch(r) {
    case 0:
      console.log('Rock');
      break;
    case 1:
      console.log('Scissors');
      break;
    case 2:
      console.log('Paper');
      break;
  }
}

// plays a single round of rock, paper, and scissors

function playRound(playerSelection, computerSelection) {
  //let pr = alert('Lets play a game.');
  //let w = confirm('You Won!!!!');
  //let l = confirm('You Lost.');

  switch(playerselection)
  case 'rock'


}

const playerSelection = 'rock' || 'Rock' //prompt("Rock? Paper? or Scissors?", '');
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection));
