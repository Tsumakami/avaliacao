let nome = $("#nome");
let email = $("#email");
let disponibilidade = $(".disponibilidade");
/*
let interesse = $(".interesses");
let interesses= new Array();
let mensagem = $("#mensagem");



function geraJSON(objeto){
  let myjson = JSON.stringfy(objeto);

  return myjson;
}

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

function mostraDisponibilidade(){
  var disponibilidade = $("input[type='radio']");
  disponibilidade.on("click", function() {
    if($(this).val() == "personalizar"){
      $("#personalizar").attr("hidden", false);
      return $(this).val();
    }else{
      $("#personalizar").attr("hidden", true);
      return $(this).val();
    }

  });
}
mostraDisponibilidade();

function getDisponibilidade(disp){
  console.log(disp.length);
  for(let i =0; i < disp.length;i++){
    console.log(disp[i].value);
    if(disp[i] == true){
      if(disp[i].value == "personalizar"){
        return $("#personalizar").value;
      }else{
        return disp[i].value;
      }
    }else{
      return;
    }
  }
}

function mostraOutros(){
  var outro = $("#outro");
  outro.on("input", function(){
    if(outro.is(":checked") == true) {
      $("#Interesses").attr("hidden", false);
    } else {
      $("#Interesses").attr("hidden", true);
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
