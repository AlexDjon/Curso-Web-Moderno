function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGripado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        const t = tratarErroELancar(e)        
    } finally {
        console.log('finalizado')
    }
}

const obj = { naame: 'Alex' }
imprimirNomeGripado(obj)