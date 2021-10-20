// FUNCOES QUE OPERAM EM OUTRAS FUNCOES,
// TOMANDO-AS COMO ARGUMENTOS OU RETORNANDO-AS
// SÃO CHAMADAS DE HIGHER ORDER FUNCTIONS

function executar(fn, ...params) {
    return function(texto) {
        return `${texto} ${fn(...params)}`
    }

}

function somar(a, b, c) {
    return a + b + c
}

function multi(a, b) {
    return a * b
}



const r1 = executar(somar, 2, 8, 10)('O resultado da soma é')
const r2 = executar(multi, 4, 5)('O resultando da multiplicação é')

console.log(r1)
console.log(r2)