//  randomly chooses be between rock, paper, and scissors
'use script';

game()

let pScore = 0;
let cScore = 0;

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
// pS is short for player Selection.
// cS is short for Computer Selection

function playRound(pS, cS) {

  //Player chooses rock
  if( pS == 'rock' || pS == 'Rock' || pS == 'r') {

    if(cS == 'paper') {

      cScore++;
      return('paper beats rock.')
    }
      else if (cS == 'scissors') {
         pScore++
        return('rock beats scissors.')
      }
    else {

      return('rock ties with rock.')
    }
  }

  //Player chooses paper
  else if (pS == 'paper' || pS == 'Paper' || pS == 'p') {

    if (cS == 'scissors'){

      cScore++;
      return('scissors beats paper.')
    }

    else if (cS == 'rock') {
      pScore++;
      return('paper beats rock.')
    }

   else {

     return('paper ties with paper.')
   }

  }

  //Player chooses Scissors
  else if(pS == 'scissors' || pS == 'Scissors' || pS == 's') {
   //Player loses
   if (cS == 'rock') {

     cScore++
     return('rock beats scissors.')

   }
    //Player wins
   else if (cS == 'paper') {

     pScore++;
     return('scissors beats paper.')

   }
    //Player ties
    else {

      return('scissors ties with scissors.')
   }
 }


}

function game() {

  for(let i = 1; (i <= 5); i++)
    {
      if( i % 1 ===  0 ) {

        let pS = prompt("Rock? Paper? or Scissors?", '');
        let cS = computerPlay()

        return playRound(pS, cS)
      }
      else {
        return gameScore()
      }
     
    }

}

function gameScore() {

  if (pScore > cScore) {

    return ('Player has won')
  }
  else if (cScore > pScore) {

    return ('Computer has won')
  }


   }
