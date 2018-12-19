//IIFE immediately invoked function expression

(function() {
    console.log('será executado na hora')
    console.log('foge do escopo mais abrangente')
})()

//uma alternativa interessante para fugir do escopo global
// e assim que o script for lido isto é executado no imediato
