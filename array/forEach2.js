Object.defineProperty(Array.prototype, 'forEach2', {
   enumerable: false,
   value: function(callback) {
      for(i in this) {
         callback(this[i], parseInt(i), this)
      }
   }
})

const aprovados = ['Agatha', 'Alex', 'Daniel', 'Raquel']

aprovados.forEach2((v, i) => {
   console.log(`${i+1}) ${v}`)
})