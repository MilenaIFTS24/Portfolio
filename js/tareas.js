let lista = document.getElementById('listaTareas');
let nuevaTarea = document.getElementById('nuevaTarea');

function agregarTarea() {
    let nuevoItem = document.createElement('li');
    nuevoItem.textContent = nuevaTarea.value;
    lista.appendChild(nuevoItem);
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = '❌';
    botonEliminar.addEventListener('click', () => {
        lista.removeChild(nuevoItem);
        botonEliminar.remove();
    })
    lista.appendChild(botonEliminar);

    nuevaTarea.value = '';
}
