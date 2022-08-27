 import Carro from "./carro";
 import Cliente from "./cliente"
 import Funcionario from "./funcionario";

 export default class CompraCarro { 
    cliente: Cliente; 
    funcionario: Funcionario; 
    carro: Carro; 
    precoFinal: number; 
    valorComDesconto: number; 

    constructor(cli: Cliente , func: Funcionario , carr: Carro ) { 
          this.cliente = cli; 
          this.funcionario = func; 
          this.carro = carr; 
          this.carro.setValor(this.darDesconto(this.carro.getValor())); 
          this.precoFinal = this.carro.getValor(); 
          this.funcionario.setComissao(this.addComissao(this.precoFinal)); 
          this.valorComDesconto = 0; 
    }

   private darDesconto() {
       if(this.carro.getAno() < 2000 ){
         this.valorComDesconto = this.carro.getValor() * 90; 
         this.carro.setAno(this.valorComDesconto); 
       } else {
        this.carro.setValor(preco)
       }
       if (this.cliente.getRenda() < 5000) {
         this.valorComDesconto = this.carro.getValor() * 90; 
         return this.carro.setValor(this.valorComDesconto);  
       } else {
         return this.carro.setValor(this.carro.getValor()); 
       }
    }

    public addComissao (valor: number) { 
      return this.funcionario.setComissao(valor * 0.02);       
    } 
   }
   

