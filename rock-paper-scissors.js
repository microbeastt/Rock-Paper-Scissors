
//* Person choice for game  *//
let personChoice = prompt("What is your choice? rock, paper or scissors").toLowerCase();

//* Computer Choice below *//
let randoM = Math.floor(Math.random() * 3);

let newXY = 0;

//* Person choice converts str to number *//
function personChoiceConveter () {
    if (personChoice == "rock") {
       let newXY = 0;
    }
        else if (personChoice == "paper"){
       let newXY = 1;
    }
    else {
        let newXY = 2;
     }
}

personChoiceConveter();

//* Game engine that picks winner and prints text *//


function gameEngine () {
    if (newXY == 0 && randoM == 0) {
        console.log("Tie")
    }
        else if (newXY == 0 && randoM == 1) {
        console.log("Computer Wins")
    }
    else {
        console.log("Should be player win");
    }
}

gameEngine ();



//* Function for computer's choice in game prints out results*//
/*function getComputerChoice () {
    let randoM = Math.floor(Math.random() * 3);
    if (randoM == 0) {
        console.log("Rock");
    }
    else if (randoM == 1) {
        console.log("Paper");
    }
    else  {
        console.log("Scissors");
    }
}*/




