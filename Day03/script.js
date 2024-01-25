'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("---------- warming up1 ----------");
function greeting(name) {
  return "Hello, " + name + "!";
}

// テスト
console.log(greeting("Kana")); // => "Hello, Kana!"
console.log(greeting("Kimiko")); // => "Hello, Kimiko!"


console.log("---------- warming up2 ----------");
function average2(num1, num2) {
  return (num1 + num2) / 2;
}

console.log(average2(2, 4));  // => 3


console.log("---------- oyo1 ----------");
console.log(Number.isInteger(5 / 2));


console.log("---------- oyo2 ----------");


console.log("---------- oyo3 ----------");
//残余引数
function getGreatestValue(...args) {
  console.log(args);
}

console.log(getGreatestValue(10, 15)); // 15 を表示
console.log(getGreatestValue(15, 10)); // 15 を表示
console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示


console.log("---------- Nightmare ----------");
//reduce　=> 配列を１つずつ取り出す　 concat => 配列の末尾に追加
//https://qiita.com/shizen-shin/items/7552b36d24db3f2d0b94

const flatten = arr => arr.reduce((newArr,elem) => {
  return  newArr.concat(elem)
}, [] );

console.log(
  flatten([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [1, 2, 3, 4, 5, 6]
  
console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]


