//push -> adiciona novo elemento no início e retorna o tamanho do array atual

const arr = ['banana', 'melancia', 'abacate'];
const arrLength = arr.unshift('acerola');

console.log(arrLength);
// 4 

console.log(arr);
// ['acerola','banana', 'melancia', 'abacate']

