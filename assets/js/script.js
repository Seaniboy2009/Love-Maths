// wait for the dom to finish loading before running the game
// get the button elements and add event listiners to them

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
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
    } else if (gameType === "multiply") {

        displayMuiltplyQuestion(num1, num2);

    }else {
        alert(`Unkown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }

}

/** check if the users answer is the same as the calculated correct answer */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let correctAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === correctAnswer[0];

    if(isCorrect) {
        alert("Hey! you got it correct :)");
        incrementScore();
    } else {
        alert(`awwwww...... you answered ${userAnswer}, but the correct answer was ${correctAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(correctAnswer[1]);
}

/** gets the operands and the operator from the dom and returns the correct answer */
function calculateCorrectAnswer() {

    // parseint is converting the string to an int
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+") {

        return [operand1 + operand2, "addition"];
    } else if(operator === "x") {

        return [operand1 * operand2, "multiply"];
    } else {

        alert(`Unimplimented operator ${operator}`);
        throw `Unimplimented operator ${operator}. Aborting!`;
    }

}

/** get the correct score and add 1 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/** get the incorrect score and add 1 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractionQuestion() {

}

function displayMuiltplyQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";

}