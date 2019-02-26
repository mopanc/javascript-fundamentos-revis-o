Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acomulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acomulador = callback(acomulador, this[i], i, this)
    }
    return acomulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))