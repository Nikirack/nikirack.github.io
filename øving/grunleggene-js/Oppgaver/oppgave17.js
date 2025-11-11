let bilder = [
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg",
    "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
    "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg",
    "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg",
    "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg",
    "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg",
    "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    "https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg"
];

let index = 0;

let bildetElement = document.getElementById("bildet");
let forgeBildet = document.getElementById("forgeBildet");
let nesteBild = document.getElementById("nesteBildetImg");

let nesteBildeKnapp = document.getElementById("nesteBildetKnapp");
let forrigeBildeKnapp = document.getElementById("forgeBildetKnapp");

bildetElement.src = bilder[index];
forgeBildet.src = bilder.at(-1);
nesteBild.src = bilder[index + 1];

nesteBildeKnapp.addEventListener("click", neste);

forrigeBildeKnapp.addEventListener("click", tilbake);

document.addEventListener("keydown", function (event) {
    console.log("Tasten " + event.key + " ble trykket ned.");
    if (event.key == "ArrowRight") {
        neste();
    }
    if (event.key == "ArrowLeft") {
        tilbake();
    }
});

function neste() {
    index += 1;
    if (index >= bilder.length) { index = 0; }
    nesteBildet();
}

function tilbake() {
    index -= 1;
    if (index < 0) { index = bilder.length - 1; }
    nesteBildet();
}

function nesteBildet() {
    bildetElement.src = bilder[index];
    forgeBildet.src = bilder.at(index - 1);
    if (index + 1 >= bilder.length) {
        nesteBild.src = bilder[0];
    } else {
        nesteBild.src = bilder[index + 1];
    }
}