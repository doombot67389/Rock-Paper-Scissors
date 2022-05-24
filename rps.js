//  randomly chooses be between rock, paper, and scissors
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

  if( pSelection == 'rock' || pSelection == 'Rock' || pSelection == 'r') {

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
  else if (pSelection == 'paper' || pSelection == 'Paper' || pSelection == 'p') {

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
 else if(pSelection == 'scissors' || pSelection == 'Scissors' || pSelection == 's') {
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

//console.log(playRound(pSelection, cSelection));
game()

//display amount of games the player has won
//
//
function game() {


  for(let i = 1; (i < 5); i++)
    {
      if( i % 1 ===  0 ) {
        const pSelection = prompt("Rock? Paper? or Scissors?", '');
        const cSelection = computerPlay()

        console.log(playRound(pSelection, cSelection))
      }
      else if ( i == 6){

          return ('Game has ended')
        }

    }

}
