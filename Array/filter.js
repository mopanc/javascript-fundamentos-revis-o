//developer.mozila.org

const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'ipad Pro', preco: 4299, fragil: true },
    { nome: 'copos', preco: 18.49, fragil: true },
    { nome: 'mesas', preco: 599, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

const produtosCaros = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(produtosCaros).filter(fragil))

//o filter so deixa passar os elementos da array que nos lhe dissermos para deixar
