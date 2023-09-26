const arr = [1,2,8,9,5]

function soma(array){
    var soma = 0
    for(n of array){
        soma+=n
    }
    return soma
}
function maior(array=[]){
    var maior
    for(let i=0; i<array.length; i++){
        if (i==0){maior = array[i]}
        else if (maior<array[i]) maior = array[i] 
    }
    return maior
}
function media(array=[]){
    var soma = 0
    for(n of array){
        soma+=n
    }
    return soma/array.length
}
function tem(array=[],num){
    for(n of array){
        if (n==num){ return true }
    }
    return false
}
console.log(soma(arr))
console.log(media(arr))
console.log(maior(arr))
console.log(tem(arr,80)) 
console.log(arr.includes(9))