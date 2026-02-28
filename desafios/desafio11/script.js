class Produto {
    constructor(nome, preço) {
        this.nome = nome;
        this.preço = preço;
    }

    mostrarDetalhes() {
        console.log(`Produto: ${this.nome}, preço: ${this.preço}`);
    }
}

class Eletronico extends Produto {
    constructor(nome, preço, garantia) {
        super(nome, preço);
        this.garantia = garantia;
    }

    mostrarDetalhes() {
        console.log(`Produto: ${this.nome}, preço: ${this.preço}, garantia: ${this.garantia}`);
    }
}

const produto1 = new Produto("produto", 10);

produto1.mostrarDetalhes();

const eletronico1 = new Eletronico("eletronico", 100, 2);

eletronico1.mostrarDetalhes();