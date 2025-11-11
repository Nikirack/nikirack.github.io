const knapp = document.getElementById("knapp");

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
	}, 100 * ganger + 10)
}

knapp.addEventListener("click", () => {
	changeBackgroundColor();
})

console.log(Math.random());
console.log(Math.random()); 
console.log(Math.floor(Math.random() * 6) + 10); 

