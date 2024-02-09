'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual;
let expected;

//問題１
/**
 * @param {string}  name   - 人の名前
 * @returns {string}  - あいさつ文に名前を付けて返す
 */
function greeting(name) {
  return `Hello, ${name}!`;
}

// テスト
console.log(greeting("Kana")); // => "Hello, Kana!"
console.log(greeting("Kimiko")); // => "Hello, Kimiko!"
console.log(greeting("sato")); // => "Hello, Kimiko!"


//問題２
/**
 * @param {number}  num1  -１つめの数値
 * @param {number}  num2  -２つめの数値
 * @returns {number}  - 与えられた２つの数値の平均値を返す
 */
function average(num1, num2) {
  return (num1 + num2) /2;
}

// テスト
console.log(average(1, 2)); // => 1.5
console.log(average(100, 300)); // => 200
console.log(average(-10, 50)); // => 20


//問題３
/**
 * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
 * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
 * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
 */
function describeTheWeather(season, temperature) {

  const normalComment = "この季節の平均的な気温です。";
  const abnormalComment = "この季節には珍しい気温です。";

  if (season === "春" && temperature === "暖かい") {
    return normalComment;
  } else if (season === "夏" && temperature === "暑い") {
    return normalComment;
  } else if (season === "秋" && temperature === "涼しい") {
    return normalComment;
  } else if (season === "冬" && temperature === "寒い") {
    return normalComment;
  } else {
    return abnormalComment;
  }
}
// テスト
actual = describeTheWeather("春", "暖かい");
expected = "この季節の平均的な気温です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("春", "寒い");
expected = "この季節には珍しい気温です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
actual = describeTheWeather("冬", "寒い");
expected = "この季節の平均的な気温です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("natsu", "暑い");
expected = "この季節には珍しい気温です。";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

































// line("TDD - Nightmare 😈"); //---------------------------------------------
// //関数 mySort を宣言してください。ビルトインの sort メソッドを使わずに実装してください。
// //アドバイス： 配列を並び替える方法はたくさんあります。好きな方法を選んでみましょう！

// /**
//  * @param {Array<number>} ??? - 数字の配列
//  * @returns {Array<number>} 与えられた配列の要素を昇順に並べた新しい配列
//  */
// function mySort() {
//     // ここにコードを書きましょう.
//   }
  
//   let arrayToSort = [5, 4, 3, 2, 1];
  
//   actual = mySort(arrayToSort);
//   expected = [1, 2, 3, 4, 5];
  
//   // 正しい結果を返すことを確認する
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd("Result:");
//   }
  
//   // 元の配列が変更されていないことを確認する
//   if (JSON.stringify(arrayToSort) === JSON.stringify([5, 4, 3, 2, 1])) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd("Result:");
//   }
  
//   // ここにテストを書いてください