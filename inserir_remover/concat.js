// concatena arrays e retorna um novo. não altera os originais 

const arr = [1,2,3];
const arr2 = [4,5,6];

const novoArr = arr.concat(arr2);

console.log(arr);
// [1,2,3]

console.log(arr2);
// [4,5,6]

console.log(novoArr);
// [ 1, 2, 3, 4, 5, 6 ]
