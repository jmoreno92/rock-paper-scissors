console.log("Hello from javascript file")


// Computer choice function to return “rock”, “paper” or “scissors”.
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;

    let computerChoice = ""

    if (randNum === 1) {
        computerChoice = "rock"
    } else if (randNum === 2) {
        computerChoice = "paper"
    } else if (randNum === 3) {
        computerChoice = "scissors"
    } else {
        computerChoice = ""
    }

    return computerChoice
}


// Get human choice
function getHumanChoice() {

}


// Declare players score variables


// Logic to play single round
function playRound(humanChoice, computerChoice) {
    // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



// Logic to play entire game



function showMessage() {
    let userName = "Bob"; // declare a local variable

    let message = 'Hello, ' + userName; // Bob
    alert(message);
}

// // the function will create and use its own userName
// showMessage();



let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber);  // Added as part of debugging

console.log(getComputerChoice())