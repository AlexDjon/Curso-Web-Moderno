// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() { }

// Armazenar em variavel
const fun2 = function() { }

// Armazenar em array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como parâmetro
function run(a) {
    console.log(a())
}
run(function () { return 10 + 5 })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

const cincoMais = soma(2, 3)
cincoMais(12)
