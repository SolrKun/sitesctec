document.getElementById("enviar").addEventListener("click", function () {
    const numeroPedido = Number(document.getElementById("pizza").value);
    clientePedido(numeroPedido)
})

function clientePedido (numeroPedido) {
    console.log(numeroPedido);
    switch (numeroPedido) {
        case 1:
            alert("Pizza de calabresa");
            break;
        case 2:
            alert("Pizza de quatro queijos");
            break;
        case 3:
            alert("Pizza de frango com catupiry");
            break;
        case 4:
            alert("Pizza de brigadeiro");
            break;
        default:
            alert("Número de pedido inválido");
    }
}