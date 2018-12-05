//par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exec() {
    const saudacao = 'faalaaa' //contexto léxico 2
    return saudacao  /*ao pedirmos para retornar saudacao repara
     que a constante global acima tambem tem o mesmo nome, mas ele
      vai verificar no contexto especifico da funcao se existe essa 
      constante, existindo ja devolve, so se não existir é que vai 
      verificar no global
    */
}

//objectos são grupos aninhados de pares nome valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        local: 'rua da ribeira',
        numero: 201
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
