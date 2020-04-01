let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // num1(2) === num2(2) => num2(1)
console.log(num1 === ++num2) // num1(2) === num2(2)
console.log(++num1 === ++num2) // num1(3) === num2(3)
console.log(num1++ === ++num2) // num1(3) === num2(4) => num1(4)
console.log(num1 === num2) // num1(4) === num2(4)