function mensaje() {
    alert('Esto es un mensaje.');
    document.getElementById('saludo').value = "Esto es un saludo.";
}

const mensaje2 = () => {
    alert('Esto es otro mensaje.');
    document.getElementById('saludo').value = 'Esto es otro saludo.';
}

function suma(a, b) {
    return a + b;
}

const suma2 = (a, b) => a + b;