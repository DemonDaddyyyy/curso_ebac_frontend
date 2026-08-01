// // // ARRAYS

// // // const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

// // // 1- FOREACH (ITERA PELO ARRAY)

// // // redesSociais.forEach(function (nomeDaRedeSocial, indece) {
// // //   console.log('#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}');
// // // });

// // // 2 - MAP (DA PARA ITERAR E MUDAR O ARRAY)

// // // const alunos = ['Gustavo', 'Amanda', 'Paula', 'Wagner']

// // // const alunos2 = alunos.map(function(itemAtual) {
// // //   itemAtual = {
// // //     nome: itemAtual,
// // //     curso: 'Frontemd'
// // //   }

// // //   return itemAtual;
// // // })

// // // console.log(alunos2)

// // // OU, POR EXEMPLO: 

// // // const numeros = [2, 4, 6]; 
// // // const dobroDosNumeros = numeros.map(function(numeroAtual) {
// // // return numeroAtual * 2; 
// // // })

// // // console.log (dobroDosNumeros)
// // // // dobro -> 4, 8, 12

// // // 3 - FIND (PROCURAR O NÚMERO DENTRO DO ARRAY - RETORNA BOOLEANS, TRUE OR FALSE)

// // // const Amanda = alunos.find(function(item) {     
// // //     return item == 'Amanda'; 
// // // }) 

// // // console.log (Amanda)
// // //     // retornará “Amanda”

// // // 4 - EVERY (VERIFICA OS VALORES DENTRO DE UM ARRAY)

// // // [2, 3, 4, 5, 6].every(function(item) {
// // //     return item > 4;
// // // }) 
// // // // retornará false, pois nem todos números são maiores que 4

// // // 5 - SOME ( some: parecido com o every, porém se apenas um item satisfazer a condição o retorno será true.)

// // // 6 - FILTER (filtra os item do array para atender a um requisito - predicado- por exemplo para filtrar os items maiores que cinco de um array)

// // // [20, 4, 2, 3, 5, 6, 10, 12].filter(function(item) {
// // //     return item > 5; 
// // // });

// // // 7 - REDUCE ( itera pelos itens do array e possibilidade retornar a agregação dos itens)

// // const nums = [10, 20, 30]; 
// // const soma = nums.reduce(function(total, itemAtual) {
// // total += itemAtual;    return total; 
// // }, 0) 
// // // 0 = valor inicial 
// // // // soma -> 60

// // // 8 - ARROW

// // // const filtraAlunosBackend2 = (alunos) => alunos.curso === 'Backend';

// // Também pode ser sem parenteses acaso seja apenas ou menos que um argumento:

// // // const filtraAlunosBackend2  => alunos.curso === 'Backend';

// // 9 - SET

// // const array = ['Bianca Semedo', 'Albus', 'Nonô', 'Albus']

// // const arrayComoSet = new Set ([...array])
// // const arraySemItemDuplicado = [...arrayComoSet]

// // console.log(arrayComoSet)
// // console.log(arraySemItemDuplicado)

// // 10 - PROMISSE - Programe de forma assíncrona 

// // const minhaPromise = new Promise(function (resolve, reject) {
// //   const deuCerto = true;

// //   if (deuCerto) {
// //     resolve('Sucesso!');
// //   } else {
// //     reject('Deu erro!');
// //   }
// // });

// // minhaPromise
// //   .then(function (resultado) {
// //     console.log(resultado); // roda se der resolve
// //   })
// //   .catch(function (erro) {
// //     console.log(erro); // roda se der reject
// //   })
// //   .finally(function () {
// //     console.log('Roda sempre, deu certo ou não');
// //   });

// //   async function buscarDados() {
// //   try {
// //     const resultado = await minhaPromise;
// //     console.log(resultado);
// //   } catch (erro) {
// //     console.log(erro);
// //   }
// // }

// IMPORTANTE: PROGRAMAÇÃO ORIENTADA A OBJETOS - IDEIA DE PROJETO: JOGO RPG