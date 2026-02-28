function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Todos os canmpos são obrigatórios");
        return false;
    }

    if (name.length < 3 || name.length > 50) {
        alert("O nome deve ter entre 3 e 50 caracteres");
        return false;
    }

    if (email.length < 5 || email.length > 50) {
        alert("O email deve ter entre 5 e 50 caracteres");
        return false;
    }

    const emailPattern = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um valor de e-mail válido");
        return false;
    }

    return true;
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Formulário validado");    
    }
})

// sempre validar se os campos estão vazios além do required do html
// utilizar RegEx para validar dados
// dar feedback imediato ao usuário para validar
// deixar msg de erro clara e específica
// utilizar IA generativa para criar RegEx
// limpar os dados (espaços em branco, caracteres não regulares...)