//retorna um array iterator que contem chave e valor para cada elemento do array

const arr = [1,2,3,4];

const arrIterator = arr.entries();
//pega todos os valores do array (1,2,3 e 4) e cria um interator

arrIterator.next();
// {value: [0,1] done: false}

arrIterator.next();
// {value: [1,2] done: false}

arrIterator.next();
// {value: [2,3] done: false}

arrIterator.next();
// {value: 3,4] done: true}
//true -> terminou