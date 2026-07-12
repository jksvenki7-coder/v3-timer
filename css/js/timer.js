// V3 Timer Challenge

let time = 60;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

function updateTimer() {
    if (timer) {
        timer.innerHTML = time;
    }

    if (time <= 0) {
        clearInterval(countdown);

        let result = Math.random() < 0.1;

        if (result) {
            window.location.href = "winner.html";
        } else {
            window.location.href = "loser.html";
        }
    }

    time--;
}

let countdown;

if (startBtn) {
    startBtn.addEventListener("click", function () {
        startBtn.disabled = true;
        countdown = setInterval(updateTimer, 1000);
    });
}
