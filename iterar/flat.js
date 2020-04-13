/* retorna um novo array com todos os elementos de um sub-array concatenados de forma
recursiva de acordo com a profundidade especificada(depth)
*/

const arr = [1,2,[3,4]];

arr.flat();
// [1,2,3,4]

const idades = [20,34,[35,70,[60,50]]];
idades.flat(2);
// [20,34,35,70,60,50]