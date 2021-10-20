// diz- se que uma linguagem de programação
// possui funções de primeira classe quando 
// nessa linguagem são tratadas como qualquer outra variavelament

const x = 3
const y = function(txt) {
    return `Esse é o texto: ${txt}`
}

console.log(x)
console.log(y("Olá"))