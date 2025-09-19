let numeroAlAzar = Math.floor(Math.random() * 100) + 1;
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;

function chequearResultado() {
    intentos++;
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor, introduce un número entero entre 1 y 100.'
        mensaje.style.color = 'black';
        return;
    }

    if (numeroIngresado === numeroAlAzar) {
        mensaje.textContent = '¡Felicitaciones! ¡Adivinaste el número!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        let botonNuevo = document.createElement('button');
        botonNuevo.textContent = 'Empezar de nuevo';
        botonNuevo.addEventListener('click', () => {
            intentos = 0;
            intento.textContent = intentos;
            numeroAlAzar = Math.floor(Math.random() * 100) + 1;
            numeroEntrada.disabled = false;
            numeroEntrada.value = '';
            mensaje.textContent = '¡A jugar!';
            mensaje.style.color = 'black';
        })
        document.body.appendChild(botonNuevo);

        return;
    }

    if (numeroIngresado < numeroAlAzar) {
        mensaje.textContent = '¡Más alto, el número es mayor a ' + numeroIngresado + '!';
        mensaje.style.color = 'red';
        return;
    }

    if (numeroIngresado > numeroAlAzar) {
        mensaje.textContent = '¡Más bajo, el número es menor a ' + numeroIngresado + '!';
        mensaje.style.color = 'red';
        return;
    }
}