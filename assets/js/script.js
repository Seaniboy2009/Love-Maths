// wait for the dom to finish loading before running the game
// get the button elements and add event listiners to them

document.addEventListener("DOMContentLoaded", function () {
    
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
            }
        })
    }

    runGame("addition");
})

/** the main game loop, this runs then the game starts and when the submit button is pressed */
function runGame(gameType) {

    //creates two random numbers when run
    let num1 = Math.floor(Math.random() * 24) + 1;
    let num2 = Math.floor(Math.random() * 24) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unkown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractionQuestion() {

}

function displayMuiltplyQuestion() {

}