// retorna novo array como map e executa um flat de profundidade 1

const arr = [1,2,3,4];

arr.flatMap(value => [[value*2]]);
// [[2], [4], [6], [8]]
// multiplicou todos os valores por 2 e fez um flat de nivel 1
