// Desafio 1 - Crie a função compareTrue
const girafa = true;
const elefante = true;
const macaco = false;

function compareTrue(parametroA, parametroB){
  if(parametroA === true && parametroB === true){
  return true;
}
  else{
  return false;
  }
}

// Desafio 2 - Crie a função splitSentence

function splitSentence (phrase) {
  return phrase.split(' ');
}

// const splitSentence = (phrase) => phrase.split(' ');

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 3 - Crie a função concatName

function concatName(array) {
  const primeiroItem = array[0]
  const ultimoItemIndex = array.length - 1
  const ultimoItem = array[ultimoItemIndex]

return ultimoItem + ', ' + primeiroItem
}

// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties){
  resultado = (wins * 3) + ties;
  return resultado
}
// Desafio 5 - Crie a função highestCount

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
