const arr = [1,2,3,4,5];

arr.slice(0,2);
// [1,2] -> pega a partir do elemento 0, 2 elementos

arr.slice(2);
// [3,4,5] -> considera a partir do elemento 2 (terceiro)

arr.slice(-1);
// [5] -> apenas último elemento

arr.slice(-3)
// [3,4,5] -> 3 últimos elementos

console.log(arr);
// [ 1, 2, 3, 4, 5 ]
// o array original não é alterado