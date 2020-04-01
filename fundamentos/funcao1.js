// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(10, 20)
imprimirSoma(2)
imprimirSoma(2, 1, 20, 30, 21)
imprimirSoma()

// função com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(10, 20))
console.log(soma(2))
console.log(!!soma(0))
console.log(soma())