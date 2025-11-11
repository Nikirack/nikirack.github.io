const katt = document.getElementById("katt");

let alder = prompt("Hva er din alder?");

if (parseInt(alder) > 17) {
    katt.classList.remove("blur");
} else {
    alert("Du er ikke gammel nok")
}