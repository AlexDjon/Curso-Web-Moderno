// Arrow Function
const soma = (a, b) => a + b
console.log(soma(10, 20))
const teste = {a: 10, b: 10, c: () => teste.a + teste.b}
console.log(teste.c())

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
   console.log(texto)
}
log()
log('Sou mais forte')

// operador rest
function total(...numeros) {
   let total = 0
   numeros.forEach(n => total += n)
   return total
}
console.log(total(2, 3, 4, 5, 6))