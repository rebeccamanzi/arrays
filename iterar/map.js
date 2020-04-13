// retorna um novo array do mesmo tamanho, iterando cada item
// não altera o array original

const arr = [1,2,3,4,5];

arr.map(value => value * 2);
// [2,4,6,8,10]

const frutas = ['morango', 'uva', 'banana', 'abacaxi'];

console.log(frutas.map((fruta, index) => `Index ${index}: fruta: ${fruta}`));

/*
  retorna um novo array e não muda o array original:
  [
  'Index 0: fruta: morango',
  'Index 1: fruta: uva',
  'Index 2: fruta: banana',
  'Index 3: fruta: abacaxi'
]
*/