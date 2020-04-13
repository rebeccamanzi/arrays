// altera um array adicionando novos elementos e excluindo os antigos
// não é imutável: vai alterar o array de origem
// retorna os itens removidos

const arr = [1,2,3,4,5];

arr.splice(2);
// [3,4,5] -> vai remover os 2 primeiros

console.log(arr);
// [1,2] -> os que restaram da operação de splice

arr.splice(0,0,'first');
// [] -> nenhum item removido
// na posicao 0, não remove nada, adiciona 'first'

console.log(arr);
// ["first", 1, 2] 