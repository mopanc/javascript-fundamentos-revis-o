var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

//nesta situação  numero 1 é mais abrangente que numero 2, ou seja o numero dentro do escopo prevalece, ele vai atribuir a numero o valor 2