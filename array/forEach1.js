const aprovados = ['Agatha', 'Alex', 'Daniel', 'Raquel']

aprovados.forEach((v, i, array) => {
   console.log(`${i+1}) ${v}`)
   console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)