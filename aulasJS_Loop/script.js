const carros = ["Uno", "Fusca", "Escort", "Gol"];

const conteudo = document.getElementById("conteudo");

var dados;
var i;

function criaSecao (titulo, dados) {
    const secao = document.createElement("div"); //criar o elemento div dentro da variável
    secao.innerHTML = "<h2>" + titulo + "</h2>" + dados; //adicionar o h2 dentro da div da variável secao
    conteudo.appendChild(secao); //adicionar elementos dentro de um elemento
}

/* --------------------------------------------------------- */
// LOOP WHILE

dados = "";
i = 0;

while (i < 4) {
    dados += "<p>" + carros[i] + "</p>";
    i++;
}

criaSecao("Loop While", dados);

/* --------------------------------------------------------- */
// LOOP WHILE V2

dados = "";
i = 0;

while (i < carros.length) {
    dados += "<p>" + carros[i] + "</p>";
    i++;
}

criaSecao("Loop While v2", dados);

/* --------------------------------------------------------- */
// DO WHILE

dados = "";
i = 0;

do {
    dados += "<p>" + carros[i] + "</p>";
    i++;
} while (i < carros.length)

criaSecao("Loop Do While", dados);

/* --------------------------------------------------------- */
// FOR

dados = "";

for (i=0; i < carros.length; i++) {
    dados += "<p>" + carros[i] + "</p>";
}

criaSecao("Loop For", dados);

/* --------------------------------------------------------- */
// FOR OF

dados = "";

for (let carro of carros) {
    if (carro === "Escort")
    // break; //o break finaliza o laço de repetição
    continue; //o continue pula a iteração atual
    dados += "<p>" + carro + "</p>";
}

criaSecao("Loop For Of", dados);

/* --------------------------------------------------------- */
// FOR IN

dados = "";

// Isso se chama MATRIZ(com objetos) e não ARRAY (lista) 
let carro1 = {marca: "Ford", modelo: "Ka", ano: "2015"};
let carro2 = {marca: "Fiat", modelo: "Uno", ano: "2000"};

let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);

for (let carro of carros2) {
    
    let propriedades = "";
    
    for (let prop in carro) {
        propriedades += carro[prop] + " | ";
    }
    
    dados += "<p>" + propriedades + "</p>";
}

criaSecao("Loop For In", dados);

/* --------------------------------------------------------- */
// FOREACH

dados = "";

carros.forEach((carro) => {
    dados += "<p>" + carro + "</p>";
})

criaSecao("Loop Foreach", dados);