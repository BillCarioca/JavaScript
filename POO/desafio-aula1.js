const { Console } = require('console')
const readline = require('readline')

// objeto rl
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
init()
function init(){
   
        console.log('\n***** CALCULADORA SUPIMPA ******\n')
        console.log('1 - soma')
        console.log('2 - subtração')
        console.log('3 - divisão')
        console.log('4 - multiplicação')
        console.log('0 - sair')  
        rl.question('escolha a opção:',calculadora)  
        
    
    
    rl.close()
}

function calculadora(opcao){
    var valorA = "1"
    var valorB = "3"
    
    switch(opcao){
        case "1": return parseInt(valorA)+parseInt(valorB)
        case "2": return valorA-valorB
        case "3": return valorA/valorB
        case "4": return valorA*parseFloat(valorB)
        case "0": return null
        default: {
            Console.log('valor invalido')
            return ''
        }
    }
}