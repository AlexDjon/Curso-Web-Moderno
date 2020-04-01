// estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1 // primeira parte for falsa ele vai pra segunda, isso vale pra quantas comparações você fazer
    b = b || 1 // usar dentro de uma função onde não da pra usar o valor padrao do es2015
    c = c || 1
    
    return a + b + c
}

console.log(soma1(2), soma1(2, 5), soma1(), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar um valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se for diferente de undefined ele vai retornar 1
    b = 1 in arguments ? b : 1 // se existir 1 dentro dos argumentos ele pega o valor de b se não pega o valor de 1
    c = isNaN(c) ? 1 : c // compara se c é numero se não retorna 1

    return a + b + c
}

console.log(soma2(2), soma2(2, 5), soma2(), soma2(0, 0, 0))

// valor padrao es2015
function soma3(a = 1, b = 1, c =1) {
    return a + b + c
}

console.log(soma3(2), soma3(2, 5), soma3(), soma3(0, 0, 0))