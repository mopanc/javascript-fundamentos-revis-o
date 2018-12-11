function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do { //a diferença é que ele obriga sempre a uma execução mesmo que ja se começe com -1
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`) //atenção as aspas
} while (opcao != -1)

console.log('Até a proxima')