{
    {
        {
            {
                var sera = 'Será??'
                console.log(sera)
            }
        }
    }//a var está dentro de um conjunto de blocos e funciona tanto dentro dele como fora
}// quando se cria uma variavel fora de uma função ela é global
console.log(sera)


/* no ex: abaixo quando se define uma variavel dentro de uma função, o escopo dela
 é apenas dentro, se tentarmos aceder a essa variavel, não vai funcionar
*/

function teste() {
    var local = 123
    console.log(local)
}
teste()

//variavel só tem dois tipos de escopos, ou global que é visivel em todo lado, ou na função que só funciona dentro do escopo da função
