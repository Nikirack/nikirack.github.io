// Funksjoner

let kortstokk = [];
let typer = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
let typekort = [2, 3, 4, 5, 6, 7, 8, 9, 10, "knekt", "dronning", "konge", "ess"];

function lagKortstokk() {
    for (let index = 0; index < typer.length; index++) {
        const type = typer[index];
        for (let index = 0; index < typekort.length; index++) {
            const kort = typekort[index];
            kortstokk.push([type, kort]);
        }
    }
}
function lagKortHTML(type, tall, parrent) {
    div = document.createElement("div");
    div.classList.add("kort");

    parrent.appendChild(div);
    h1 = document.createElement("h1");
    h1.textContent = tall;
    h2 = document.createElement("h2");
    h2.innerHTML = type;
    div.appendChild(h1);
    div.appendChild(h2);
};

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


function genererKortFerdig(arr, div) {
    for (let index = 0; index < arr.length; index++) {
        const kort = arr[index];
        lagKortHTML(kort[0], kort[1], div);
    }

    let totalHTML = document.createElement("span");
    totalHTML.innerText = total(arr);
    totalHTML.className = "total";
    div.appendChild(totalHTML);
}

// funksjon laget ved hjelp chat
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

    const button = document.createElement("button");
    button.textContent = "Lukk";
    button.className = "popup-knapp";
    popup.appendChild(button);

    button.onclick = () => {
        popup.remove();
        window.location.reload();
    };
    document.body.appendChild(popup);
}


// Spill
const håndHTML = document.getElementById("hånd");
const dealerHTML = document.getElementById("dealer");

lagKortstokk();
let hånd = [];
let dealer = [];

trekkKort(2, hånd);
genererKortFerdig(hånd, håndHTML);

// console.log(kortstokk);
// console.log(hånd);

document.getElementById("hit").addEventListener("click", () => {
    håndHTML.innerHTML = "";
    trekkKort(1, hånd);
    genererKortFerdig(hånd, håndHTML);
    if (total(hånd) > 21) {
        lagFullScreenPopup("Du tapte", "Du gikk bust", "rgba(219, 23, 23, 0.85)");
    }
});

document.getElementById("stand").addEventListener("click", () => {
    score = getDealer(hånd);
    if (score == "uavgjort") {
        lagFullScreenPopup("Uavgjort", "Begge fikk 21", "rgba(255, 234, 0, 0.85)");
    } else if (score == true) {
        lagFullScreenPopup("Du tapte", "Dealer fikk " + total(dealer), "rgba(219, 23, 23, 0.85)");
    } else {
        if (total(dealer) > 20) {
            lagFullScreenPopup("Du vant!", "Dealer gikk bust", "rgba(0, 150, 0, 0.85)");
        } else {
            lagFullScreenPopup("Du vant!", "Dealer fikk bare " + total(dealer), "rgba(0, 150, 0, 0.85)");
        }
    }
    dealerHTML.innerHTML = "";
    genererKortFerdig(dealer, dealerHTML);
});