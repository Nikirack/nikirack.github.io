const form = document.getElementById("skjekkeDifferanse");
const info = document.getElementById("text");

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let ganger = 10

function changeBackgroundColor() {
	document.body.style.backgroundColor = 'white';
	for (let i = 0; i < ganger; i++) {
		setTimeout(() => {
			document.body.style.backgroundColor = getRandomColor();
		}, 100 * i);
	}
	setTimeout(()=> {
		document.body.style.backgroundColor = 'white';
        form.classList.toggle('rotated');
	}, 100 * ganger + 10);
    
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    changeBackgroundColor()
    form.classList.toggle('rotated');
    
    const formData = new FormData(event.target);

    const forsteOrd = formData.get("forsteOrd");
    const andreOrd = formData.get("andreOrd");

    info.innerText = `Forskjellen av lengden på ordet ${forsteOrd} og ordet ${andreOrd} er ${Math.abs(forsteOrd.length-andreOrd.length)} siffre`
});
