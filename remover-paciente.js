var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(){
  var alvooEvento = event.target;
  var paiDoAlvo = alvooEvento.parentNode; //TR = paciente = remover
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
      paiDoAlvo.remove();
  },500);




//dá pra fazer tudo numa linha (só concatenar tudo), mas vou deixAR ASSIM por questões didáticas
});


// pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function(){
//     console.log("fui clicado");
//     this.remove(); //this é uma palavra reservada, atrelada ao "dono" do evento
//   })
// });
