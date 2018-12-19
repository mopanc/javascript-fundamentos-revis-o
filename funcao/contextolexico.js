const valor = 'global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao() // a função carrega consigo o local onde foi definida portanto é global
}

exec()