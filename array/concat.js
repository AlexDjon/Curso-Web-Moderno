const filhas = ['Valesca', 'Cibalena']
const filhos = ['Thiago', 'Gabriel']

const todos = filhos.concat(filhas, 'Fulano')
console.log(todos, filhos, filhas)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))