function eager(a, b) {
    const fim = Date.now() + 2500
    while (Date.now() < fim) {}
    const valor = Math.pow(a, 3)
    return valor + b
}
console.time('#1')
console.log(eager(3, 100))
console.log(eager(3, 200))
console.log(eager(3, 300))
console.timeEnd('#1')

function lazy(a) {
    const fim = Date.now() + 2500
    while (Date.now() < fim) {}
    const valor = Math.pow(a, 3)
    return function(b) {
        return valor + b
    }

}

console.time('#1')
console.log(lazy(3)(100))
console.log(lazy(3)(200))
console.log(lazy(3)(300))
console.timeEnd('#1')