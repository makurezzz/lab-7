const elementos = [
    { id: "primero", nombre: "tarea1", completada: true },
    { id: "segundo", nombre: "tarea2", completada: true },
    { id: "tercero", nombre: "tarea3", completada: true },
    { id: "cuarto", nombre: "tarea4", completada: true },
    { id: "quinto", nombre: "tarea5", completada: true },
    { id: "sexto", nombre: "tarea6", completada: true },
    { id: "septimo", nombre: "tarea7", completada: true },
    { id: "octavo", nombre: "tarea8", completada: true },
    { id: "noveno", nombre: "tarea9", completada: true },
    { id: "decimo", nombre: "tarea10", completada: true }
];

elementos.forEach(elemento => {
    const elementoDOM = document.getElementById(elemento.id);
    const { nombre, completada } = elemento;

    if (!completada) {
        elementoDOM.innerHTML = `<input type='checkbox' id='${elemento.id}_checkbox' class='activado' onchange='toggleCheck(this)'/> <label for='${elemento.id}_checkbox'>${nombre}</label>`;
    } else {
        elementoDOM.innerHTML = `<input type='checkbox' id='${elemento.id}_checkbox' class='desactivado' onchange='toggleCheck(this)' checked/> <label for='${elemento.id}_checkbox'>${nombre}</label>`;
    }
});

function toggleCheck(checkbox) {
    if (checkbox.checked) {
        checkbox.classList.remove('activado');
        checkbox.classList.add('desactivado');
    } else {
        checkbox.classList.remove('desactivado');
        checkbox.classList.add('activado');
    }
}


//

const contador = document.getElementById("contador");
const inputs = document.querySelectorAll('input[type="checkbox"]');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        let activados = document.querySelectorAll('input[type="checkbox"]:checked').length;
        let desactivados = inputs.length - activados;
        contador.innerHTML = "La cantidad de tareas completadas es de " + desactivados + " y la cantidad de tareas sin completar es de " + activados + ".";
    });
});
