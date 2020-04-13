// verifica se todos os itens satisfazem a condição

const arr = [1,2,3,4,5];

const allEvenNumbers = arr.every(value => value % 2 === 0);
// false

const students = [
    {name: 'Rebecca', language: 'JavaScript', grade: 10},
    {name: 'Matheus', language: 'C#', grade: 6},
    {name: 'Vinícius', language: 'Python', grade: 8},
];

students.every(student => student.grade >= 7);
// false
// nem todos passaram (nota maior/igual a 7)