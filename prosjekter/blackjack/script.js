// Funksjoner

let kortstokk = [];
let typer = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
let typekort = [2, 3, 4, 5, 6, 7, 8, 9, 10, "knekt", "dronning", "konge", "ess"];

// Generere kortstokk, laget som funksjon siden det er lettere å bruke med flere runder
function lagKortstokk() {
    for (let index = 0; index < typer.length; index++) {
        const type = typer[index];
        for (let index = 0; index < typekort.length; index++) {
            const kort = typekort[index];
            kortstokk.push([type, kort]);
        }
    }
}

// Lage kortene i html-en 
function lagKortHTML(type, tall, parrent) {
    div = document.createElement("div");
    div.classList.add("kort");

    parrent.appendChild(div);
    h1 = document.createElement("h1");
    h1.textContent = tall;
    h2 = document.createElement("h2");
    h2.innerHTML = type;
    if ((type == "&hearts;") || (type == "&diams;")) {
        h2.style.color = "red";
    }
    div.appendChild(h1);
    div.appendChild(h2);
};

// funksjon for å trekke et tilfeldig kort fra stokken, og fjerne kortet etterpå
function trekkKort(antall, arr) {
    for (let index = 0; index < antall; index++) {
        const randomIndex = Math.floor(Math.random() * kortstokk.length);
        const kort = kortstokk[randomIndex];
        arr.push(kort);
        kortstokk = kortstokk.filter(card => card !== kort);
    }
}

function total(arr) {
    let sum = 0;
    let ess = 0;
    for (let index = 0; index < arr.length; index++) {
        const tall = arr[index][1];
        if (typeof tall === "string") {
            if (tall == "ess") {
                ess++;
            } else {
                sum += 10;
            }
        } else {
            sum += tall;
        }
    }
    for (let index = 0; index < ess; index++) {
        if ((sum + 11) > 21) {
            sum += 1;
        } else {
            sum += 11;
        }

    }
    return sum;
}

// Genererer alt for dealeren etter spilleren har standet 
function getDealer(spillerHånd) {
    dealerHTML.innerHTML = "";
    trekkKort(2, dealer);
    genererKortFerdig(dealer, dealerHTML);
    while (true) {
        dealerHTML.innerHTML = "";
        genererKortFerdig(dealer, dealerHTML);
        if (total(dealer) == total(spillerHånd) && (total(dealer) == 21)) {
            return "uavgjort";
        } else if (total(dealer) <= total(spillerHånd)) {
            trekkKort(1, dealer);
        } else if (total(dealer) > 21) {
            return false;
        } else if (total(dealer) > total(spillerHånd)) {
            return true;
        }
    }
}

// Bruker funksjonen som genererer HTML kortene, og legger til alt annet som total og chips
function genererKortFerdig(arr, div) {
    if (arr == dealer) {
        let chipsHTML = document.createElement("span");
        chipsHTML.innerText = "chips: " + chips;
        chipsHTML.className = "chips";
        div.appendChild(chipsHTML);
    }

    for (let index = 0; index < arr.length; index++) {
        const kort = arr[index];
        lagKortHTML(kort[0], kort[1], div);
    }

    let totalHTML = document.createElement("span");
    totalHTML.innerText = total(arr);
    totalHTML.className = "total";
    div.appendChild(totalHTML);
}

// funkjson for hit for å gjøre det lettere å kunne ha hit på flere måter
function hit() {
    håndHTML.innerHTML = "";
    trekkKort(1, hånd);
    genererKortFerdig(hånd, håndHTML);
    if (total(hånd) > 21) {
        bett = 0;
        lagFullScreenPopup("Du tapte", "Du gikk bust", "rgba(219, 23, 23, 0.85)");
    }
}

