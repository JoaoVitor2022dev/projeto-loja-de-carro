export default class Funcionario {
    nome: string; 
    comissao: number = 0 ;  /* por que ele vai cereber o default e so vai ter comissao quando vender */

    constructor(n: string ) {
         this.nome = n ;  
    }

    public getNome(){
        return this.nome; 
    } 

     public setNome(nome: string){
        this.nome = nome; 
    }

    public getComissao(){
        return this.comissao
    }

    public setComissao(comissao: number){
        return this.comissao = comissao;  
    }
} 