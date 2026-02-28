function validateForm () {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("number").value;
    const password = document.getElementById("password").value;
    const emailPattern = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
    const phonePattern = /^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/;
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

    if (email === "" || number === "" || password === "") {
        alert("Todos os campos são obrigatórios");
        return false;
    }

    if(!emailPattern.test(email)) {
        alert("Por favor, insira um email válido");
        return false;
    }

    if(!phonePattern.test(phone)) {
        alert("Por favor, insira um telefone válido");
        return false;
    }

    if(!passwordPattern.test(password)) {
        alert("Por favor, insira uma senha válida");
        return false;
    }

    return true;
}

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if(validateForm()) {
        alert("Formulário validado!");
    }
})