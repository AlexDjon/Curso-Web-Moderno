function Carro(velocidadeMax = 200, delta = 5) {
    // atributo privado (pertence apenas a o escopo da função Carro)
    let velocidadeAtual = 0;
    
    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta < velocidadeMax) {
            velocidadeAtual += delta
            console.log(`Acelerando - ${velocidadeAtual} Km/h`)
        } 
        else {
            velocidadeAtual = velocidadeMax
            console.log(`Velocidade Maxíma! - ${velocidadeMax} Km/h`)
        }
    }

    this.irAoMaximo = function () {
        while(velocidadeAtual != velocidadeMax) {
            this.acelerar()
        }
    }

    this.getVelocidadeAtual = _ => console.log(`Velocidade atual ${velocidadeAtual} Km/h`)
}

const teste = new Carro(30, 5)
teste.getVelocidadeAtual()
teste.irAoMaximo()
teste.getVelocidadeAtual()

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.getVelocidadeAtual()

console.log(typeof Carro)
console.log(typeof teste, typeof ferrari)