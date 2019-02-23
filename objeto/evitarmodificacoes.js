//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

/*nestas centeças de codigo nós dissemos para atribuir um nome ao produto
ou seja vai alterar de qualquer para borracha
pedimos para acrescentar uma descrição e isso o preventExtensions não vai permitir
e pedimos para eleminar a tag, e ele elimina
imprimindo ele devolve borracha a 1.99 */


//Object.seal

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

/* selar o objeto não deixa eliminar, nem acrescentar atributos nem parametros aos objetos, 
apenas alterar os existentes */

//Object.freeze = selado + valores constantes



