// Closure é o escopo criando quando a função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas a função

// Contexto léxico em ação

const valor = 'Global'
function minhaFuncao() {
   console.log(valor)
}

function exec() {
   const valor = 'Local'
   minhaFuncao()
}

exec()