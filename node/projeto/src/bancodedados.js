const sequence = {
   _id: 1,
   get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
   if(!produto.id) produto.id = sequence.id
   produtos[produto.id] = produto
   console.log(produto.nome, 'adicionado')
   return produto
}

function getProduto(id) {
   return produtos[id] || {}
}

function getProdutos() {
   return Object.values(produtos)
}

function excluirProduto(id) {
   const produto = produtos[id].nome || 'Undefined'
   delete produtos[id]
   return `O produto ${produto} foi deletado!`
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }