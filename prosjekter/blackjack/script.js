let kortstokk = [];
let typer = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
let typekort = [2, 3, 4, 5, 6, 7, 8, 9, 10, "knekt", "dronning", "konge"]; //, "ess"

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
    for (let index = 0; index < arr.length; index++) {
        const tall = arr[index][1];
        if (typeof tall === "string") {
            sum += 11;
        } else {
            sum += tall;
        }
    }
    return sum;
}

function spillerKort() {
    for (let index = 0; index < hånd.length; index++) {
        const kort = hånd[index];
        lagKortHTML(kort[0], kort[1], håndHTML);
    }

    let totalHTML = document.createElement("span")
    totalHTML.innerText = total(hånd)
    totalHTML.id = "total"
    håndHTML.appendChild(totalHTML)
}

const håndHTML = document.getElementById("hånd");


lagKortstokk();
let hånd = [];

trekkKort(2, hånd);
spillerKort()

// console.log(kortstokk);
// console.log(hånd);



document.getElementById("hit").addEventListener("click", () => {
    håndHTML.innerHTML = ""
    trekkKort(1,hånd)
    spillerKort()
    if (total(hånd) > 20) {alert("Du tapte")}
})

document.getElementById("stand").addEventListener("click", () => {

})