let pendientes = 0;
let completadas = 0;

function iniciarSesion(){

let usuario =
document.getElementById("usuario").value;

if(usuario === ""){
alert("Ingrese un usuario");
return;
}

document.getElementById("loginScreen")
.classList.remove("activa");

document.getElementById("tareasScreen")
.classList.add("activa");

actualizarEstadisticas();

}

function agregarTarea(){

let texto =
document.getElementById("nuevaTarea").value;

if(texto === ""){
alert("Ingrese una tarea");
return;
}

let li = document.createElement("li");

li.innerHTML = `
<span>${texto}</span>

<div>
<button onclick="completarTarea(this)">
✔
</button>

<button onclick="eliminarTarea(this)">
🗑
</button>
</div>
`;

document.getElementById("listaPendientes")
.appendChild(li);

document.getElementById("nuevaTarea").value = "";

pendientes++;

actualizarEstadisticas();

}

function completarTarea(btn){

let tarea =
btn.parentElement.parentElement;

tarea.querySelector("span")
.classList.add("completada");

document.getElementById("listaCompletadas")
.appendChild(tarea);

pendientes--;
completadas++;

actualizarEstadisticas();

}

function eliminarTarea(btn){

let tarea =
btn.parentElement.parentElement;

if(
tarea.parentElement.id ===
"listaPendientes"
){
pendientes--;
}else{
completadas--;
}

tarea.remove();

actualizarEstadisticas();

}

function mostrarPerfil(){

document.getElementById("tareasScreen")
.classList.remove("activa");

document.getElementById("perfilScreen")
.classList.add("activa");

actualizarEstadisticas();

}

function volverTareas(){

document.getElementById("perfilScreen")
.classList.remove("activa");

document.getElementById("tareasScreen")
.classList.add("activa");

}

function cerrarSesion(){

document.getElementById("perfilScreen")
.classList.remove("activa");

document.getElementById("loginScreen")
.classList.add("activa");

}

function enfocarInput(){

document.getElementById("nuevaTarea")
.focus();

}

function actualizarEstadisticas(){

document.getElementById("pendientes")
.innerText = pendientes;

document.getElementById("completadas")
.innerText = completadas;

document.getElementById("perfilPendientes")
.innerText = pendientes;

document.getElementById("perfilCompletadas")
.innerText = completadas;

let total =
pendientes + completadas;

let porcentaje = 0;

if(total > 0){

porcentaje =
(completadas * 100) / total;

}

document.getElementById("progreso")
.style.width =
porcentaje + "%";

}