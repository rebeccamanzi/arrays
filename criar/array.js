// formas de criar um array

const arr1 = [1,2,3];
// [1,2,3]
const arr2 = new Array(1,2,3);
// [1,2,3]
const arr3 = Array.of(1,2,3);
// [1,2,3]
const arr4 = Array(3);
// empty x 3 (vai criar 3 espaços vazios)
const arr5 = Array(3,2);
// [3,2]

/*
const divs = document.querySelectorAll('div');
const arr6 = Array.from(divs);
//cria um array de divs (que, nesse caso, é um Node list)
*/

console.log("Array 1: " + arr1);
console.log("Array 2: " + arr2);
console.log("Array 3: " + arr3);
console.log("Array 4: " + arr4);
console.log("Array 5: " + arr5);



