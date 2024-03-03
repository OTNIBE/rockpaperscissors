'use strict'

let myChoice = prompt("Rock paper or scissors?"); // prompt user for rock, paper or scissors
myChoice.toLowerCase();

let compChoice = ["rock","paper","scissors"];
function compPick(){
    let i;
    i = Math.floor(Math.random()*3);
    return compChoice[i];
}

let computerPick = compPick();

if(myChoice == computerPick)
{
    alert("Draw: We both picked the same thing!");
}
else if(myChoice == "rock" && computerPick == "paper")
{
    alert(`You picked ${myChoice} and the computer picked ${computerPick} so computer wins!`);
}
else if(myChoice == "paper" && computerPick == "rock")
{
    alert(`You picked ${myChoice} and the computer picked ${computerPick} so you win!`);
}
else if(myChoice == "paper" && computerPick == "scissors")
{
    alert(`You picked ${myChoice} and the computer picked ${computerPick} so computer wins!`);
}
else if(myChoice == "scissors" && computerPick == "paper")
{
    alert(`You picked ${myChoice} and the computer picked ${computerPick} so you win!`);
}
else if(myChoice == "scissors" && computerPick == "rock")
{
    alert(`You picked ${myChoice} and the computer picked ${computerPick} so computer wins!`);
}