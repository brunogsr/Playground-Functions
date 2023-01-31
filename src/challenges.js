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


// Desafio 3 - Crie a função concatName

function concatName(array) {
  const primeiroItem = array[0]
  const ultimoItemIndex = [array.length - 1]
  const ultimoItem = array[ultimoItemIndex]

return ultimoItem + ', ' + primeiroItem
}


// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties){
  resultado = (wins * 3) + ties;
  return resultado
}
// Desafio 5 - Crie a função highestCount
function highestCount(array){
  for (let index = 0; index < array.length; index++) {
     
  }
}
console.log(highestCount([1, 2, 3, 4]))

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea(base, height) {
  const triangulo = (base * height) / 2;
  return triangulo
}

function calcRectangleArea(base, height) {
  const retangulo = base * height;
  return retangulo
}

function calcAllAreas(base, height, form) {
  let resultado ='';
  if(form === 'triângulo') {
    const area = calcTriangleArea(base, height);
    resultado = 'O valor da área do triângulo é de: ' + area;
    
  }
  else if(form === 'retângulo') {
    const area = calcRectangleArea(base, height);
    resultado = 'O valor da área do retângulo é de: ' + area;
    
  }
  else{
    resultado = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
   return resultado
}
console.log(calcAllAreas(10, 50, 'triangulo'))


// function calcTriangleArea(base, height){
//   const triangulo = 
// }
// function calcRectangleArea(base, height){
//   result (base * height);
// }
// function calcAllAreas(base, height, form){
  
// }

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
