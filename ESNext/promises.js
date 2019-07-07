function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //o resolve chama a callback .then
        }, segundos * 1000)//o reject chama o .catch
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))//para resolver no caso de estar reject em vez de resolve

