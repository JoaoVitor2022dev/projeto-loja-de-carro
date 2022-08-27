"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(n, r) {
        this.nome = n;
        this.renda = r;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getRenda() {
        return this.renda;
    }
    setRenda(renda) {
        return this.renda = renda;
    }
}
exports.default = Cliente;
