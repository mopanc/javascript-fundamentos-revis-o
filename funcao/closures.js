//closure é um escopo criado quando uma funcao é declarada
// esse escopo permite a função acessar e manipular as variaveis externas à função

// contexto exico em ação

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())