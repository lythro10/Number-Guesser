let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


//generate random number
const generateTarget = () => {
    return Math.floor(Math.random() * 10) ;
  }
  
  //math.abs calculates who is closer to the secret Guess which is automated
  const compareGuesses = (humanGuess, computerGuess, secretGuess) => {
    const humanDiffrence = Math.abs( secretGuess- humanGuess);
    const computerDiffrence = Math.abs(secretGuess-computerGuess );

    if(humanDiffrence === computerDiffrence){
        return 'Human wins'
    }else if (humanDiffrence < computerDiffrence){
        return true;
    }else if(computerDiffrence < humanDiffrence){
        return false;
    }
  
  }
console.log(compareGuesses(4,5,10))

// update the winners
const updateScore = winner =>{
  if(winner === 'human'){
    humanScore++;
  }else if (winner === 'computer'){
    computerScore ++;
  }
}

const advanceRound = () => currentRoundNumber ++;