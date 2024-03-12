'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// console.log("基礎コース序盤の演習を全力でやってみよう！");
// console.log("-- Day-2 関数入門 基礎5");
// greeting という名前の関数を宣言しましょう。


// function greeting(name) {
//     return `Hello, ${name}!`;
// }


const greeting = name => `Hello, ${name}!`;


// テスト
test(greeting("Alex"), "Hello, Alex!");
test(greeting("Bob"), "Hello, Bob!");



// console.log("-- Day-4 ウォーミングアップ1");

// isMultipleOfThree という名前の関数を宣言しましょう。
// 引数の数字が 3 の倍数であれば true、
// そうでなければ false を返してください。

const isMultipleOfThree = num => !(num % 3);

// テスト
test(isMultipleOfThree(6), true);
test(isMultipleOfThree(10), false);



line ("2024/3/12"); // ---------------------------------------------


const obj = { a: 3, b: 5, c: 6, d: 5, e: 2 };


// 特定の値を持つキーを抽出
const findKeys = (obj, target) => {
  const keys = Object.keys(obj);
  const vals = Object.values(obj);
  return keys.filter((elm, index) => vals[index] === target);
}



const findKeysA = (obj, target) => {
  const keys = Object.keys(obj);
  const vals = Object.values(obj);
  return keys.filter((...args) => vals[args[1]] === target);
}


const findKeysB = (obj, target) => {
  return  Object.entries(obj)
                .filter((elm) => elm[1] === target)
                .map((elm) => elm[0]);
}


console.log(findKeysA(obj, 5));  // ["b", "d"]
console.log(findKeysB(obj, 5));  // ["b", "d"]



// MDNのxは一度しか評価されないという意味

let i = 0;

function inc() {
  return ++i;
}

const list = [1, 2, 3];

list[inc()] = list[inc()] + 1;  // [1, 4, 3]
list[inc()] += 1; // [1, 3, 3]
console.log(list);


const isDring = age => {
  console.log(age < 20 ? "飲酒不可" : "飲酒可能");
}

isDring(20);
isDring(19);




