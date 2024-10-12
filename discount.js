const MinNum = 1;
const MaxNum = 100;
const Answer = Math.floor(Math.random() * (MaxNum - MinNum + 1)); // Ensure the number is between 1 and 100
const victoryMessage = document.getElementById("victory");
let attempt = 0;
let guessing = true;

let Hint = document.getElementById("Hint");
let GuessNumBtn = document.getElementById("GuessNumBtn");
let AnswerNum = document.getElementById("AnswerNum");

GuessNumBtn.onclick = function () {
    if (guessing) {
        let guessedNumber = document.getElementById("guessedNumber").value;
        guessedNumber = Number(guessedNumber);

        if (isNaN(guessedNumber)) {
            Hint.textContent = "Kindly Enter a valid number, not symbols or text.";
        } else if (guessedNumber < MinNum || guessedNumber > MaxNum) {
            Hint.textContent = `Kindly Enter a number between ${MinNum} - ${MaxNum}.`;
        } else {
            attempt++;

            if (guessedNumber < Answer) {
                Hint.textContent = "This number is Lower than the number you are guessing.";
            } else if (guessedNumber > Answer) {
                Hint.textContent = "This number is Higher than the number you are guessing.";
            } else {
                guessing = false;
                victoryMessage.style.display = "block";
                AnswerNum.textContent = `AT LAST, YOU ARE CORRECT! ${Answer} is the correct number. It took you ${attempt} attempts.`;
            }
        }
    }
};
