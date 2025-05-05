function digaOla() {
    return "Olá, mundo!";
}

const resultado = digaOla();
console.log("Resultado:", resultado); // "Olá, mundo!"

const funcao = digaOla;
console.log("Função:", funcao);       // [Function: digaOla]
console.log("Função chamada:", funcao()); // "Olá, mundo!"
funcao