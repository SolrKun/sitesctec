const carros = ["Uno", "Fusca", "Escort", "Gol"]; 
const conteudo = document.getElementById("conteudo"); 

let i = 0;
let continuar = true;

function proximoCarro() {

    do {

        conteudo.innerHTML += `<p>${carros[i]}</p>`;
        i++;
        
        if (i >= carros.length) {
            conteudo.innerHTML += "<p>Fim da lista.</p>";
            break;
        }

        continuar = confirm("Você deseja ver o próximo carro?");

    } while (continuar && i < carros.length);

}