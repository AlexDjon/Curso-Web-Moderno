const carrinho = [
   '{ "nome": "Borracha", "preco": 3.45 }',
   '{ "nome": "Caderno", "preco": 13.90 }',
   '{ "nome": "Kit de Lapis", "preco": 41.22 }',
   '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retonar um array apenas com os preços
const apenasPreco = e => {
   e = JSON.parse(e)
   return e.preco
}

const precos = carrinho.map(apenasPreco)
console.log(precos)