// retorna um booleano verificando se existe pelo menos 1 item que satisfaz a condição

const arr = [1,3,3,4,3];

const hasSomeEvenNumber = arr.some(value => value % 2 === 0);
// true
// verifica se existe algum número par

const students = [
    {name: 'Rebecca', language: 'JavaScript', grade: 10},
    {name: 'Matheus', language: 'C#', grade: 6},
    {name: 'Vinícius', language: 'Python', grade: 8},
];

students.some(student => student.grade >= 7);
// true
// pelo menos 1 estudante tem a nota maior que 7