const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log('Sincrono', conteudo)

// assincrona 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
   const config = JSON.parse(conteudo)
   console.log(`Assincrona: ${config.db.host}:${config.db.port}`)
})


const config = require('./arquivo.json')
console.log('Require Json', config.db)

fs.readdir(__dirname, (err, arquivos) => {
   console.log('readDir',arquivos)
})