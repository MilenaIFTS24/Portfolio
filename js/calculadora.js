function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

function borrar() {
    document.getElementById('pantalla').value = '';
}

function deshacer(){
    const valorPantalla = document.getElementById('pantalla').value;
    const nuevoValor = valorPantalla.slice(0, -1);
    document.getElementById('pantalla').value = nuevoValor;
}

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}


