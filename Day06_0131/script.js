'use strict'
// 1行目に記載している 'use strict' は削除しないでください





kugiri("Nightmare"); //---------------------------------------------
//関数 getNumberName を宣言してください。例を下に挙げます。
/*
-123: negative one hundred twenty three
...
0: zero
1: one
2: two
...
10: ten
...
100: one hundred
...
1345: one thousand three hundred forty five
*/

/**
 * @param {number} ??? - 数値。その名前がアルファベットの形で返ることになる
 * @returns {number} 与えられた数値をアルファベットで記した時の名前
 */
// ここにコードを書きましょう
const getNumberName = number => {
    
}






actual = getNumberName(0);
expected = "zero";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getNumberName(1345);
expected = "one thousand three hundred forty five";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください



