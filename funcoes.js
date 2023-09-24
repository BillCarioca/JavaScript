// named funtions

function saudacoes(nome='Ana'){
    return "olá, "+nome
}

console.log(saudacoes('Paulo'))
console.log(saudacoes())

//Arrows funtions

const despedida = nome =>console.log(`Tchau ${nome}`)

despedida('Pedro')

//Anonymous funtions

const dados = function (nome,idade) {
    console.log(`Nome: ${nome} e idade: ${idade}`)
}
dados('Ana',22)

//Higher Order Function
// funções que tem uma ou mais funções como argumento

const array = [1,2,3]
const newArray = array.map(num => num*5)
newArray.forEach(num=>console.log(num))

//Constructor Function
// usada para construir Objetos 
// Chamada com a keyword new

function Pessoa(nome,idade){
    this.nome = nome
    this.idade = idade
}
var usuario = new Pessoa('Antonio',40)
console.log(usuario)
console.log(usuario.nome)
console.log(usuario.idade)