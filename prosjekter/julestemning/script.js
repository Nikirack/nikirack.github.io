const gaver = [
    "https://meny.no",
    "https://vlfk.itslearning.com",
    "https://store.epicgames.com/no",
    "https://store.steampowered.com",
    "https://chess.com",
    "https://no.china-embassy.gov.cn/eng",
    "https://teams.microsoft.com/v2/",
    "https://www.rema.no",
    "https://fortnite.com",
    "https://roblox.com",
    "https://store.steampowered.com/app/730/CounterStrike_2/",
    "https://nrk.no",
    "https://vg.no",
    "https://fn.no",
    "https://finn.no",
    "https://yr.no",
    "https://hypixel.net",
    "https://no.wikipedia.org/wiki/Spesial:Tilfeldig",
    "https://helsenorge.no",
    "https://ssb.no",
    "https://skatteetaten.no",
    "https://nhi.no",
    "https://coop.no",
    "https://chatgpt.com"
];

let antallSnø = 0
let emoji = ""

console.log(gaver.length);

function snowflake() {
    if (emoji == "") {return} else {
    const s = document.createElement("div");
    s.classList.add("snow");
    s.textContent = emoji;
    antallSnø ++

    const size = Math.random() * 15 + 10;
    s.style.fontSize = size + "px";

    const left = Math.random() * 100 + "vw";
    const duration = Math.random() * 5 + 3;

    s.style.left = left;
    s.style.animationDuration = duration + "s";

    const opacity = 1 - ((duration - 3) / 5) * 0.6;
    s.style.opacity = opacity;

    document.body.appendChild(s);

    s.addEventListener("animationend", function(event){
        antallSnø -= 1;
        s.remove;
    });}
}

setInterval(snowflake, 200);

function createCalendar() {
    const cal = document.getElementById("calendar");
    const today = new Date();
    const currentDay = today.getDate();

    for (let day = 1; day <= 24; day++) {
        const box = document.createElement("div");
        box.classList.add("day");
        box.textContent = day;

        if (day > currentDay) {
            box.classList.add("locked");
        } else {
            box.addEventListener("click", () => openDay(box));
        }

        cal.appendChild(box);
    }
}

function openDay(el) {
    if (el.classList.contains("locked")) return;
    el.classList.add("open");

    let url = gaver[Number(el.textContent) - 1];
    window.open(url, '_blank').focus();
}

createCalendar();

function updateCountdown() {
    const countdownEl = document.getElementById("countdown");
    const now = new Date();

    const nextDay = new Date();
    nextDay.setDate(now.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);

    const diff = nextDay - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.textContent = `Neste luke åpner om ${hours}t ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown(); 
const emojiInput = document.getElementById("emojiInput");

emojiInput.addEventListener("input", (e) => {
    const val = e.target.value;
    if (val.length > 0) {
        emoji = val;
    }
});
