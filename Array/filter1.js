Array.prototype.filter1 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'ipad Pro', preco: 4299, fragil: true },
    { nome: 'copos', preco: 18.49, fragil: true },
    { nome: 'mesas', preco: 599, fragil: false }
]

const produtosCaros = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter1(produtosCaros).filter1(fragil))