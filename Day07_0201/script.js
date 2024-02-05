'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//line(""); //---------------------------------------------




const carBrands = ["Toyota", "Honda", "Mazda", "Subaru"];

// 調べてみよう！

// 配列の最後の要素を削除
carBrands.pop();
console.log(carBrands);

// 配列の最初に要素を追加
// "Suzuki" を追加
carBrands.unshift("Suzuki");
console.log(carBrands);

// 配列の最初から要素を削除
carBrands.shift();
console.log(carBrands);

// 二つの配列を結合（carBrands と addBrands）
const addBrands = ["Suzuki", "Subaru"]
const newCarBrands = carBrands.concat(addBrands);
console.log(newCarBrands);


line("TDD - Nightmare 😈"); //---------------------------------------------
//関数 mySort を宣言してください。ビルトインの sort メソッドを使わずに実装してください。
//アドバイス： 配列を並び替える方法はたくさんあります。好きな方法を選んでみましょう！

/**
 * @param {Array<number>} ??? - 数字の配列
 * @returns {Array<number>} 与えられた配列の要素を昇順に並べた新しい配列
 */
function mySort() {
    // ここにコードを書きましょう.
  }
  
  let arrayToSort = [5, 4, 3, 2, 1];
  
  actual = mySort(arrayToSort);
  expected = [1, 2, 3, 4, 5];
  
  // 正しい結果を返すことを確認する
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
  }
  
  // 元の配列が変更されていないことを確認する
  if (JSON.stringify(arrayToSort) === JSON.stringify([5, 4, 3, 2, 1])) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd("Result:");
  }
  
  // ここにテストを書いてください