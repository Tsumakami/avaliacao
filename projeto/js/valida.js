let nome = $("#nome");
let email = $("#email");
let disponibilidade = $(".disponibilidade");


function validaNome(){
  nome.on("change", function(){
  let valor = nome.val();
  var verifyInt = /\d+/g;
  var teste = valor.split(/\S+/).length - 1;

  if(teste >= 2 && $(nome).val().match(verifyInt) == null){
    nome.removeClass("borda-vermelha");
    nome.addClass("borda-verde");

    return true;

  }else{
    nome.removeClass("borda-verde");
    nome.addClass("borda-vermelha");
    return false;
  }

});
}
validaNome();

function validaEmail(){
  email.on("change", function(){
  let valor = email.val();

  var parse_email = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])/;


  if(parse_email.exec(valor)){
    email.removeClass("borda-vermelha");
    email.addClass("borda-verde");

    return true;

  }else{
    email.removeClass("borda-verde");
    email.addClass("borda-vermelha");
    return false;
  }

});
}
validaEmail();

function mostraPersonalizar(){
  var disponibilidade = $(".disponibilidade");
  disponibilidade.on("click", function() {
    if($(this).val() == "personalizar"){
      $("#personalizar").attr("hidden", false);
    }else{
      $("#personalizar").attr("hidden", true);
    }
  });
}
mostraPersonalizar();

function mostraOutros(){
  var outro = $("#interesse4");
  outro.on("click", function(){
    if(outro.is(":checked")) {
      $("#interesseOutro").attr("hidden", false);
    } else {
      $("#interesseOutro").attr("hidden", true);
    }
  });

}
mostraOutros();

function habilita() {
  if (radio) {
    $('.botao').removeClass("disable");
  } else {
    $('.botao').addClass("disable");
  }
}

function sucesso(email){
  let formulario = $("form");
  let formulario1 =$("#formulariodps");
  let p = document.getElementById("campo1");
  formulario.addClass("formularioGugu");
  formulario1.removeClass("formularioGugu");
  let text = email.val();
  p.innerHTML = "Inscrição enviada. Aguarde novos detalhes em seu e-mail "+ text;
}
