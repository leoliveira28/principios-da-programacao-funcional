// É UMA FUNÇÃO PURA EM QUE O VALOR DE RETORNO 
// É DETERMINADO APENAS POR SEUS VALORES
// DE ENTRADA, SEM EFEITOS COLATERAIS OBSERVAVEIS

//FUNÇÃO IMPURA
const PI = 3.14

function areaCirc(raio) {
    return raio * raio * Math.PI
}

// FUNÇÃO PURA


function areaCircPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.14592))
console.log(areaCircPura(10, Math.PI))