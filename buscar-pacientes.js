var botaoAdd = document.querySelector("#buscar-pacientes");

botaoAdd.addEventListener("click", function(){

  var xhr = new XMLHttpRequest();

  //qual tipo de requisiçao vamos fazer e pra onde
  //GET é uma requisiçao comum
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");

    if(xhr.status == 200){  //isso aqui serve pra evitar os erros. O status quando a requisiçao da certo é 200

      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);

      });
    }else{  //aqui ele vai mostrar no console qual o erro que deu e printar sobre o que é esse erro
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
    }
  });
    //enviar a requisiçao
  // JSON (sigla de JavaScript Object Notation)
  xhr.send();
});
