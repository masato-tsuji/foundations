'use strict'
// 1行目に記載している 'use strict' は削除しないでください


//---------------------------------------------
/*
ナイトメア
*/

//reduce　=> 配列を１つずつ取り出す　 concat => 配列の末尾に追加
//https://qiita.com/shizen-shin/items/7552b36d24db3f2d0b94


let flatten = arr => arr.reduce((newArr,elem) => {
  return  newArr.concat(elem)
}, [] )


console.log(
    flatten([
      [1, 2, 3],
      [4, 5, 6],
    ])
  ); // [1, 2, 3, 4, 5, 6]
  
  console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
  console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]


