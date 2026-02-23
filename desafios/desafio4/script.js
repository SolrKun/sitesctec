function calculadora () {
    let valor = document.getElementById("valor").value;
    console.log(valor);
    let desconto = document.getElementById("desconto").value;
    console.log(desconto);
    if (valor <= 0) {
        alert("Por favor, adicione um valor válido no campo de valor do produto");
    } else if (desconto <= 0) {
        alert("Por favor, adicione um valor válido no campo de porcentagem de desconto");
    } else {
        let valorFinal = valor - (valor * (desconto * 0.01));
        console.log(valorFinal);
        document.getElementById("resultado").innerHTML = `O valor final é ${valorFinal}`
    }
}