const escola = "Cod3rr434a"

console.log(escola.charAt(2)) // Pegar um caractér especifico
// console.log(escola.charAt(10)) 
console.log(escola.charCodeAt(3)) // Pegar um caractér e transformar em Unicode
console.log(escola.indexOf('rr')) // Procurar o valor e mostrar a posição se houver

console.log(escola.substring(1)) // Exibir tudo do indice 1 até o final
console.log(escola.substring(0, 3)) // Exibir tudo do indice 0 até o 3

console.log('Escola '.concat(escola).concat("!")) // Concatenar
console.log(escola.replace(3, 'e')) // Substituir
console.log(escola.replace(/\d/, 'e')) // Substituir todos digitos
console.log(escola.replace(/\w/g, 'e')) // Substituir todas letras e digitos (g = global)

console.log('Alex,Lucas,Vitória'.split(/,/)) // Tranformar em array