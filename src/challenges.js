// Desafio 1 - Crie a função compareTrue
// const girafa = true;
// const elefante = true;
// const macaco = false;

function compareTrue(parametroA, parametroB) {
  if (parametroA === true && parametroB === true) {
    return true;
  }

  return false;
}

// Desafio 2 - Crie a função splitSentence

function splitSentence(phrase) {
  return phrase.split(' ');
}

// const splitSentence = (phrase) => phrase.split(' ');

// Desafio 3 - Crie a função concatName

function concatName(array) {
  const primeiroItem = array[0];
  const ultimoItemIndex = [array.length - 1];
  const ultimoItem = array[ultimoItemIndex];

  return `${ultimoItem}, ${primeiroItem}`;
}

// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  resultado = (wins * 3) + ties;
  return resultado;
}
// Desafio 5 - Crie a função highestCount
function highestCount(array) {
  for (let index = 0; index < array.length; index += 1) {

  }
}


// console.log(highestCount([1, 2, 3, 4]));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea(base, height) {
  const triangulo = (base * height) / 2;
  return triangulo;
}

function calcRectangleArea(base, height) {
  const retangulo = base * height;
  return retangulo;
}

function calcAllAreas(base, height, form) {
  let resultado = '';
  if (form === 'triângulo') {
    const area = calcTriangleArea(base, height);
    resultado = `O valor da área do triângulo é de: ${area}`;
  } else if (form === 'retângulo') {
    const area = calcRectangleArea(base, height);
    resultado = `O valor da área do retângulo é de: ${area}`;
  } else {
    resultado = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return resultado;
}
console.log(calcAllAreas(10, 50, 'triangulo'));

// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  const distancia1 = Math.abs(mouse - cat1);
  const distancia2 = Math.abs(mouse - cat2);
  if (distancia2 < distancia1) {
    return 'cat2';
  } if (distancia1 < distancia2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(numeros) {
  const resultado = [];
  for (let index = 0; index < numeros.length; index += 1) {
    const divisao3 = numeros[index] % 3 === 0;
    const divisao5 = numeros[index] % 5 === 0;
    // console.log(divisao3, divisao5)
    if (divisao3 && divisao5 === true) {
      resultado.push('fizzBuzz');
    } else if (divisao5 === true) {
      resultado.push('buzz');
    } else if (divisao3 === true) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

fizzBuzz([15, 10, 3, 5, 7]);
// Desafio 9 - Crie a função encode e a função decode
function encode(string1){
    const vogais = 'aeiou';
    let string2 = '';
    for(let index = 0; index < string1.length; index += 1){
        if (vogais.indexOf(string1[index]) !== -1) {
          if (string1[index] === 'a') {
            string2 += '1'
          } else if (string1[index] === 'e') {
            string2 += '2'
          } else if (string1[index] === 'i') {
            string2 += '3'
          } else if (string1[index] === 'o') {
            string2 += '4'
          } else if (string1[index] === 'u') {
            string2 += '5'
          }
      } else {
        string2 += string1[index]
      }
    }
    return string2
}
function decode(string1) {
  let vogaisNumerais = '12345';
  let string2 = '';
  for(let index = 0; index < string1.length; index += 1){
    if(vogaisNumerais.indexOf(string1[index]) !== -1){
      if (string1[index] === '1'){
        string2 += 'a'
      } else if(string1[index] === '2'){
        string2 += 'e'
      } else if(string1[index] === '3'){
        string2 += 'i'
      } else if(string1[index] === '4'){
        string2 += 'o'
      } else if(string1[index] === '5'){
        string2 += 'u'
        }
      } else {
        string2 += string1[index]
      }
    
  }
  return string2
}




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
