function teste1(num) {
    if(num > 7)
        console.log(num)

    console.log('final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {//cuidado com ; nas estruturas de controle ele vai considerar uma sentença vazia e vai aplicar a sentença vazia
        console.log(num)
    } //codigo errado
}

teste2(6)
teste2(8)