// funkjson for stand for å gjøre det lettere å kunne ha hit på flere måter
function stand() {
    score = getDealer(hånd);
    if (score == "uavgjort") {
        chips += bett;
        bett = 0;
        lagFullScreenPopup("Uavgjort", "Begge fikk 21", "rgba(255, 234, 0, 0.85)");
    } else if (score == true) {
        bett = 0;
        lagFullScreenPopup("Du tapte", "Dealer fikk " + total(dealer), "rgba(219, 23, 23, 0.85)");
    } else {
        if (total(dealer) > 20) {
            chips = chips + (2 * bett);
            bett = 0;
            lagFullScreenPopup("Du vant!", "Dealer gikk bust", "rgba(0, 150, 0, 0.85)");
        } else {
            chips = chips + (2 * bett);
            bett = 0;
            lagFullScreenPopup("Du vant!", "Dealer fikk bare " + total(dealer), "rgba(0, 150, 0, 0.85)");
        }
    }
    dealerHTML.innerHTML = "";
    genererKortFerdig(dealer, dealerHTML);
}

// funkjson for bet for å gjøre det lettere å kunne ha hit på flere måter
function betClick() {
    const input = document.getElementById("betInput").valueAsNumber;
    if (!input || input <= 0) return;
    if (input > chips) {
        alert("Not enough chips!");
        return;
    }
    bett = input;
    chips -= bett;
    dealerHTML.innerHTML = '<span class="chips">Chips: ' + chips + '</span><div class="kort"></div><div class="kort"></div>';
    startRunde();
}

function maxBett() {
    const input = chips;
    if (!input || input <= 0) return;
    if (input > chips) {
        alert("Not enough chips!");
        return;
    }
    bett = input;
    chips -= bett;
    dealerHTML.innerHTML = '<span class="chips">Chips: ' + chips + '</span><div class="kort"></div><div class="kort"></div>';
    startRunde();
}



// lage en popup som forsvinner etter 1 sekund, funksjon laget ved hjelp chat
function lagFullScreenPopup(melding, undertekst, bgColor = "rgba(0,0,0,0.8)") {
    const popup = document.createElement("div");
    popup.className = "fullscreen-popup";
    popup.style.background = bgColor;

    const text = document.createElement("div");
    text.textContent = melding;
    popup.appendChild(text);

    const p = document.createElement("p");
    p.textContent = undertekst;
    popup.appendChild(p);
    setTimeout(() => {
        popup.remove();
        startRundeFørBett();
    }, 1000);
    document.body.appendChild(popup);
}

// Startere
// Gjøre spillet klart for å bette
function startRundeFørBett() {
    lagKortstokk();
    hånd = [];
    dealer = [];
    håndHTML.innerHTML = "";
    dealerHTML.innerHTML = '<span class="chips">Chips: ' + chips + '</span><div class="kort"></div><div class="kort"></div>';
    document.getElementById("hit").style.display = "none";
    document.getElementById("stand").style.display = "none";
    document.getElementById("bet").style.display = "inline-block";
    document.getElementById("maxBet").style.display = "inline-block";
    document.getElementById("betInput").style.display = "inline-block";
    document.getElementById("betInput").max = chips;
}

// Starte selve blackjack spillet
function startRunde() {
    document.getElementById("hit").style.display = "inline-block";
    document.getElementById("stand").style.display = "inline-block";
    document.getElementById("bet").style.display = "none";
    document.getElementById("maxBet").style.display = "none";
    document.getElementById("betInput").style.display = "none";
    trekkKort(2, hånd);
    genererKortFerdig(hånd, håndHTML);

    if (total(hånd) === 21) {
        chips += Math.floor(bett * 2.5);
        bett = 0;
        lagFullScreenPopup("NATURAL BLACKJACK!", "Du fikk 21 på første hånd!", "rgba(0, 150, 0, 0.85)");
    }

}

// Spill
const håndHTML = document.getElementById("hånd");
const dealerHTML = document.getElementById("dealer");

let chips = 100;
let bett = 0;

startRundeFørBett();

document.getElementById("betInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        betClick();
    }

});

document.getElementById("bet").addEventListener("click", betClick);
document.getElementById("maxBet").addEventListener("click", maxBett);
document.getElementById("hit").addEventListener("click", hit);
document.getElementById("stand").addEventListener("click", stand);

document.addEventListener("keydown", function (event) {
    console.log("Tasten " + event.key + " ble trykket ned.");

    if (event.key === "h") {
        if (bett != 0) {
            hit();
        }
    } else if (event.key === "s") {
        if (bett != 0) {
            stand();
        }
    } else if (event.key === "m") {
        if (bett == 0) {
            maxBett();
        }
    }
});