import "./style.css";

let boton1 = document.getElementById("sumando1"); //variable de boton para incrementar valor
let boton2 = document.getElementById("restando1"); //variable de boton para decrementar valor
let boton3 = document.getElementById("reset"); //variable de boton para resetear valor
let input = document.getElementById("input"); //variable de input para ingresar valor
let numero = parseInt(document.getElementById("numero-turno")?.innerHTML || "0"); //variable del numero en el DOM

      
function sumar() {
  let result = ++numero;                               //variable con el resultado
  const numeroTurnoElement = document.getElementById("numero-turno");
  if (numeroTurnoElement) {
    numeroTurnoElement.innerHTML = result.toString().padStart(2, "0"); //Muestra resultado de la funcion en DOM con padStart
  }
}

function restar() {
  let result = --numero;                               //variable con el resultado
  const numeroTurnoElement = document.getElementById("numero-turno");
  if (numeroTurnoElement) {
    numeroTurnoElement.innerHTML = result.toString().padStart(2, "0"); //Muestra resultado de la funcion en DOM con padStart
  }
}

function reset(){
  numero = 0; 
  let numeroTurnoElement = document.getElementById("numero-turno");                           
  if (numeroTurnoElement) {
    numeroTurnoElement.innerHTML = numero.toString().padStart(2, "0"); //Muestra resultado de la funcion en DOM con padStart
  }
}

function inputNumber() {
  if (input instanceof HTMLInputElement) {
    const inputValue = input.value; 
    const numeroTurnoElement = document.getElementById("numero-turno");
    if (numeroTurnoElement && inputValue) {
      numeroTurnoElement.innerHTML = inputValue.toString().padStart(2, "0"); // Aplicar el valor en el DOM con padStart
    }
  }
}

if (boton1 !== null && boton1 !== undefined) {
  boton1.addEventListener("click", sumar);
}

if (boton2 !== null && boton2 !== undefined) {
  boton2.addEventListener("click", restar);
}

if (boton3 !== null && boton3 !== undefined) {
  boton3.addEventListener("click", reset);
}

if (input !== null && input !== undefined) {
  input.addEventListener("change", inputNumber);
}


