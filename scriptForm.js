 // Obtén los elementos relevantes
 var estadoSelect = document.getElementById("estado");
 var estadoActual = document.getElementById("estadoActual");

 // Agrega un oyente de eventos al elemento <select>
 estadoSelect.addEventListener("change", function () {
     // Obtén el valor seleccionado
     var estadoSeleccionado = estadoSelect.value;

     // Actualiza el contenido del <span> con el valor seleccionado
     estadoActual.textContent = estadoSeleccionado;
 });