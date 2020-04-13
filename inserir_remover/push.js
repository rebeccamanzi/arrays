//push -> adiciona novo elemento ao final e retorna o tamanho do array atual

const arr = ['banana', 'melancia', 'abacate'];
const arrLength = arr.push('acerola');

console.log(arrLength);
// 4 

console.log(arr);
// ['banana', 'melancia', 'abacate']

arr.push('acerola');
console.log(arr);
// [ 'banana', 'melancia', 'abacate', 'acerola', 'acerola' ]




