//retorna um array iterator que contem as chaves para cada elemento do array

const arr = [1,2,3,4];

const arrIterator = arr.keys();
//pega todas as chaves do array (0, 1, 2 e 3) e cria um interator

arrIterator.next();
// {value: 0, done: false}

arrIterator.next();
// {value: 1, done: false}

arrIterator.next();
// {value: 2, done: false}

arrIterator.next();
// {value: 3, done: true}
//true -> terminou

