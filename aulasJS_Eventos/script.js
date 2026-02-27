function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

document.getElementById("redButton").addEventListener("click", function() {setBackgroundColor("red")});
document.getElementById("greenButton").addEventListener("click", function() {setBackgroundColor("green")});
document.getElementById("blueButton").addEventListener("click", function() {setBackgroundColor("blue")});

document.getElementById("inputBox").addEventListener("keypress", function(event) {
    alert("Tecla pressionada: " + event.key);
})

/* EVENTOS:

click = clicar em um elemento
dblclick = clicar 2x rapidamente em um elemento
mouseover = cursor na área do elemento
mouseout = cursar sai da área do elemento
mousedown = quando o botão do mouse é pressionado em um elemento
mouseup = quando o botão é liberado em um elemento
focus = quando o elemento recebe foco (input / select / button / textarea)
blur = quando perde o foco (input / select / button / textarea)
keydown = tecla é pressionada (form / body)
keyup = tecka é liberada (form / body)
keypress = tecka pressionada e solta (depreciado) (form / body)
change = o valor de um elemento (input / select / textarea) é alterado e confirmado pelo usuário
*/
