// ROCK, PAPER, SCISSORS
// TOP
// JM 26/0CT/2025

// console.log("Hello from javascript file")


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

    // console.log("Computer choice number:", randNum);  // Added as part of debugging
    console.log(".  Computer choice:", computerChoice);
    line(".  Computer choice:", computerChoice);

    return computerChoice
}
// console.log("Your choice:", getComputerChoice())        // For debugging


// Get human choice
function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let humanChoice = "";

    while (true) {
        humanChoice = prompt("Choose wisely: rock, paper or scissors").toLowerCase().trim()

        if (validChoices.includes(humanChoice)) {   // if option is not valid, prompt again.
            console.log(".  Your choice:", humanChoice);
            line(".  Your choice:", humanChoice);
            return humanChoice;
        } else {
            alert("Invalid choice! Try again...")
        }
    }
}
// console.log("Your choice:", getHumanChoice())        // For debugging



function capitalize(str) {
    let firstLetter = str.charAt(0).toUpperCase()
    let remainingLetters = str.substring(1).toLowerCase()
    let Word = firstLetter + remainingLetters;
    return Word
}



// Logic to play entire game
function playGame() {
    clearLog();


    // Declare players score variables
    let humanScore = 0;
    let computerScore = 0;


    // Write Logic to play single round
    // Nested helper so it can update local scores
    function playRound(humanChoice, computerChoice) {
        // your code here!
        if (humanChoice === computerChoice) {
            console.log(".  It's a tie! Both of you chose", humanChoice);
            line(".  It's a tie! Both of you chose", humanChoice);
            alert("It's a tie! Both of you chose " + humanChoice);
        } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
            humanScore = humanScore + 1;
            console.log(".  You win!", capitalize(humanChoice), "beats", computerChoice);
            line(".  You win!", capitalize(humanChoice), "beats", computerChoice);
            alert("You win! " + capitalize(humanChoice) + " beats " + computerChoice);
        } else {
            computerScore = computerScore + 1;
            console.log(".  You lose!", capitalize(computerChoice), "beats", humanChoice);
            line(".  You lose!", capitalize(computerChoice), "beats", humanChoice);
            alert("You lose! " + capitalize(computerChoice) + " beats " + humanChoice);
        }
        console.log(".  Your score:", humanScore, "Computer score:", computerScore);
        line(".  Your score:", humanScore, "Computer score:", computerScore);
    }



    for (let round = 1; round <= 5; round++) {
        console.log("Round", round);
        line("\n\nRound", round);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("FINAL RESULT: YOU WIN!");
        line("\nFINAL RESULT: YOU WIN!");
    } else if (humanScore < computerScore) {
        console.log("FINAL RESULT: YOU LOSE!");
        line("\nFINAL RESULT: YOU LOSE!");
    } else {
        console.log("FINAL RESULT: IT'S A TIE!");
        line("\nFINAL RESULT: IT'S A TIE!");
    }
}


// // PLAY GAME (PER ORIGINAL INSTRUCTIONS)
// playGame();


// === Helpers to write to the page ===
const logEl = document.querySelector("#log");
function clearLog() {
    logEl.textContent = "";
}
function line(...parts) {
    const div = document.createElement("div");
    div.textContent = parts.join(" ");
    logEl.appendChild(div);
}

// Add functionality as a button

const playButton = document.querySelector("#Button");

playButton.addEventListener("click", () => {
    // Prevent double-clicks while the prompts are open
    playButton.disabled = true;
    try {
        playGame();
    } finally {
        playButton.disabled = false;
    }
});