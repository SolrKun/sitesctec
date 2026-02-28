class Veículo {
    constructor(fabricante, modelo, ano, tipo, qtdPortas) {
        this.fabricante = fabricante; //propriedade da Classe
        this.modelo = modelo;
        this.ano = ano;
        this.tipo = tipo;
        this.qtdPortas = qtdPortas;
    }

    mostrarDados() {
        console.log(`${this.fabricante} ${this.modelo}, ${this.ano} (${this.tipo}), ${this.qtdPortas} portas`);
    }
    
    mostrarModelo() {
        console.log(`O modelo do veículo é ${this.modelo}`);
    }
    acelerar() {
        console.log("Acelerando...");
    }
}

class Moto extends Veículo {
    constructor(fabricante, modelo, ano, cilindradas) {
        super(fabricante, modelo, ano);
        this.cilindradas = cilindradas;
    }

    mostrarDados() {
        console.log(`${this.fabricante} ${this.modelo}, ${this.ano}, ${this.cilindradas} cilidrandas`);
    }
}

class Carro extends Veículo {
    constructor(fabricante, modelo, ano, tipo, qtdPortas) {
        super(fabricante, modelo, ano, tipo, qtdPortas);
    }
}

const minhaMoto = new Moto(
    "Yamaha",
    "Modelo",
    2008,
    300
);

const meuCarro = new Carro(
    "Ford",
    "KA",
    "2008",
    "Sedan",
    4
);

meuCarro.mostrarDados();
meuCarro.mostrarModelo();
meuCarro.acelerar();