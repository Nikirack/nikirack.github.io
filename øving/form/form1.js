const skjema = document.getElementById('skjema');

skjema.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(skjema);
    const data = Object.fromEntries(formData.entries());
    
    console.log(data);
});