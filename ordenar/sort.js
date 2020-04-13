// ordena os elementos de um array de acordo com a condição

const arr = [1,3,2,5,4]
arr.sort();
// [1,2,3,4,5] -> ordena de forma crescente

const students = [
    {name: 'Rebecca', language: 'JavaScript', grade: 10},
    {name: 'Matheus', language: 'C#', grade: 6},
    {name: 'Vinícius', language: 'Python', grade: 8},
];

const orderedStudents = students.sort((current, next) => current.grade - next.grade);
//ordena da menor nota para a maior

console.log(orderedStudents);
/*
[
  { name: 'Matheus', language: 'C#', grade: 6 },
  { name: 'Vinícius', language: 'Python', grade: 8 },
  { name: 'Rebecca', language: 'JavaScript', grade: 10 }
]
*/

const orderedStudents2 = students.sort((current, next) => next.grade - current.grade);
//ordena da maior nota para a menor

console.log(orderedStudents2);

/*
[
  { name: 'Rebecca', language: 'JavaScript', grade: 10 },
  { name: 'Vinícius', language: 'Python', grade: 8 },
  { name: 'Matheus', language: 'C#', grade: 6 }
]
*/

