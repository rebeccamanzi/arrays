//retorna um array iterator que contem os valores para cada elemento do array
//igual ao key, mas pega os valores no lugar das chaves

const arr = [1,2,3,4];

const arrIterator = arr.values();
//pega todos os valores do array (1,2,3 e 4) e cria um interator

arrIterator.next();
// {value: 1, done: false}

arrIterator.next();
// {value: 2, done: false}

arrIterator.next();
// {value: 3, done: false}

arrIterator.next();
// {value: 4, done: true}
//true -> terminou