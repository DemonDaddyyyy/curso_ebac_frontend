// ts é bom para organizar e usar em documentação

let estaChovendo: boolean = false

let idade: number = 27

let altura: number = 1.63

let nome: string = 'Bianca Semedo'

console.log(nome)

const colegas: string[] = ['Lucas', 'Bianca']
const tecnologias: Array<string> = ['html', 'css', 'js']
const notas: ReadonlyArray<number> = [7,9,5,8] // não dá pra editar com o push, por isso é readonly

// Cupula:

const listas: [nome:string, estaEstudando: boolean, idade: number] = ['Bianca', true, 21] // já permite ter mais de uma forma dentro de um array


// Union Types (|)

let idadeDaAna: number | string =25
idadeDaAna = '25 anos'

// Any (não é bom usar muito se não mais vale usar o js puro)

let dadosDaApi: any;
dadosDaApi: 10
dadosDaApi:true
dadosDaApi: [1,2,3]
dadosDaApi: 'string'

// FUNÇÕES

const calculaArea2 = (base: number, altura: number): number => base * altura

