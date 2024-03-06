const player= document.getElementById("playerChoice");
const computer= document.getElementById("computerChoice");
const playerScore= document.getElementById("playerScore");
const computerScore= document.getElementById("computerScore");
const resultd= document.getElementById("result");
const choices=['rock' , 'paper','scissor'];
let pScore=0;
let cScore=0;

function playGame(playerChoice){
    const computerChoice= choices[Math.floor(Math.random()*3)];
   let result="";

   if(computerChoice===playerChoice){
    result="IT'S A TIE ";
   }
   else{
    switch(playerChoice){
        case "rock":
         result=computerChoice==="scissor"?"YOU WIN !": "YOU LOSE !";
         break;
        case "paper":
         result=computerChoice==="rock"?"YOU WIN !": "YOU LOSE !";
         break;
        case "scissor":
         result=computerChoice==="paper"?"YOU WIN !": "YOU LOSE !";
         break;
    }
   }
  player.textContent=`Player : ${playerChoice}`;
  computer.textContent=`Computer : ${computerChoice}`;
   resultd.textContent=result;

 resultd.classList.remove("green","red");
   switch(result){
    case "YOU WIN !":
        resultd.classList.add("green");
        pScore++;
        playerScore.textContent=pScore;
        break;
     case "YOU LOSE !":
        resultd.classList.add("red");
        cScore++;
        computerScore.textContent=cScore;
        break;
   }

}