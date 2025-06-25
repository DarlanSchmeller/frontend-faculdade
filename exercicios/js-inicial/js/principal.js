// alert('Hello World');
console.log("Olá, mundo!");

var titulo = document.querySelector(".titulo"); // Returns the first element that is a descendant of node that matches selectors.
titulo.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = true;
  var alturaEhValido = true;

  console.log("Olá, mundo!");
  if (peso <= 0 || peso > 600) {
    console.log("Peso inválido");
    pesoEhValido = false;
  }

  if (altura <= 0 || altura > 3) {
    console.log("Altura inválido");
    alturaEhValido = false;
  }

  if (pesoEhValido && alturaEhValido) {
    var imc = calcularImc;
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura ou peso inválidos";
  }
}
