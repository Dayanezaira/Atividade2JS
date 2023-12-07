/*criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. */

alert("Olá pequeno(a) gafanhoto! A seguir iremos mostrar sua média geral no concurso e revelar se obteve sucesso na nota, vamos lá?!")

const students = [
    {
        name: "Larissa",
        firstNote: 7,
        secondNote: 8,
    },
    {
        name: "Angela",
        firstNote: 6,
        secondNote: 8.5
    },
    {
        name: "Marcos",
        firstNote: 5,
        secondNote: 6,
    },
    {
        name: "Daniel",
        firstNote: 7,
        secondNote: 6.5
    }
]

function average(firstNote, secondNote) {
    return (firstNote + secondNote) / 2
}

for (let item of students) {
    let result = average(item.firstNote, item.secondNote) > 7
    menssage(item, result)
}

function menssage(item, result) {
    if(result) {
        alert(`${item.name} você obteve média ${ average(item.firstNote, item.secondNote)} e teve sucesso em sua aprovação!`)
    } else {
        alert (`${item.name} você obteve média ${ average(item.firstNote, item.secondNote)} e infelizmente não atingiu a nota mínima desejada para aprovação. Seja persistente e acredite em você!`)
    }
} 