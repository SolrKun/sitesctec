// var = escopo global
// let = escopo local alterável
// const = escopo local não alterável

var num1 = 5;
// const num1 = 5;

function varTeste1 () {
    let num1 = 1;
    // var num2 = 2;

    console.log(num1);
}

// let num1 = 2;
num1 = 3;

varTeste1();
console.log(num1);