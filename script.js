// Variables Globales
let listaTareas = [];

// Funciones
function agregarTarea() {
  const tarea = prompt("Ingrese una tarea");
  if (tarea) {
    listaTareas.push({ tarea, completado: false });
    renderizarTareas();
    guardarTareas();
  }
}

function completarTarea(index) {
  listaTareas[index].completado = !listaTareas[index].completado;
  renderizarTareas();
  guardarTareas();
}

function eliminarTarea(index) {
  listaTareas.splice(index, 1);
  renderizarTareas();
  guardarTareas();
}

function renderizarTareas() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  listaTareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completado;
    checkbox.addEventListener("click", () => completarTarea(index));
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(tarea.tarea));
    if (tarea.completado) {
      li.classList.add("completed");
    }
    const botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "Eliminar";
    botonEliminar.addEventListener("click", () => eliminarTarea(index));
    li.appendChild(botonEliminar);
    ul.appendChild(li);
  });
}

function guardarTareas() {
  localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
}

function cargarTareas() {
  const tareasGuardadas = localStorage.getItem("listaTareas");
  if (tareasGuardadas) {
    listaTareas = JSON.parse(tareasGuardadas);
    renderizarTareas();
  }
}

// Eventos
document.querySelector("#agregarTarea").addEventListener("click", agregarTarea);

// Inicialización
cargarTareas();

// Ejemplo de uso de fetch
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error(error));

// Ejemplo de uso de SweetAlert
Swal.fire({
  title: 'Bienvenido',
  text: 'Este es un ejemplo completo de JavaScript, HTML y CSS con todos los elementos requeridos',
  icon: 'success',
  confirmButtonText: 'Entendido'
});
