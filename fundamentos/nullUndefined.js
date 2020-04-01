let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Gerra um erro se acessar o que está  nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 2.10
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // produto sem preco
console.log(!!produto.preco)
console.log(produto)