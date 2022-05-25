//  randomly chooses be between rock, paper, and scissors
let pScore = 0;
let cScore = 0;

game();
function computerPlay() {

 let randomizer = Math.floor(Math.random() * 3)

    switch(randomizer) {
    case 0:
      return 'rock' || 'r'
      break;
    case 1:
      return 'scissors' || 's'
      break;
    case 2:
      return 'paper' || 'p'
      break;
  }
}

// plays a single round of rock, paper, and scissors
// pS is short for player Selection.
// cS is short for Computer Selection

function playRound(pS, cS) {
 //Player choose scissors
  if(pS == 'scissors' || pS == 's' && cS == 'paper' ) {
    pScore++;
    console.log ('Player wins. Scissors beats Paper.')
  }
  //Player chooses paper
  else if (pS == 'paper' || pS == 'p' && cS == 'rock') {
   pScore++;
    console.log ('Player wins.Paper beats Rock')
  }
  else if (pS == 'rock' || pS == 'r' && cS == 'scissors') {
    pScore++;
    console.log ('Player wins. Rock beats Scissors')
  }
  else if (pS == cS) {
    console.log('Its a tie')
  }
  else {
   cScore++;
    console.log (`Computer wins. : $(cScore)  `)
  }
//
}

function game() {


  for(let round = 0; (round <= 5); round++)
    {
      let pS = prompt("Rock? Paper? or Scissors?", '');
      let cS = computerPlay()
      playRound(pS, cS)
      if (pScore == 3) {
        console.log('Player wins game.')
      }
        else if (cScore == 3)  {
        console.log('Computer wins game.')

        }

      }
      }


/*function gameWinner(){
    return pScore > cScore

}
*/
