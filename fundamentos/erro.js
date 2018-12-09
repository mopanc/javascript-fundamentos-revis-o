function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) { //criamos uma funçao e mandamos imprimir em letra grande
    try { // repara que acima temos name e la em baixo temos nome, isso vai gerar um erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // ao tentar executar com o try, se tudo estiver certo, ele executa o que mandamos
        tratarErroELancar(e) // se tiver erro enva para o catch que vai direcionar para a funçao acima e enviar a mensagem de erro que quisermos
    }finally { // o finally vai dar o final, seja detetando o erro ou não.
        console.log('final')

    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)