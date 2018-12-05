const funcs = []//aqui criamos uma array vazia

for (let i = 0; i < 10; i++) { // o i é = 0  a seguir a condição e a seguir o incremento
    funcs.push(function() { //adicionamos um novo elemento no array, uma função anonima sem parametro
        console.log(i) //a função é chamar o i
    })
}

funcs [2]() // terminando o laço chamamos a função de indice 2 que deveria ser o 2
funcs [8]()// aqui deveria ser o 8

//comportamento diferente com let pois ele tem memoria e vai devolver os valores que pedirmos