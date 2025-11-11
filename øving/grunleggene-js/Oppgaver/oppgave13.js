const form = document.getElementById("alder");
const tekst = document.getElementById("tekst");

nyTekst = function(tekstInhold,bildet="ingen") {
    div = document.createElement("div")
    div.class = "boks"
    tekst.appendChild(div);
    navn = document.createElement("p");
    navn.textContent = tekstInhold;
    div.appendChild(navn);
    if (bildet != "ingen") {
        img = document.createElement("img"); 
        img.src = bildet;
        img.width = 300;
        img.height = 200; 
        div.appendChild(img);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    tekst.innerHTML = ''
    const formData = new FormData(event.target);

    let brukerAlder = formData.get("brukerAlder");
    brukerAlder = parseInt(brukerAlder);
    
    if (brukerAlder >= 16) {
        nyTekst("Du er gammel nokk til å ta moped sertifikat","https://motornorway.no/media/catalog/product/cache/05e37a7f710ec2be47f8627641841ee3/r/s/rs50_main.jpg")
        if (brukerAlder >= 18) {
            nyTekst("Du er gammel nokk til å ta bil sertifikat","https://stimg.cardekho.com/images/carexteriorimages/630x420/Jaguar/F-Pace/10644/1755774688332/front-left-side-47.jpg?impolicy=resize&imwidth=480")
        }
        if (brukerAlder >= 21) {
            nyTekst("Du er gammel nokk til å ta lastebil sertifikat","https://www.rogalandbilutleie.no/wp-content/uploads/2014/05/mercedes-benz-atego-contract-hire-finance-hp-pcp-dealer-cheap-demo-test-drive-orwell-truck-van.jpg.webp")
        }
        if (brukerAlder >= 24) {
            nyTekst("Du er gammel nokk til å ta buss sertifikat","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJP4VMaq-7dLm2M8TL1VYkF2sYB4q0rPteoQ&s")
        }
    
    } else {
        nyTekst("Du er for ung for alle sertifikatene")
    }

});