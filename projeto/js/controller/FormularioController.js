class FormularioController{
  constructor(){
    this.nome = $("#nome");
    this.email = $("#email");
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
      let disponibilidades = $(".disponibilidade");
      event.preventDefault();
      //console.log(this.disponibilidade);
      for(let i=0;i < disponibilidades.length;i++){
        if(disponibilidades[i].checked){
          if(disponibilidades[i].value == "personalizar"){
            this.disponibilidade = $("#personalizar").val();
          }else{
            this.disponibilidade = disponibilidades[i].value;
          }
        }
      }

      let objeto = new InscricaoForm(
          this.nome.val(),
          this.email.val(),
          this.disponibilidade,
          this.interesses,
          this.mensagem.val()
        );
      let meuJson = JSON.stringify(objeto);

      return console.log(meuJson);

    }


}
