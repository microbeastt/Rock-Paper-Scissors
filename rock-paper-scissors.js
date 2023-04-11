let personChoice = prompt("What is your choice");

function getComputerChoice () {
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
}

getComputerChoice ();




