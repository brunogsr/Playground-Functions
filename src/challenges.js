// Desafio 1 - Crie a função compareTrue
// const girafa = true;
// const elefante = true;
// const macaco = false;

function compareTrue(parametroA, parametroB) {
  if (parametroA === true && parametroB === true){
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
function highestCount(numeros){
let maiorNumero = Math.max(...numeros)
let resultado = 0

  for(index = 0; index < numeros.length; index += 1){
    if (maiorNumero === numeros[index]){
    resultado += 1
    }
  }
  return resultado
}
highestCount([1, 2, 3, 6, 6])





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
  for (let index = 0; index < numeros.length; index += 1){
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
function encode(stringToEncode){
    const vogais = 'aeiou';
    let resultado = '';
    for(let index = 0; index < stringToEncode.length; index += 1){
        if (vogais.indexOf(stringToEncode[index]) !== -1){
          if (stringToEncode[index] === 'a') {
            resultado += '1'
          } else if (stringToEncode[index] === 'e') {
            resultado += '2'
          } else if (stringToEncode[index] === 'i') {
            resultado += '3'
          } else if (stringToEncode[index] === 'o') {
            resultado += '4'
          } else if (stringToEncode[index] === 'u') {
            resultado += '5'
          }
      } else{
        resultado += stringToEncode[index]
      }
    }
    return resultado
  }
function decode(stringToDecode) {
  let vogaisNumerais = '12345';
  let resultado = '';
  for(let index = 0; index < stringToDecode.length; index += 1){
    if(vogaisNumerais.indexOf(stringToDecode[index]) !== -1){
      if (stringToDecode[index] === '1'){
        resultado += 'a'
      } else if(stringToDecode[index] === '2'){
        resultado += 'e'
      } else if(stringToDecode[index] === '3'){
        resultado += 'i'
      } else if(stringToDecode[index] === '4'){
        resultado += 'o'
      } else if(stringToDecode[index] === '5'){
        resultado += 'u'
        }
      } else{
        resultado += stringToDecode[index]
      }
    
  }
  return resultado
}


// Desafio 10 - Crie a função techList

function techList(tecnologias, nome) {
  let techAndName = [];
  let techOrganizado = tecnologias.sort();
  
  for (let index = 0; index < techOrganizado.length; index += 1){
    techAndName.push({tech: techOrganizado[index], name: nome});
  }
  return techAndName
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))

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
