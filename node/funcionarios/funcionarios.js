const url ='http://files.cod3r.com.br/curso-js/funcionarios.json'
//const url = 'http://hubblesite.org/api/v3/news'
const axios = require('axios')

axios.get(url).then(response => {
   const funcionarios = response.data

   const moraNaChina = f => f.pais === 'China'
   const eMulher = f => f.genero === 'F'
   const menorSalario = (menor, atual) => {
      if(atual.salario < menor.salario) {
         return atual
      } else {
         return menor
      }
   }
   
   const mulherChinesa = funcionarios
   .filter(moraNaChina)
   .filter(eMulher)
   .reduce(menorSalario)
   
   console.log(mulherChinesa)

   //console.log(funcionarios)
   
})