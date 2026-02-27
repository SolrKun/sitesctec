function trocaCor() {
    const div1 = document.getElementById("div-1");
    const div2 = document.getElementById("div-2");
    const div3 = document.getElementById("div-3");

    div1.style.backgroundColor = "red";
    div2.style.backgroundColor = "lightGreen";
    div3.style.backgroundColor = "lightBlue";
}

function retornaCor() {
    const div1 = document.getElementById("div-1");
    const div2 = document.getElementById("div-2");
    const div3 = document.getElementById("div-3");

    div1.style.backgroundColor = "";
    div2.style.backgroundColor = "";
    div3.style.backgroundColor = "";
}

/* Seletores

getElementById = recupera o elemento pelo ID
getElementsByTagName = recupera vários elementos pela tag
getElementsByClassName = recupera vários elementos pela classe
querySelector = recupera o primeiro elemento correspondente a um seletor CSS
querySelectorAll = recupera todos os elementos correspondentes a um seletor CSS
createElement = cria um novo elemento do DOM
appendChild = acrescenta um novo elemento filho a um elemento existente
removeChild = remove um elemento filho de um elemento existente
setAttribute = define o valor de um atributo
addEventListener = adiciona um ouvinte de eventos a um evento
*/