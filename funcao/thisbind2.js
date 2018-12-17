function Pessoa() { //duas possibilidades para cravar o this neste contexto
    this.idade = 0

    const self = this //criando uma constante e apartir dela acessamos para usar os atributos do suposto this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //usando o bind
}

new Pessoa