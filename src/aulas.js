"use strict";
// ts é bom para organizar e usar em documentação
Object.defineProperty(exports, "__esModule", { value: true });
let estaChovendo = false;
let idade = 27;
let altura = 1.63;
let nome = 'Bianca Semedo';
console.log(nome);
const colegas = ['Lucas', 'Bianca'];
const tecnologias = ['html', 'css', 'js'];
const notas = [7, 9, 5, 8]; // não dá pra editar com o push, por isso é readonly
// Cupula:
const listas = ['Bianca', true, 21]; // já permite ter mais de uma forma dentro de um array
// Union Types (|)
let idadeDaAna = 25;
idadeDaAna = '25 anos';
// Any (não é bom usar muito se não mais vale usar o js puro)
let dadosDaApi;
dadosDaApi: 10;
dadosDaApi: true;
dadosDaApi: [1, 2, 3];
dadosDaApi: 'string';
let dadosDaApi;
dadosDaApi: 10;
dadosDaApi: true;
dadosDaApi: [1, 2, 3];
dadosDaApi: 'string';
//# sourceMappingURL=aulas.js.map