class FormularioController{
  constructor(){
    this.nome = $("#nome");
    this.email = $("#email");
    this.disponibilidade = $(".disponibilidade");
    let interesse = $(".interesses");
    this.interesses= new Array();
    this.mensagem = $("#mensagem");

    for (var i=0;i<interesse.length;i++){
         if (interesse[i].checked == true){
            this.interesses.push(interesse[i].value);
         }
    }

  }
    geraInscricao(event){
      event.preventDefault();
      if(validaNome() && validaEmail()){
        let objeto = new InscricaoForm(
          this.nome.val(),
          this.email.val(),
          this.disponibilidade.val(),
          this.interesses,
          this.mensagem.val()
        );
      }
      return console.log(objeto);
    }


}
