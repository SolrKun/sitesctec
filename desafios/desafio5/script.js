function saudar() {
    let idioma = parseInt(document.getElementById("idioma").value);
    let saudacao;

    switch (idioma) {
        case 1:
            saudacao = "Olá!";
            break;
        case 2:
            saudacao = "Hello!";
            break;
        case 3:
            saudacao = "Hola!";
            break;
        case 4:
            saudacao = "Salut!";
            break;
        default:
            saudacao = "Selecione um idioma!"
    }

    document.getElementById("saudacao").innerHTML = saudacao;
}