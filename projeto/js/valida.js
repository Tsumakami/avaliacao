
let nome = $("#nome");
let email = $("#email");
/*
let disponibilidade = $(".disponibilidade");
let interesses = $(".interesses");



*/

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

  var parse_email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;


  if(valor.match(parse_email)){
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
/*
var objeto = new InscricaoForm();


var disponibilidade = $(".disponibilidade");
disponibilidade.on("click", function(){
  if(disponibilidade.is(":checked") == true) {
    $("#personalizar").attr("hidden", false);
  } else {
    $("#personalizar").attr("hidden", true);
  }
});

var outro = $("#outro");
outro.on("click", function(){
  if(outro.is(":checked") == true) {
    $("#Interesses").attr("hidden", false);
  } else {
    $("#Interesses").attr("hidden", true);
  }
});
*/
