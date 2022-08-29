import Carro from "./carro";
import Cliente from "./cliente";
import CompraCarro from "./comprarCarro";
import Funcionario from "./funcionario";

let car = new Carro('Logan' , 1970 ,  10000); 

let cliente = new Cliente('Diego' , 4999); 

let funcionario = new Funcionario('joao'); 

let compra = new CompraCarro(cliente, funcionario , car); 

compra.detalheCompra(); 
 
