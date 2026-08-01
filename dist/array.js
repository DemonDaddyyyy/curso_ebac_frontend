const alunos = [
    { nome: 'Bianca', nota: 10 },
    { nome: 'Letícia', nota: 6 },
    { nome: 'Maria Eduarda', nota: 7 },
    { nome: 'Júlia', nota: 8 },
    { nome: 'Camilla', nota: 8.5 },
    { nome: 'Lucas', nota: 4},
    { nome: 'Felipe', nota: 4.5 },
]

const alunosAprovados = alunos.filter(aprovados => aprovados.nota >= 6)

console.log(alunosAprovados)