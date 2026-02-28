document.getElementById("salvar").addEventListener("click", function () {
    const texto = document.getElementById("texto").value;
    if (texto === "") {
        alert("Digite uma tarefa antes de salvar.");
        return;
    }
    adicionarTarefa(texto);
})

function adicionarTarefa(texto) {
    const tarefas = document.getElementById("tarefas");
    const li = document.createElement("li");
    li.textContent = texto;
    tarefas.appendChild(li);
}