Object.defineProperty(Array.prototype, 'map2', {
   enumerable: false,
   value: function(callback) {
      let newArray = []
      for(let i in this) {
         newArray.push(callback(this[i], i, this))
      }
      return newArray
   }
})

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

const precos = carrinho.map2(apenasPreco)
console.log(precos)