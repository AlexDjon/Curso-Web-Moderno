const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas: funcional e OO

// utilizando o bind pra apontar para o objeto pessoa
const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()

// criar propriedade saudacao dentro do objeto relacionado pelo this sem o bind
const teste = {saudacao: 'Teste', falar: pessoa.falar}
teste.falar()

