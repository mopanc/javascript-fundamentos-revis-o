const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor> this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //como não pode ser numeros inferiores a valor, ele abaixo acrescentou as duas leituras
console.log(sequencia.valor, sequencia.valor)