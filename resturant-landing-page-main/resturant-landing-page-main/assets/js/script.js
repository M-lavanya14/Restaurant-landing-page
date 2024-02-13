// Countdown timer
const timerElement = document.getElementById('timer');
const totalTime = 10 * 60; // 10 minutes in seconds
let timeLeft = totalTime;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerElement.textContent = `Time Left: ${minutes}:${seconds}`;

    if (timeLeft === 0) {
        clearInterval(timerInterval);
        timerElement.textContent = 'Time Left: 00:00';
        // Perform any action when the timer reaches zero
    }

    timeLeft--;
}

const timerInterval = setInterval(updateTimer, 1000);

// Call to action
document.querySelector('.btn-sign-up').addEventListener('click', function() {
    // Perform action when sign up button is clicked
    alert('Sign up button clicked!');
});

// Slide up form after 15 seconds
setTimeout(function() {
    document.querySelector('.slide-up-form').classList.add('slide-up');
}, 15000);
