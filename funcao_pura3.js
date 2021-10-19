// É UMA FUNÇÃO PURA EM QUE O VALOR DE RETORNO 
// É DETERMINADO APENAS POR SEUS VALORES
// DE ENTRADA, SEM EFEITOS COLATERAIS OBSERVAVEIS

let qtdeDeExecucoes = 0
    //  FUNÇÃO PURA, NÃO DEPENDE DE FATORES EXTERNOS
function somar(a, b) {
    qtdeDeExecucoes++ //EFEITOS COLATERAIS OBSERVAVEIS
    return a + b
}

console.log(somar(157, 289))
console.log(somar(157, 289))
console.log(somar(157, 289))
console.log(somar(157, 289))
console.log(qtdeDeExecucoes)