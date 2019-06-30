// let e const
{
    var a = 2 //var não tem escopo de bloco, pertence ao escopo global portanto pode ser acessada de fora deste bloco
    let b = 3 //let para poder ser acessado te que ser dentro do bloco pois se chamar fora vai dar erro
    console.log(b)
}

console.log(a)


//template String
//com uma string delimitada por crases`` é permitido chamar variaveis através do dollar ${} e chaves
const produto = 'ipad'
console.log(`${produto} è caro!`)

//Destructuring
const [l, e, ...tras] = "cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = {nome: 'Ana', idade: 9 }
console.log(i, nome) //aqui temos um exemplo como alteramos a variavel idade para i e funciona igual desestruturamos