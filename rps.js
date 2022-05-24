// function; randomly chooses be between rock, paper, and scissors
'use script';
function computerPlay() {
 let r = Math.floor(Math.random() * 3)

    switch(r) {
    case 0:
      return 'rock'
      break;
    case 1:
      return 'scissors'
      break;
    case 2:
      return 'paper'
      break;
  }
}

// plays a single round of rock, paper, and scissors

function playRound(pSelection, cSelection) {
 // prompt play game
  if( pSelection == 'rock' || pSelection == 'Rock') {

    if(cSelection == 'paper') {

      return('paper beats rock')
    }
      else if (cSelection == 'scissors') {

        return('rock beats scissors')
      }
    else {
      return('rock ties with rock')
    }
  }
  else if (pSelection == 'paper' || pSelection == 'Paper') {

    if (cSelection == 'scissors'){
      return('scissors beats paper')
    }

    else if (cSelection == 'rock') {
      return('paper beats rock')
    }

   else {
      return('paper ties with paper')

   }


  }
 else if(pSelection == 'scissors' || pSelection == 'Scissors') {
   if (cSelection == 'rock') {
     return('rock beats scissors')

   }
   else if (cSelection == 'paper') {
     return('scissors beats paper')
   }
   else {
     return('scissors ties with scissors')
   }
 }




}

const pSelection = prompt("Rock? Paper? or Scissors?", '');
const cSelection = computerPlay()
console.log(playRound(pSelection, cSelection));

function game(){

  for(let i = 0; (i <= 6); i++)
    {
      playRound()
    }
}
game()
