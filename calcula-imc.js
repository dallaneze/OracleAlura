 var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var nome = paciente.querySelector(".info-nome").textContent;
  //fazer isso aqui é a mesma coisa que fazer o da altura, só que feito numa linha só
  var peso = paciente.querySelector(".info-peso").textContent;

  var tdAltura = paciente.querySelector(".info-altura ");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");
  var imc = peso/(altura*altura);

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
    //aqui vc seleciona a sua linha inteira (a <tr>), que é o que o "paciente" está me dizendo
    // o classList.add adiciona uma classe CSS que vai modificar o estilo da linha
  }

  if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
    //paciente.style.backgroundColor = "lightcoral";
    //não é bom alterar elementos de estilo usando o Javascript. Devemos usar o CSS.
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(1);
  }
}

// titulo.addEventListener("click", function() {
//   console.log("olarrrrrr");
// });
//
// function mostraMensagem(){
//   console.log("olá! eu fui clicado");
// }

function calculaImc(peso, altura){
   var imc = 0;
   imc = peso/(altura*altura);
   return imc.toFixed(2);
}
