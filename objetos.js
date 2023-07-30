let pessoa = {
    nome: 'Pedro',
    idade: 15
}
console.log(pessoa.nome)
pessoa.altura = 1.72
console.log(pessoa)
console.log(pessoa.idade)
console.log(pessoa['idade'])
delete pessoa.altura
console.log(pessoa)
pessoa.altura = 1.73
for(let chave in pessoa)
console.log(chave)
//for(let valores of pessoa)
console.log(pessoa)