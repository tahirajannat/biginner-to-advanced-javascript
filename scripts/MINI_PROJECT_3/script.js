//finding elements
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const guessingNumber = form.querySelector('#guessingNumber');
const checkBtn = form.querySelector('#checkButton');
const resultText = cardBody.querySelector('.resultText');
const remainingAttempts = cardBody.querySelector('.remainingAttempts');
const lostWinsMessage = document.createElement('p');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log('guessing number', guessingNumber.value);
    // checkResult(guessingNumber.value);
    if (attempts > totalAttempts) {
        guessingNumber.disabled = true;
        checkBtn.disabled = true;
    } else {
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML = `Remaining Attempts: ${
            totalAttempts - attempts
        }`;
    }
    attempts++;

    guessingNumber.value = '';
});
function checkResult(guessingNumber) {
    const randomNumber = getRandomNumber(5);

    if (guessingNumber == randomNumber) {
        resultText.innerHTML = `you have won`;
        totalWons++;
    } else {
        resultText.innerHTML = `you have lost; random number was: ${randomNumber}`;
        totalLosts++;
    }
    lostWinsMessage.innerHTML = `Won: ${totalWons}, Losts: ${totalLosts}`;
    lostWinsMessage.classList.add('large-text');
    console.log(lostWinsMessage);
    cardBody.appendChild(lostWinsMessage);
}

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}
