const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(4)
imprimirResultado(6.9)
imprimirResultado(9)
imprimirResultado('Epa!')