// arrays
let arr1 = [10,20,55,78,63]
let arr2 = [24,10,30]
//metodo slice
console.log(arr1.slice(0,2)) // mostra do indice 0 ate antes do indice 2
console.log(arr1.slice(2))   // mostra a partir do indice 2
// metodo push e unshift
arr1.push(8)    //acrescenta no final
arr2.unshift(9) //acrescenta no inicio
console.clear()
console.log(arr1)
console.log(arr2)
// meodo pop e shift
arr1.shift()  // retira no inicio
arr2.pop()    // retira no final
console.log(arr1)
console.log(arr2)
// metodo concat
console.clear();
console.log(arr1.concat(arr2))
// metodo indexOf
console.log(arr1)
console.log(arr1.indexOf(78))     //retorna o indice do primeiro elemento encontrado
arr1.push(78)
console.log(arr1)
console.log(arr1.lastIndexOf(78)) //retorna o indice do ultimo elemento encontrado
console.log(arr1.indexOf(79))     // retorna -1 se nao encontrar o elemento
// metodo includes
console.log(arr1.includes(5))     // retorna true se achao o elemento no array ou false se não achar
// metodo reverse
const arrInvrtido = arr1.reverse() // inverte a ordem dos elementos
console.log(arrInvrtido)
