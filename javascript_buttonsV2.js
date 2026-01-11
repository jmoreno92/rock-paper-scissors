// ROCK, PAPER, SCISSORS
// TOP
// JM 11/Jan/2026

console.log("Hello from javascript file")


// Declare players score variables
let humanScore = 0;
let computerScore = 0;

// Select the buttons and the log
const buttons = document.querySelectorAll('.buttons button');
const logEl = document.querySelector("#log");
const resetButton = document.querySelector("#reset");


// Helper to write to page
// Modify the helper to accept a CSS class name so you can differentiate the types of messages.
function line(text, className = "") {
    const div = document.createElement("div");
    div.textContent = text;
    if (className) div.classList.add(className);
    logEl.appendChild(div);

    // Auto-scroll to the bottom of the log
    logEl.scrollTop = logEl.scrollHeight;
}


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
    line(`.  Computer choice: ${computerChoice}`);
    return computerChoice
}
// console.log("Your choice:", getComputerChoice())        // For debugging


function updateScoreDisplay() {
    document.querySelector("#human-score").textContent = humanScore;
    document.querySelector("#computer-score").textContent = computerScore;
}

// Function to reset the game state
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScoreDisplay();
    logEl.innerHTML = ""; // Clear the log
    resetButton.style.display = "none"; // Hide reset button
    buttons.forEach(btn => btn.disabled = false); // Re-enable game buttons
    line("New game started! Good luck.");
}



function capitalize(str) {
    let firstLetter = str.charAt(0).toUpperCase()
    let remainingLetters = str.substring(1).toLowerCase()
    let Word = firstLetter + remainingLetters;
    return Word
}






// Write Logic to play single round
function playRound(humanChoice) {

    const computerChoice = getComputerChoice();
    let resultMessage = "";
    let statusClass = "";

    if (humanChoice === computerChoice) {
        resultMessage = `🤝 Tie! Both chose ${humanChoice}.`;
        statusClass = "tie";

    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        updateScoreDisplay();
        resultMessage = `✅ Win! ${capitalize(humanChoice)} beats ${computerChoice}.`;
        statusClass = "win";
    } else {
        computerScore++;
        updateScoreDisplay();
        resultMessage = `❌ Lose! ${capitalize(computerChoice)} beats ${humanChoice}.`;
        statusClass = "lose";
    }
    line(resultMessage, statusClass);
    // line(`Score -> Player: ${humanScore} | Computer: ${computerScore}`, "score-update");


    checkWinner();
}


// 4. Check for a winner (first to 5 or just display running total)
function checkWinner() {
    if (humanScore === 5) {
        line("GAME OVER: YOU ARE THE CHAMPION!");
        endGame();
    } else if (computerScore === 5) {
        line("GAME OVER: THE COMPUTER WON!");
        endGame();
    }
}

function disableButtons() {
    buttons.forEach(btn => btn.disabled = true);
}

function endGame() {
    disableButtons();
    resetButton.style.display = "inline-block"; // Show the reset button
}

// 5. Add Event Listeners to buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // The id of the button (rock, paper, or scissors) is our playerSelection
        playRound(button.id);
    });

});


// Attach reset logic to the button
resetButton.addEventListener("click", resetGame);