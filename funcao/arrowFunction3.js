let compararComThis = function (param) {
    console.log(this === param)
}

compararComThis(global)

const obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(global)
compararComThis(obj)

let compararComThisArrow = param => console.log(this === param)
compararComThisArrow(global)
compararComThisArrow(module.exports)
compararComThisArrow(this)

compararComThisArrow = compararComThisArrow.bind(obj) // não é possivel mudar o módulo de um arrow function
compararComThisArrow(obj)
compararComThisArrow(module.exports)