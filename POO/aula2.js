const readline = require('readline')

// objeto rl
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calcular(opcao) {
    const valorA = ''
    const valorB = ''

    switch (opcao) {
        case '1':
            resultado = soma(valorA, valorB)
            console.log(`A soma resultou em ${resultado}`)
            sair = true
            break
        case '2':
            resultado = subtracao(valorA, valorB)
            console.log(`A subtração resultou em ${resultado}`)
            sair = true
            break
        case '3':
            divisao(valorA, valorB)
            break
        case '4':
            multiplicacao(valorA, valorB)
            break
        default:
            sair = true
            break
    }
}

function start() {
    do {
        console.log('\n***** CALCULADORA SUPIMPA ******\n')
        console.log('1 - soma')
        console.log('2 - subtração')
        console.log('3 - divisão')
        console.log('4 - multiplicação')
        console.log('0 - sair')
    } while (rl.question('Selecione uma opção:', calcular) !== '0') // o bug está aqui
}

start()

function soma(valorA, valorB) {
    return valorA + valorB
}

function subtracao(valorA, valorB) {
    return valorA - valorB
}

function divisao(valorA, valorB) {
    return valorA / valorB
}

function multiplicacao(valorA, valorB) {
    return valorA * valorB
}