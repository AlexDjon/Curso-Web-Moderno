Object.defineProperty(Array.prototype, 'filter2', {
   enumerable: false,
   value: function(callback) {
      const newArray = []
      for(let i in this) {
         if(callback(this[i], i, this)) {
            newArray.push(this[i])  
         }
      }
      return newArray
   } 
})

const produtos = [
   { nome: 'Notebook', preco: 2499, fragil: true },
   { nome: 'iPad Pro', preco: 4199, fragil: true },
   { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
   { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caro = e => e.preco > 500
const fragil = e => e.fragil

console.log(produtos.filter2(caro).filter2(fragil))