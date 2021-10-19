//  FUNÇÃO IMPURA
function geraNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(geraNumeroAleatorio(10, 20))
console.log(geraNumeroAleatorio(5, 6))
console.log(geraNumeroAleatorio(5, 6))
console.log(geraNumeroAleatorio(5, 6))