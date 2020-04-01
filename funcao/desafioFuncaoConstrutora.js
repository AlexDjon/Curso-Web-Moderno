function Pessoa(nome) {
   this.nome = nome
   this.falar = function() {
      console.log(`Meu nome é ${this.nome}`)
   }
}

const p1 = new Pessoa('Alex')
p1.falar()
console.log(p1.nome)
p1.nome = 'Diego'
console.log(p1.nome)
