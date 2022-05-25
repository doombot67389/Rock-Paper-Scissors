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
    console.log ('Scissors beats Paper.')
    console.log(`Player : ${pScore}` )
    console.log(`Computer : ${cScore}`)

  }
  //Player chooses paper
  else if (pS == 'paper' || pS == 'p' && cS == 'rock') {
   pScore++;
    console.log (`Paper beats Rock.`)
    console.log(`Player : ${pScore}` )
    console.log(`Computer : ${cScore}`)
  }
  //Player chooses rock
  else if (pS == 'rock' || pS == 'r' && cS == 'scissors') {
    pScore++;
    console.log (`Rock beats Scissors.`)
    console.log(`Player : ${pScore}` )
    console.log(`Computer : ${cScore}`)

  }
  else if (pS == cS) {
    console.log('Its a tie')
  }
  else {
   cScore++;
    console.log (`Computer gains ${cScore} point.`)
    console.log(`Player : ${pScore}` )
    console.log(`Computer : ${cScore}`)

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
        console.log('You Win!!!! :)')
      }
        else if (cScore == 3)  {
        console.log('You lose. :(')

        }

      }
      }
