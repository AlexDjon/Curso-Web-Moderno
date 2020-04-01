const fabricantes = ['Mercedes', 'Audi', 'Bmw']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach((fabricante, indice) => console.log(`${indice + 1}. ${fabricante}`))