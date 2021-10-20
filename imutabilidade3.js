const pessoa = {
        nome: 'Maria',
        altura: 1.76,
        cidade: 'São Paulo'
    }
    // Atribuição por referencia
const novaPessoa = {...pessoa }
novaPessoa.nome = 'Joao'
novaPessoa.altura = 1.80

console.log(novaPessoa)
console.log(pessoa)