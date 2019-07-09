//com promises
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//Recurso es8
//simplificar o recurso de promises...

let obterAlunos = async () => {
    turmaA = await getTurma('A')
    turmaB = await getTurma('B')
    turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} //retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))