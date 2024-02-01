'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual;
let expected;



line("中級2"); //---------------------------------------------
//関数 myPop を宣言してください。ビルトインの .pop() メソッドを使ってはいけません。 
//アドバイス： .splice() メソッドの使用を検討してみてください。
/**
 * 与えられた配列から最後の要素を取り除き、その要素を返す
 * @param {Array<any>} arry - 配列
 * @returns {any} 与えられた配列の最後の要素を返す
 */
function myPop(arry) {
  return arry.splice(arry.length -1)[0];
}

const array = [1, 2, 3, 4];

actual = myPop(array);
expected = 4;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [1, 2, 3];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}






line("TDD - Nightmare 😈"); //---------------------------------------------
//関数 mySort を宣言してください。ビルトインの sort メソッドを使わずに実装してください。
//アドバイス： 配列を並び替える方法はたくさんあります。好きな方法を選んでみましょう！
console.log("1/31と同じ問題なので違う方法を検討する・・・");

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