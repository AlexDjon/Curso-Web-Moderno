function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let total = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
    total++
}

console.log(`Saiu do laço depois de ${total} vezes.`)