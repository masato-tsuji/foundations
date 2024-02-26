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


