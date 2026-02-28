const produtos = [];

function carregarProduto (id) {
    return new Promise((resolve, reject) => {
        console.log("Buscando dados no servidor");

        setTimeout(() => {
            let sucesso = Math.random() > 0.5;
            
            if (sucesso) {
                resolve("Dados recebidos com sucesso");
                produtos.push({
                    id: id,
                    nome: "produto",
                    preco: "preço"
                });
            } else {
                reject("Falha ao buscar dados do servidor");
            }
        }, 2000);
    });
}

carregarProduto(1).then((mensagem) => {
    console.log(mensagem);
    console.log(produtos);
    const produtosJson = JSON.stringify(produtos);
    console.log(produtosJson);
    const produtosObj = JSON.parse(produtosJson);
    console.log(produtosObj);
}).catch((erro) => {
    console.error(erro);
    console.log(produtos);
});

const minhaFuncaoAssincrona = async () => {
    try {
        const resultado = await carregarProduto(1);
        console.log(resultado);
        console.log(produtos);
        const produtosJson = JSON.stringify(produtos);
        console.log(produtosJson);
        const produtosObj = JSON.parse(produtosJson);
        console.log(produtosObj);
    } catch(erro) {
        console.log(erro);
        console.log(produtos);
    }
}

minhaFuncaoAssincrona();