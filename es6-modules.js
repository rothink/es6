export class Pessoa {
    constructor(nome, altura, sexo) {
        this.nome = nome;
        this.altura = altura;
        this.sexo = sexo;
    }

    getAltura() {
        return this.altura;
    }

    get altura() {
        return this.altura;
    }

    set altura(value) {
        this.altura = value;
    }
}

export const nome = 'Rodrigo';
