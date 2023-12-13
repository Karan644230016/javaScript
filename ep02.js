sumation = (...numberArr) => {
    let total = 0
    for( let number of numberArr) total += number
    return total
}
console.log(sumation(50,20))
console.log(sumation(50,20,9))
console.log(sumation(50,20,20,500))
