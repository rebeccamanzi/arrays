const arr = [1,2,3,4,5];

arr.forEach((value, index) => {
    console.log(`Elemento # ${index}: ${value}`);
});

/*
Elemento # 0: 1
Elemento # 1: 2
Elemento # 2: 3
Elemento # 3: 4
Elemento # 4: 5
*/

//value -> cada valor do arr
//index -> posição 

const frutas = ['morango', 'uva', 'banana', 'abacaxi'];

frutas.forEach(fruta => console.log(fruta));

/*
morango
uva
banana
abacaxi
*/

frutas.forEach((fruta, index, arr) => console.log(index,fruta,arr));

/* vai exibir alem da fruta e o index, o array todo:
0 morango [ 'morango', 'uva', 'banana', 'abacaxi' ]
1 uva [ 'morango', 'uva', 'banana', 'abacaxi' ]
2 banana [ 'morango', 'uva', 'banana', 'abacaxi' ]
3 abacaxi [ 'morango', 'uva', 'banana', 'abacaxi' ]
*/