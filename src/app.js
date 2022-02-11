import { LightningElement } from "lwc";

export default class App extends LightningElement {
  //criar varios atributos  
  nome="Joao Bonini";
  telefone="(18)99865-5436";
  cpf="543-134-631-23";
  idade=19;
  email="joaopedronunesbonini@hotmail.com";
  insta="https://www.instagram.com/joaopbonini/" ;
  linkedin="https://www.linkedin.com/in/joao-pedro-bonini-70546b1ab/";

  visible=true;
  /* 
    uso de variavel da classe dentro do metodo
    this.variavel

    trocar valor de visible -> false
  */
  trocardiv(){
    //altera o valor de visible para false
    this.visible= !this.visible;
    /* OUTRA FORMA
    if(this.visible == true)
      this.visible = false;
    else
      this.visible = true;
    */
  
} 
alterarValor(){
    if(this.nome =="Joao Bonini"){
      this.nome = "João Carlos";
      this.telefone="(13)42315-4213";
      this.cpf="245-654-345-34";
      this.idade="54";
      this.email="joaocarlos@hotmail.com";
    }else{
    this.nome="Joao Bonini";
    this.telefone="(18)99865-5436";
    this.cpf="543-134-631-23";
    this.idade=19;
    this.email="joaopedronunesbonini@hotmail.com";
    }
}
}