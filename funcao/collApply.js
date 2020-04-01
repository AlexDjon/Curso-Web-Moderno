function getPreco(imposto = 0, moeda = 'R$') {
   return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
   nome: 'Notebook',
   preco: 4000,
   desc: 0.01,
   getPreco
}

console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 4990, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
// Pede que os parâmetros estejam dentro de array
console.log(getPreco.apply(carro, [0.17, '$']))
