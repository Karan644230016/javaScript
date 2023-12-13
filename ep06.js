const number = [10,20,30]
console.log(number)

number.pop()
console.log(number)

number.shift()
console.log(number)

number.push(40)
console.log(number)

number.unshift(888)
console.log(number)

const add = [2,4,6]
const newNumber = [...number,...add]
console.log(newNumber.join(' '))