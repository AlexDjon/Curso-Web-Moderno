const valores = [9.1, 8.9, 9.0, 2.0]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 // Adicionar valor
console.log(valores)
console.log(valores.length) // ler tamanho do array

valores.push({id: 3}, false, null, 'teste') // Adicionar no final
console.log(valores)

console.log(valores.pop()) // Pegar o ultimo elemento
delete valores[0] // Deletar um elemento
console.log(valores)

console.log(typeof valores)