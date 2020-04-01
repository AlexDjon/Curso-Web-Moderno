// ES8: Object.values / Object.entries
const obj = {a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação liberal
const nome = 'Carla'
const pessoa = {
   nome,
   ola() {
      return 'Oi gente'
   }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {
   organismo = 'Pluricelular'
}
class Cachorro extends Animal {
   falar() {
      return 'Au Au!'
   }
}
const cachorro = new Cachorro
console.log(cachorro.falar(), cachorro.organismo)