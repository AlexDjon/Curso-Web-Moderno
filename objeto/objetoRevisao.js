// objeto = coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
   modelo: 'A4',
   valor: 80000,
   proprietario: {
      nome: 'Alex',
      idade: 18,
      endereco: {
         logradouro: 'Rua Jericoacoara',
         numero: 123
      }
   },
   condutores: [{
      nome: 'Junior',
      idade: 19
   }, {
      nome: 'Ana',
      idade: 42
   }],
   calcularSeguro: function() {
      // ...
   }
}
carro.proprietario.endereco.numero = 100
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro

console.log(carro)
