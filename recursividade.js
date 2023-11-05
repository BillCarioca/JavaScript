function re(n){
    if(n>=1)
        return n + re(n-1)
    return ""
}
console.log(re(10))

function fibo(n){
    if(n<=0)return 0
    if(n===1) return 1
    return fibo(n-1)+fibo(n-2)
}

console.log(fibo(5));

function fatorial(n){
    if(n==1||n==0) return 1
    return n*fatorial(n-1)
}

console.log(fatorial(3))

function inverter(arr,novaArray){
    if (arr.length){
       novaArray.push(arr.pop())
        return inverter(arr,novaArray) 
    }
    return novaArray;
}

function inverterSTR(str){
    if (str.length) return str.at(-1) + inverterSTR(str.slice(0,-1))
    return ""
}
console.log(inverterSTR("antonio paulo"))