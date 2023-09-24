// for
console.clear()
const multiplicador = 8
console.log('Tabuada de Multiplicação do numero: ',multiplicador)
for(let nun = 1;nun<=10; nun++){
    var resultado = nun * multiplicador
    console.log(`${multiplicador} x ${nun} = ${resultado}`)
}

// for in
// percorre cada propriedade de um objeto
const Pessoa = {nome:"Antonio", idade: 40, cidade:'Aquiraz-Ce'}
for(dados in Pessoa){
    console.log(Pessoa[dados])
}
// for of
//pecorre cada valor de uma coleção de dados

const numero = [1,2,3,4,5]
for(n of numero) console.log('numero-> ',n)

// forEach

numero.forEach(n=>console.log('numero-> ',n))

//while

let contador = 0
while(contador<5){
    console.log(contador)
    contador++
}

// do while

do{
console.log(contador)
contador--
}while(contador>0)

