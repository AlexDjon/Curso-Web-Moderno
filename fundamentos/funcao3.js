// Armazenando funcao em variavel
const imprimirSoma = function (a, b) {
    console.log(a+ b);
}

imprimirSoma(2, 3)

// Armazenando uma funcao em arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(1, 3))

// retorno implicito
const sub = (a, b) => a - b
console.log(sub(5, 1))

const imprimir2 = a => console.log(a)

imprimir2('Até a proxima aula!!!')