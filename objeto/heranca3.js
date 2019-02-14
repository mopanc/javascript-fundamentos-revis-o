const pai = {nome: 'Pedro', corCabelo: 'Preto'}
// constante pai criada com os seus dois atributos

const filha1 = Object.create(pai)// a filha1 foi criada com os mesmos atributos do pai
filha1.nome = 'Ana' //aqui atribuimos o atributo nome a filha1
console.log(filha1.corCabelo)//ao imprimir, a filha1 tem cabelo preto

const filha2 = Object.create(pai, { //na filha2 criamos um objecto com os mesmos atributos do pai, mas criamos outro a atribuir o valor nome, inalteravel
    nome: {value : 'Bia', writable: false, enumerable: true }
}) //valor bia com algumas propriedades

console.log(filha2.nome)//ao imprimir a filha2 é a bia
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
// aqui não vai obedecer a alteraçao do nome, vai manter a bia, mas vai buscar o atributo do pai cabelo preto
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`por herança: ${key}`)
}