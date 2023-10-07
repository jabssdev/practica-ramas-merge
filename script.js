function agregarALaPantalla(value) {
  document.getElementById("pantalla").value += value;
}

function calcular() {
  const valorPantalla = document.getElementById("pantalla").value;
  const result = eval(valorPantalla);
  document.getElementById("pantalla").value = result;
}

function limpiarPantalla() {
  document.getElementById("pantalla").value = "";
}

function borrarUltimo() {
  const valorPantalla = document.getElementById("pantalla").value;
  document.getElementById("pantalla").value = valorPantalla.substring(
    0,
    valorPantalla.length - 1
  );
}
