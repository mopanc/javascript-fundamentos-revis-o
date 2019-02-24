Array.prototype.forEach1 = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach1(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})