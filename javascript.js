window.addEventListener("DOMContentLoaded", inicio, false);
window.onload = function () {
  document.getElementById("opcion1").onclick = triqui;
  document.getElementById("opcion2").onclick = reto;
};
var jugador = "X";
var contador = 0;
function inicio() {
  document.getElementById("aceptar").addEventListener("change", acepto, false);
  for (x = 1; x <= 9; x++) {
    document.getElementById(x).addEventListener("click", presion, false);
  }
}

function acepto() {
  document.getElementById("opcion1").style.display = "inline";
  document.getElementById("opcion2").style.display = "inline";

  document.getElementById("contenedor").style.display = "none";
}
function triqui() {
  document.getElementById("opcion1").style.display = "none";
  document.getElementById("opcion2").style.display = "none";

  document.getElementById("contenedor").style.display = "flex";
}

function presion(evt) {
  console.log(evt.target.value);
  evt.target.value = jugador;
  contador++;
  if (jugador == "X") {
    jugador = "O";
    document.getElementById("jugador").innerHTML = "Turno: O";
  } else {
    jugador = "X";
    document.getElementById("jugador").innerHTML = "Turno: X";
  }
  if (contador >= 3) {
    verificar();
  }
}
function verificar() {
  if (
    document.getElementById("1").value == "X" &&
    document.getElementById("2").value == "X" &&
    document.getElementById("3").value == "X"
  ) {
    ganadorX();
  } else if (
    document.getElementById("2").value == "X" &&
    document.getElementById("5").value == "X" &&
    document.getElementById("8").value == "X"
  ) {
    ganadorX();
  } else if (
    document.getElementById("4").value == "X" &&
    document.getElementById("5").value == "X" &&
    document.getElementById("6").value == "X"
  ) {
    ganadorX();
  } else if (
    document.getElementById("7").value == "X" &&
    document.getElementById("8").value == "X" &&
    document.getElementById("9").value == "X"
  ) {
    ganadorX();
  } else if (
    document.getElementById("9").value == "X" &&
    document.getElementById("6").value == "X" &&
    document.getElementById("3").value == "X"
  ) {
    ganadorX();
  } else if (
    document.getElementById("1").value == "X" &&
    document.getElementById("4").value == "X" &&
    document.getElementById("7").value == "X"
  ) {
    ganadorX();
  } else if (
    document.getElementById("1").value == "X" &&
    document.getElementById("5").value == "X" &&
    document.getElementById("9").value == "X"
  ) {
    ganadorX();
  } else if (
    document.getElementById("7").value == "X" &&
    document.getElementById("5").value == "X" &&
    document.getElementById("3").value == "X"
  ) {
    ganadorX();
  } else if (
    document.getElementById("1").value == "O" &&
    document.getElementById("2").value == "O" &&
    document.getElementById("3").value == "O"
  ) {
    ganadorO();
  } else if (
    document.getElementById("2").value == "O" &&
    document.getElementById("5").value == "O" &&
    document.getElementById("8").value == "O"
  ) {
    ganadorO();
  } else if (
    document.getElementById("4").value == "O" &&
    document.getElementById("5").value == "O" &&
    document.getElementById("6").value == "O"
  ) {
    ganadorO();
  } else if (
    document.getElementById("7").value == "O" &&
    document.getElementById("8").value == "O" &&
    document.getElementById("9").value == "O"
  ) {
    ganadorO();
  } else if (
    document.getElementById("9").value == "O" &&
    document.getElementById("6").value == "O" &&
    document.getElementById("3").value == "O"
  ) {
    ganadorO();
  } else if (
    document.getElementById("1").value == "O" &&
    document.getElementById("4").value == "O" &&
    document.getElementById("7").value == "O"
  ) {
    ganadorO();
  } else if (
    document.getElementById("1").value == "O" &&
    document.getElementById("5").value == "O" &&
    document.getElementById("9").value == "O"
  ) {
    ganadorO();
  } else if (
    document.getElementById("7").value == "O" &&
    document.getElementById("5").value == "O" &&
    document.getElementById("3").value == "O"
  ) {
    ganadorO();
  } else if (contador == 9) {
    empate();
  }
}
function again() {
  for (var a = 1; a <= 9; a++) {
    document.getElementById(a).value = "";
    document.getElementById("jugador").innerHTML = "";
    contador = 0;

    document.getElementById("jugador").style.fontSize = "20px";
    document.getElementById("jugador").style.color = "black";
    document.getElementById("jugador").style.fontWeight = "";
    acepto();
  }
}
function ganadorX() {
  document.getElementById("jugador").style.fontSize = "70px";
  document.getElementById("jugador").style.color = "blue";
  document.getElementById("jugador").style.fontWeight = "bolder";
  document.getElementById("jugador").innerHTML = "🎉🎊Ganaste X🎉🎊";
  setTimeout(function () {
    again();
  }, 1000);
}
function ganadorO() {
  document.getElementById("jugador").style.fontSize = "70px";
  document.getElementById("jugador").style.color = "red";
  document.getElementById("jugador").style.fontWeight = "bolder";
  document.getElementById("jugador").innerHTML = "🎉🎊Ganaste O🎉🎊";

  setTimeout(function () {
    again();
  }, 1000);
}
function empate() {
  document.getElementById("jugador").style.fontSize = "70px";
  document.getElementById("jugador").style.color = "grey";
  document.getElementById("jugador").style.fontWeight = "bolder";
  document.getElementById("jugador").innerHTML = "Empate 😔";
  setTimeout(function () {
    again();
  }, 1000);
}
