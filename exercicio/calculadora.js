function calc(modulo){
    switch(modulo){
        case "somar": return (a,b)=> a+b
        case "subtrair": return(a,b)=>a-b
        case "multiplicar": return(a,b)=>a*b
        case "dividir": return(a,b)=>a/b
        default: return " Valor invalido"
    }
}
console.log(calc("dividir")(2,3));