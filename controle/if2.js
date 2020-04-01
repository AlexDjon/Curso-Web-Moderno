function teste1(num) {
    if(num > 7)
        console.log(num) // só a primeira linha é executada
        console.log('Final') // executada pois esta fora da estrutura if
}

teste1(6)
teste1(8)

console.log('---')

function teste2(num) {
    if(num > 7) // não colocar ; no final das estruturas de controle
    { // bloco separado
        console.log(num)
    }
}

teste2(6)
teste2(8)