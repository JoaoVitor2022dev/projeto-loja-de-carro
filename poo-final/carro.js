"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    constructor(m, a, v) {
        this.modelo = m;
        this.ano = a;
        this.valor = v;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        return this.ano = ano;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        return this.valor = valor;
    }
}
exports.default = Carro;
