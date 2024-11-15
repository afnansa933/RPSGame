  // creating the score object
  const score = {
    wins: 0,
    loses: 0,
    ties: 0
};

// Listening to the storage event to check for saved score
window.addEventListener('storage', updateScore());

// generate the computer move in arandom manner
function generateComputerMove(userMove)
{
    // Using the random() function a random value
    // between 0 and 1
    const randomNumber = Math.random();
    // creating the computer move variable
    let computerMove = '';

    //Checking the random value based on the previous assumbtion
    if (randomNumber >= 0 && randomNumber <1/3)
{
    computerMove = "Rock";
}
else if (randomNumber >= 1/3 && randomNumber <2/3)
{
    computerMove ="Paper";
}
else 
//else if 
{
    computerMove = "Scissors";
}



// displaying both moves
//  console.log(`User: ${userMove} --- Computer: ${computerMove}`);

//calling the compare moves method
compareChoices(userMove, computerMove);

}

function compareChoices(userChoice, computerChoice)
{

let theResult = '';

if(userChoice === computerChoice){
    theResult = "Tie.";

}
else if(userChoice === "Rock" && computerChoice === "Paper"){
    theResult = "You lose."
}
else if(userChoice === "Rock" && computerChoice === "Scissors"){
    theResult = "You win."
}

else if(userChoice === "Paper" && computerChoice === "Rock"){
    theResult = "You lose."
}

else if(userChoice === "Paper" && computerChoice === "Scissors"){
    theResult = "You lose."
}
else if(userChoice === "Scissors" && computerChoice === "Rock"){
    theResult = "You lose."
}
else if(userChoice === "Scissors" && computerChoice === "Paper"){
    theResult = "You Win."
}

if(theResult === "You win."){
    score.wins += 1;
}
else if (theResult === "You lose."){
    score.loses += 1;
}
else if (theResult === "Tie."){
    score.ties += 1;
}

// Using localStorage to maintain the current score
// since localStorage works with text data we need to serialize the score object
localStorage.setItem('Score', JSON.stringify(score));

// Calling the display result function
displayResult(theResult, userChoice, computerChoice);



 }

function ResetCounter(){
score.wins = 0;
score.loses = 0;
score.ties = 0;

//Deleting the available stored score
localStorage.removeItem("Score");
// Informing the user with the current score
displayResult();

console.log(`Score has been reset. This is a fresh start.\nWins: ${score.wins} - Loses: ${score.loses} - Ties: ${score.ties}`);

}

// Creating a score update function
function updateScore(e){
// Getting data from the localStorage and converting them back to JavaScript object
let newScore = JSON.parse(localStorage.getItem('Score'));
// checking if the newScore is empty
if(newScore=== null){
    alert("There is no saved data..");

}
else{
    alert("Saved score available..");
    score.wins = newScore.wins;
    score.loses = newScore.loses;
    score.ties = newScore.ties;
}
}

function displayResult(result="New Game", userStep="No Moves", computerStep="No Moves"){
   // display the comparison result
// linking to the pparagraph elements
let theResultDisplay = document.querySelector(".jsResult");
let theMovesDisplay = document.querySelector(".jsMoves");

let theScoreDisplay = document.querySelector(".jsScore");

// populate the text inside paragraph element
theResultDisplay.innerHTML = result;
theMovesDisplay.innerHTML = `You
    <img src="./image/${userStep}Final.png" class="moveIcon">
    <img src="./image/${computerStep}Final.png" class="moveIcon">
    Computer.`;

//`You picked: ${userStep}. Computer picked: ${computerStep}. `;


theScoreDisplay.innerHTML = `Wins: ${score.wins} - Loses: ${score.loses} - Ties: ${score.ties}`;

//  console.log(`You picked: ${userChoice}. Computer picked: ${computerChoice}. Result: ${theResult}\n
//  Wins: ${score.wins} - Loses: ${score.loses} - Ties: ${score.ties}`);

}