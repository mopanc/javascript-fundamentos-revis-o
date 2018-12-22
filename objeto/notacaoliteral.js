const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } //forma antiga
const obj2 = { a, b, c } //forma nova
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3) //forma antiga

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4) // forma nova

const obj5 = {
    funcao1: function() { //formula antiga
        //...
    },
    funcao2() { //formula nova
        //...
    }
}
console.log(obj5)