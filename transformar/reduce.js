// retorna novo tipo de dado iterando cada posição de um array

const arr = [1,2,3,4,5];

arr.reduce((total, value) => total += value, 0);
// 15 
// primeiro argumento: o que vai retornar
// segundo argumento: cada elemento do array 
// 0 -> tipo que será retornado (numero), valor inicial

const students = [
    {name: 'Rebecca', language: 'JavaScript', grade: 10},
    {name: 'Matheus', language: 'C#', grade: 6},
    {name: 'Vinícius', language: 'Python', grade: 8},
];

const average = students.reduce((totalGrades, student) => totalGrades += student.grade, 0) / students.length;
console.log(average);
// 8 -> média das notas

const names = students.reduce((studentsNames, student) => studentsNames += student.name + ' ', '');
console.log(names);
// Rebecca Matheus Vinícius 