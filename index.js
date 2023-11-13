document.getElementById('convert').onclick = tempCovert;
document.getElementById('reset').onclick = clearForm;

function tempCovert () {
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celsius = document.getElementById('celsius').value;

    if (fahrenheit != '') {
        celsius = (parseInt(fahrenheit) -32) /1.8;
    } else {
        fahrenheit = (parseInt(celsius) * 1.8) + 32;
    }

    document.getElementById('fahrenheit').value = parseInt(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseInt(celsius).toFixed(1);
}

function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
}
