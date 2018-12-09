/*
v e v -> v
v e f -> f
f e v -> f
f e f -> f

op1 e op2 e op3 e op4 -> v//so sera verdadeiro se todos forem verdadeiros


v ou ? -> v
f ou v -> v
f ou f -> f

v xor v -> f // esclusivo ou
v xor f -> v
f xor v -> v
f xor f -> f

!v -> f //negação logica
!f -> v

*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^trabalho2)
    const comprarTv32 = trabalho1 != trabalho2 
    const manterSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))




