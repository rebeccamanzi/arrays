//push -> remove elemento do início e o retorna

const arr = ['banana', 'melancia', 'abacate'];
const removedItem = arr.shift();

console.log(removedItem);
// 'banana'

console.log(arr);
// ['melancia', 'abacate']