let tall = Math.floor(Math.random() * 10)+1;
let gjenta = "Ja"

while (gjenta.toLowerCase == "ja") {
    gjett = prompt("Gjett et tall fra 1 til 10");
    if (gjett == tall) {
        alert("Du klarte å gjette tallet\nSvaret er "+String(tall));
        break
    }
    gjenta = (prompt("Du gjettet feil \nVil du gjette på nytt? \nJa eller Nei"));
}
