let startButton = document.getElementById("start_button");
let pauseButton = document.getElementById("pause_button");
let resumeButton = document.getElementById("resume_button");
let stopButton = document.getElementById("stop_button");
let countLabel = document.getElementById("count_label");

let timer = null;
let counter = 0;
let alarmSound = new Audio('alarm.mp3');

function updateDisplay () {
    countLabel.textContent = counter;
    let hours = String(Math.floor(counter/3600)).padStart(2, '0');
    let minutes = String(Math.floor((counter % 3600) / 60)).padStart(2, '0');
    let seconds = String(counter % 60).padStart(2, '0');
    countLabel.textContent = `${hours}: ${minutes}: ${seconds}`;
}

function startTime () {
    if (timer === null) {
        timer = setInterval (() => {
            counter ++
            updateDisplay();
            console.log (counter);

            if (counter === 3600) {
                alarmSound.play()
            }

        }, 1000);
    }

}

function pauseTime () {
    clearInterval(timer)
    timer = null;
}

function resumeTime () {
    startTime();
}

function stopTime () {
    clearInterval(timer);
    timer = null;
    counter = 0;
    updateDisplay();
}