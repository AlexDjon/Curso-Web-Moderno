const moduloA = require('../../moduloA')
console.log(moduloA)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
   res.title('teste')
   res.write(moduloA.bemVindo)
   res.end()
}).listen(3000)