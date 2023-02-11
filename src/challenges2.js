// Desafio 11 - Crie a função generatePhoneNumber

// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate
function hydrate (string){
let resultado = 0;
let calculo = string.match(/\d/g);

  for(index = 0; index < calculo.length; index += 1){
  resultado += parseInt(calculo[index]) 
} 
    
  if (resultado === 1){
   return resultado + ' copo de água'
   } else{
    return resultado + ' copos de água'
  }
 
} 

// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'))

// receber a frase ------------
// separar todos os números das letras
// transformá-los em números fora de string
// For cada número dentro do array, somá-los
// colocá-los em uma variável resultado
// Se resultado === 1, retornar ' resultado + "copo de água"'
// senão, resultado + ' copos de água'

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};

