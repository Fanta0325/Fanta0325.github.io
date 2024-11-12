document.getElementById("menu-toggle").addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("menu-open");
});

function showSection(sectionId) {
    document.querySelectorAll(".section").forEach((section) => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}

async function showUpdateNote() {
    const response = await fetch('update.txt');
    const text = await response.text();
    document.getElementById("updateNoteContent").innerText = text;
    document.getElementById("updateNoteModal").classList.add("active");
}

function closeUpdateNote() {
    document.getElementById("updateNoteModal").classList.remove("active");
}

function pickNumbers() {
    const min = parseInt(document.getElementById("rangeMin").value, 10);
    const max = parseInt(document.getElementById("rangeMax").value, 10);
    const quantity = parseInt(document.getElementById("quantity").value, 10);

    const numbers = [];
    while (numbers.length < quantity) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    document.getElementById("numberResult").innerText = `뽑힌 숫자: ${numbers.join(", ")}`;
}

// 스탑워치 및 타이머 기능
let stopwatchInterval, timerInterval, timerTimeLeft;

function startStopwatch() {
    let startTime = Date.now();
    stopwatchInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        document.getElementById("stopwatchDisplay").innerText = formatTime(elapsed);
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopStopwatch();
    document.getElementById("stopwatchDisplay").innerText = "00:00:00";
}

function startTimer() {
    timerTimeLeft = parseInt(document.getElementById("timerInput").value, 10) * 1000;
    timerInterval = setInterval(() => {
        timerTimeLeft -= 1000;
        document.getElementById("timerDisplay").innerText = formatTime(timerTimeLeft);
        if (timerTimeLeft <= 0) {
            stopTimer();
            alert("타이머 종료");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    document.getElementById("timerDisplay").innerText = "00:00:00";
}

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0
