// armazenando uma funcao em uma variavel
const imprimirSoma = function(a, b) {
    console.log('Imprimir soma ', a + b)
}
imprimirSoma(1, 2)

function soma(a, b) {
    return a - b
}
console.log('Soma ', soma(20, 10))

// armazenando uma funcao arrow em uma variavel
const subi = (a, b) => {
    return a - b
}

console.log('Subtração',subi(2, 1))

// retorno implicito
const multi = (a, b) => a * b
console.log('Multiplicação ', multi(10, 5))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')