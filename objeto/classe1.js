class Lancamento {
   constructor(nome = 'Genérico', valor = 0) {
      this.nome = nome
      this.valor = valor
   }
}

class CicloFinanceiro {
   constructor(mes, ano) {
      this.mes = mes
      this.ano = ano
      this.lancamentos = []
   }

   addLancamentos(...lancamentos) {
      lancamentos.forEach(l => {
         this.lancamentos.push(l)
         console.log(l.nome, 'adicionado aos lançamentos! - ', l.valor)
      })
   }

   sumario() {
      let valorConsolidado = 0
      this.lancamentos.forEach(l => {
         valorConsolidado += l.valor
      })
      return valorConsolidado
   }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const bonus = new Lancamento('Bônus', 440)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz, bonus)
console.log(contas.sumario())