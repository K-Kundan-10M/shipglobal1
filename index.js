// script.js

// variables to store random number and number of attempts
let randomNumber;
let attempts = 0;

// Get references to the HTML that will be updated during the game
const NumberGuessElement = document.getElementById("NumberGuess");
const userInput = document.getElementById("user-input");
const feedbackElement = document.getElementById("feedback");
const attemptsElement = document.getElementById("attempts");
const errorMessageElement = document.getElementById("error-message");

// Function to start or restart the game
function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number
    attempts = 0; // Reset the number of attempts
    userInput.value = ""; // will clr user ip 
    feedbackElement.textContent = "Guess the number between 1 and 100!"; //feedback to the user
    attemptsElement.textContent = "Attempts: 0"; // number of atmpt
    errorMessageElement.textContent = ""; // clr any error mssgs 
}

// Function to validate the user's input
function validateInput(guess) {
    if (isNaN(guess) || guess === "")  
        {
        return "Please enter a valid number."; // Check if the input is a valid number and not empty
    }
    if (guess < 1 || guess > 100) { // Check if the input is within the specified range
        return "Please enter a number between 1 and 100."; 
    }
    return null; // Return null if the input is valid
}

// Adding an event listener to the "Submit" button
document.getElementById("submit-btn").addEventListener("click", function() {
    const userGuess = parseInt(userInput.value); // Get the user's guess and convert it to an integer
    const error = validateInput(userGuess); // Validate the user's input

    if (error) {
        errorMessageElement.textContent = error;  // If there's an error, display it and exit the function
        return;
    }

    errorMessageElement.textContent = "";  // Clear any previous error messages
    attempts++; // increased the attempt count
    attemptsElement.textContent = `Attempts: ${attempts}`;

    if (userGuess > randomNumber) {
        feedbackElement.textContent = "Too high! Try again.";
    } else if (userGuess < randomNumber) {
        feedbackElement.textContent = "Too low! Try again."; //feedback based on the user's guess
    } else {
        feedbackElement.textContent = `Correct! You guessed it in ${attempts} attempts.`;
    }
});

// Adding an event listener to "Restart Game" button
document.getElementById("restart-btn").addEventListener("click", startGame);

// Start the game when page loads
startGame();
