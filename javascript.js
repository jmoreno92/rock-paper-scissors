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

    console.log(randNum);  // Added as part of debugging

    return computerChoice
}


// Get human choice
function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let humanChoice = "";

    while (true) {
        humanChoice = prompt("Choose wisely: rock, paper or scissors").toLowerCase().trim()

        if (validChoices.includes(humanChoice)) {
            return humanChoice;
        } else {
            alert("Invalid choice! Try again...")
        }
    }
}
// if option is not valid, prompt again.


// Declare players score variables


// Logic to play single round
function playRound(humanChoice, computerChoice) {
    // your code here!
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);



// Logic to play entire game



function showMessage() {
    let userName = "Bob"; // declare a local variable

    let message = 'Hello, ' + userName; // Bob
    alert(message);
}

// // the function will create and use its own userName
// showMessage();



let randomNumber = Math.floor(Math.random() * 3) + 1;


console.log(getComputerChoice())

console.log(getHumanChoice())





const playButton = document.querySelector("#Button");
const log = document.querySelector("#log");

playButton.addEventListener("click", () => {
    let sign = prompt("What's your sign?");

    if (sign === null) {
        log.innerText = "OK, maybe next time.";
    } else if (sign.toLowerCase() === "") {
        log.innerText = "Don't be shy, enter your sign!";
    } else if (sign.toLowerCase() === "scorpio") {
        log.innerText = "Wow! I'm a Scorpio too!";
    } else {
        log.innerText = `${sign} is my favorite!`;
    }
});