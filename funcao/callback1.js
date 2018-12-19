const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

//o callback vai a cada elemento imprime e volta para ver se ha mais
//como podemos ver ele imprime cada elemento e cada indice