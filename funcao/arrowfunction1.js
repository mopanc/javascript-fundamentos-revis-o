let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //o return está implicito
console.log(dobro(Math.PI))

let ols = function () {
    return 'olá'
}

ola = () => 'olá'
ola = _ => 'olá' //possui um parametro
console.log(ola())