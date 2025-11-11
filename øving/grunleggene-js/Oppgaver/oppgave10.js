const fyllIn = document.getElementById("svar");

let svar = prompt("Skriv om du liker eller ikke liker noe");
svar = svar.toLowerCase();

if (svar.includes("jeg liker") || svar.includes("eg likar")) {
    if (svar.includes("ikke") || svar.includes("ikkje")) {
        svar = svar.replace("jeg liker", "").replace("eg likar", "").replace("ikkje", "").replace("ikke", "");
        fyllIn.innerText = "negativ "+svar;
        console.log("negativ");
    } else {
        svar = svar.replace("jeg liker", "").replace("eg likar", "");
        fyllIn.innerText = "positiv "+svar;
        console.log("positiv");
    }
}
