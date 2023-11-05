function fibo(termo){
    if(termo==1){
        return 0
    }else if(termo==2){
        return 1
    }else{
        anterior = 0
        atual = 1
        for(let t=3; t<=termo;t++){
            let novoAnterior = atual
            atual+=anterior
            anterior = novoAnterior
        }
        return atual
    }
}

console.log(fibo(6))