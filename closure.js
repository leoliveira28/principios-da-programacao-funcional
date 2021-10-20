/* closure é qunado uma função "lembra"
seu escopo lexico, mesmo quando a função
é executada fora desse escopo lexico */

const somarXMais3 = require('./closure_escopo')

console.log(somarXMais3())