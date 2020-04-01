const prod1 = {}
prod1.nome = 'Celular Ulta Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaços

console.log(prod1)

// Notação literal
const prod2 = {
    nome: 'Camiseta polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(prod2)