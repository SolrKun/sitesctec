// executa a função após o intervalo informado (3000ms)
// setTimeout(() => {
//     console.log("Alerta");
// }, 3000);

// executa esse código de forma intermitente com um intervalo do tempo informado (3000ms)
// setInterval(() => {
//     console.log("Alerta");
// }, 3000);

console.log("Início da execução");

function buscaDadosdoServidor() {

    // CODIGO QUE BUSCA DADOS DO SERVIDOR

    return new Promise((resolve, reject) => {
        console.log("Buscando dados no servidor");

        setTimeout(() => {
            let sucesso = Math.random() > 0.5;

            if (sucesso) {
                resolve("Dados recebidos com sucesso");
            } else {
                reject("Falha ao buscar dados do servidor");
            }
        }, 2000);
    });

}

buscaDadosdoServidor()
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.error(erro);
    });

const minhaFuncaoAssincrona = async () => {
    try {
        const resultado = await buscaDadosdoServidor();
        console.log(resultado);
    } catch(erro) {
        console.error(erro);
    }
}

minhaFuncaoAssincrona();

console.log("Final da execução");