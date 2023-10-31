 
 var estadoSelect = document.getElementById("estado");
 var estadoActual = document.getElementById("estadoActual");

 
 estadoSelect.addEventListener("change", function () {
     var estadoSeleccionado = estadoSelect.value;
     estadoActual.textContent = estadoSeleccionado;
 });