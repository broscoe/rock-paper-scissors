const form = document.getElementById("form");

form.addEventListener("submit", onFormSubmit);

const results = document.getElementById("results");
const computerPick = document.getElementById("computerPick");
const playerPick = document.getElementById("playerPick");

function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  // console.log(dataObject)
  let winner = play(dataObject);
  console.log(winner);
  
  results.textContent = `${winner}`;
  playerPick.textContent = `You choose ${dataObject.rockPaperScissor}`;
  
}


function play(dataObject) {
  // console.log(dataObject)
  let result;
  console.log(`Your choice is ${dataObject.rockPaperScissor}`);
  let computerPlay = Math.ceil(Math.random() * 3);
  if(computerPlay === 3) {
    computerPlay = "Scissors"
  } else if(computerPlay === 2) {
    computerPlay = "Paper"
  } else{
    computerPlay = "Rock"
  }
  console.log(`The computer's choice is ${computerPlay}`);
  if (dataObject.rockPaperScissor === "Rock" && computerPlay === "Scissors") {
    result = "You win!";
  } else if (dataObject.rockPaperScissor === "Paper" && computerPlay === "Rock") {
    result = "You win!";
  } else if (dataObject.rockPaperScissor === "Scissors" && computerPlay === "Paper") {
    result = "You win!";
  } else if (dataObject.rockPaperScissor === computerPlay) {
    result = "Draw!";
   } else {
     result = "Try again!";
   }
  computerPick.textContent = `The Computer choose ${computerPlay}`;
  return result;
};