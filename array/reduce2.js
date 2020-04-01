Object.defineProperty(Array.prototype, 'reduce2', {
   value: function(callback) {
      let acumulador = this[0]
      for(let i = 1; i <= this.length-1; i++) {
         acumulador = callback(acumulador,this[i])
      }
      return acumulador
   }
})

const alunos = [
   { nome: 'Alex', nota: 7.3, bolsista: false },
   { nome: 'Maria', nota: 9.2, bolsista: true },
   { nome: 'Pedro', nota: 9.8, bolsista: false },
   { nome: 'Paulo', nota: 8.7, bolsista: true }
]

const bolsas = alunos.map(a => a.bolsista)
// Desafio 1: Todos os alunos são bolsitas?
console.log(bolsas.reduce2((acumulador, atual) => {
   if(!acumulador) {
      return false
   } else {
      return atual
   }
}))

// Desafio 2: Algum aluno é bolsista?
console.log(bolsas.reduce2((acumulador, atual) => {
   if(acumulador) {
      return true
   } else {
      return atual
   }
}))