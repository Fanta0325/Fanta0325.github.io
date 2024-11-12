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
