Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota)  {
    const status = {msg: '', div: '>'}

    if (nota.entre(9, 10)) {
        status.msg = `Quadro de Honra nota ${nota}!`       
    }
    else if(nota.entre(7, 8.99)) {
        status.msg = `Aprovado nota ${nota}!`
    }
    else if(nota.entre(4, 6.99)) {
        status.msg = `Recuperação nota ${nota}!`
    }
    else if(nota.entre(0, 3.99)) {
        status.msg = `Reprovado nota ${nota}!`
    }
    else {
        status.msg = `Valor Inválido ${nota}!`
    }
    console.log(status.msg)

    for(let i = 0; i <= status.msg.length-2; i++)
        status.div += '-'
    console.log(status.div)
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
