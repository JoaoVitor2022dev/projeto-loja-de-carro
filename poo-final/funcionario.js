"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(n) {
        this.comissao = 0; /* por que ele vai cereber o default e so vai ter comissao quando vender */
        this.nome = n;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getcomissao() {
        return this.comissao;
    }
    setcomissao(comissao) {
        return this.comissao = comissao;
    }
}
exports.default = Funcionario;
