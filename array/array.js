console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
function A() {
   this.length = function() {
      console.log(aprovados.length)
   }
   this.values = function() {
      console.log('-----------')
      aprovados.forEach((v, i) => {
         console.log(i, ':', v)
      })
   }
   this.show = function() {
      console.log(aprovados)
   }
   this.one = function(i) {
      console.log(aprovados[i])
   }
}
const ver = new A()
aprovados = ['Bia', 'Carlos', 'Ana']
ver.one(0)
ver.one(1)
ver.one(2)
ver.one(3)

aprovados[3] == 'Paulo'
aprovados.push('Abia')
ver.one(3)
ver.show()

aprovados[9] = 'Rafael'

console.log(aprovados[8] === undefined)
ver.show()
aprovados.sort()
ver.show()

delete aprovados[1]
ver.one(1)
ver.one(2)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
ver.show()