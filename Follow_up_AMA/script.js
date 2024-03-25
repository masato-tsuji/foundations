'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// console.log("基礎コース序盤の演習を全力でやってみよう！");
// console.log("-- Day-2 関数入門 基礎5");
// greeting という名前の関数を宣言しましょう。


// function greeting(name) {
//     return `Hello, ${name}!`;
// }


// const greeting = name => `Hello, ${name}!`;


// // テスト
// test(greeting("Alex"), "Hello, Alex!");
// test(greeting("Bob"), "Hello, Bob!");



// console.log("-- Day-4 ウォーミングアップ1");

// isMultipleOfThree という名前の関数を宣言しましょう。
// 引数の数字が 3 の倍数であれば true、
// そうでなければ false を返してください。

// const isMultipleOfThree = num => !(num % 3);

// // テスト
// test(isMultipleOfThree(6), true);
// test(isMultipleOfThree(10), false);


line("3/19");   //------------------------------------------------



// //for..of ループ-基礎演習2.
// /**
//  * .reduceメソッドを使用
//  * @param {Array<number>} array 数値型の要素を持つ配列
//  * @returns {number} 与えられた配列の全ての数字をかけ合わせた積 (product)
//  */
// const productArray = array => array.reduce((accum, current) => {
//     console.log(accum, current);
//     return accum * current;
// });

// test(productArray([1, 2, 3, 4]), 24);
// test(productArray([5, 2, 7, -2]), -140);



//for..ofループ-応用1.
//三項演算子
/**
 * @param {Array<string>} arr「痛む場所」が入った配列
 * @returns {string} お医者さんに診てもらうときに言うセリフ
 */


// const callADoctor = arr => {
//     let names = "";
//     if (arr.length === 1) {
//         return `先生、${arr}が痛いんです！`
//     } else {
//         for (const elm of arr) {
//              names += names === "" ? elm : `と${elm}`;
//         }
//         return `先生、${names}が痛いんです！`
//     }

// }
// function getFee(isMember) {
//     return isMember ? '$2.00' : '$10.00';
//   }



// test(callADoctor(["頭"]), "先生、頭が痛いんです！");
// test(callADoctor(["肩"]), "先生、肩が痛いんです！");
// test(callADoctor(["頭", "肩", "膝", "足の指"]), "先生、頭と肩と膝と足の指が痛いんです！");
// test(callADoctor(["腰", "膝", "足首", "手首", "お腹"]), "先生、腰と膝と足首と手首とお腹が痛いんです！");


line("3/21");   //------------------------------------------------



// クロージャを使って解いてみましょう！
//　assessment-3の問2と似ていますが、期待値を少しだけ変更しています。
// testをPASSさせるようにコードを書きましょう。
// (今回の問題ではグローバル変数を定義しないでください）


// const arrayItem = (() => {
//     const resArray = [];
//     return {
//         value() {
//             return resArray;
//         },
//         append(item) {
//             resArray.push(item);
//         },
//         remove(item) {
//         const removeIndex = resArray.indexOf(item);
//             if (removeIndex > -1) {
//                 resArray.splice(removeIndex, 1);
//             }
//         }
//     }
// })();




// // ここにコードを書きましょう

// test(getItemsInRefrigerator(), {});

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), {milk: 1});

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), {milk: 1, juice: 1});

// putItemInRefrigerator("banana");
// test(getItemsInRefrigerator(), {milk: 1, juice: 1, banana: 1});

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), {milk: 1, juice: 2, banana: 1});

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), {juice: 2, banana: 1});

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), {juice: 2, banana: 1});

// removeItemFromRefrigerator("juice");
// test(getItemsInRefrigerator(), {juice: 1, banana: 1});



// line ("2024/3/12"); // ---------------------------------------------


// const obj = { a: 3, b: 5, c: 6, d: 5, e: 2 };


// // 特定の値を持つキーを抽出
// const findKeys = (obj, target) => {
//   const keys = Object.keys(obj);
//   const vals = Object.values(obj);
//   return keys.filter((elm, index) => vals[index] === target);
// }



// const findKeysA = (obj, target) => {
//   const keys = Object.keys(obj);
//   const vals = Object.values(obj);
//   return keys.filter((...args) => vals[args[1]] === target);
// }


// const findKeysB = (obj, target) => {
//   return  Object.entries(obj)
//                 .filter((elm) => elm[1] === target)
//                 .map((elm) => elm[0]);
// }


// console.log(findKeysA(obj, 5));  // ["b", "d"]
// console.log(findKeysB(obj, 5));  // ["b", "d"]



// // MDNのxは一度しか評価されないという意味

// let i = 0;

// function inc() {
//   return ++i;
// }

// const list = [1, 2, 3];

// list[inc()] = list[inc()] + 1;  // [1, 4, 3]
// list[inc()] += 1; // [1, 3, 3]
// console.log(list);


// const isDring = age => {
//   console.log(age < 20 ? "飲酒不可" : "飲酒可能");
// }

// isDring(20);
// isDring(19);






line ("3/21"); // ---------------------------------------------


// const arrayItem = (() => {
//   const resArray = [];
//   return {
//     value() {
//       return resArray;
//     },
//     append(item) {
//       let cnt = 5;
//       resArray.push(item);
//     },
//     remove(item) {
//       const removeIndex = resArray.indexOf(item);
//       if (removeIndex > -1) {
//         resArray.splice(removeIndex, 1);
//       }
//     }
//   };
// })();


// // 配列の値取得
// const getItemsInRefrigerator = () => arrayItem.value();


// /**
//  * １つの渡された引数を配列に追加して返す
//  * @param {string} item - 配列に追加する文字列
//  * @returns {Array} - 引数を追加した配列
//  */
// const putItemInRefrigerator = item => arrayItem.append(item);


// /**
//  * １つの渡された引数を配列から削除（対象がない場合はそのまま返す）
//  * @param {string} item - 配列から削除する文字列
//  * @returns {Array} - 引数の文字列を削除した配列
//  */
// const removeItemFromRefrigerator = item => arrayItem.remove(item);



// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);















line ("3/25"); // ---------------------------------------------














