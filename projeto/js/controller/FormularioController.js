class FormularioController{
  constructor(){
    this.nome = $("#nome");
    this.email = $("#email");
    this.disponibilidade = $(".disponibilidade");
    let interesse = $(".interesses");
    this.interesses= new Array();
    this.mensagem = $("#mensagem");



    for (let i=0;i<interesse.length;i++){
         if (interesse[i].checked == true){
            this.interesses.push(interesse[i].value);
         }
    }

  }
    geraInscricao(event){
      event.preventDefault();
      console.log(getDisponibilidade(this.disponibilidade));
        let objeto = new InscricaoForm(
          this.nome.val(),
          this.email.val(),
          mostraDisponibilidade(),
          this.interesses,
          this.mensagem.val()
        );
      let meuJson = JSON.stringify(objeto);

      return console.log(meuJson);

    }


}
