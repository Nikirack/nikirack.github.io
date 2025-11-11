// Komentrar
// Variabler

let antallLiv = 100;

// const NAVN = "Navn"
let navn = "Nei";
let alder = 17;

const PI = Math.PI;

let arrayBilder = ["bilde1.jpg","bilde2.jpg"];

// Skrive Ut
console.log("Mitt navn er " + navn + "!");
// console.log(`Mitt navn er ${navn} og jeg er ${alder} år gammel!`);

console.table(arrayBilder);

console.info(PI);

// alert(PI);

document.getElementById("utskrift").innerText = "Mitt navn er " + navn + "!";
// document.getElementById("utskrift").innerText += "Mitt navn er " + navn + "!";

let årstallNå = new Date().getFullYear();


// let alderBruker = prompt("Hvor gammel er du?");
// document.getElementById("utskriftAlder").innerText = "Du er født i " + ( årstallNå - alderBruker );

// if (alder == 17) {
//     alert("Du er")   
// } 
// else {
//     alert("Du er ikke")
// }

for (let index = 0; index < arrayBilder.length; index++) {
    console.log(arrayBilder[index]);
    
}

function siHei() {
    console.log("Hei!");
}

function siHeiTilNavn(navn) {
    console.log("Hei "+navn+"!");
}

siHei();
siHeiTilNavn("a");

document.body.style.backgroundColor = "red";
document.getElementById("utskrift").style.fontSize = "4rem"

console.log(Number.isInteger(3))
console.log(Number.isInteger(1.1))
console.log(parseInt(4.1))

let tekst3 = "1.72"; 
console.log(typeof(tekst3))
let tallFraTekst3 = Number(tekst3); 
console.log(typeof(tallFraTekst3))
console.log(tallFraTekst3)