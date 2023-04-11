
//* Person choice for game  *//
let personChoice = prompt("What is your choice? rock, paper or scissors").toLowerCase();

function personChoiceConveter (Str) {
    if (personChoice == "rock") {
       let newXY = 0;
       console.log (newXY);
    }
        else if (personChoice == "paper"){
        let newXY = 1;
        console.log (newXY);
    }
    else {
        let newXY = 2;
        console.log (newXY);
     }
}

personChoiceConveter();







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



