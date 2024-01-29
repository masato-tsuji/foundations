'use strict'
// 1行目に記載している 'use strict' は削除しないでください



separatorLine("conditionals-cont 応用1"); //---------------------------------------------
//|| 演算子を使用せずに、|| のように機能する関数 or を宣言してください。
/**
 * @param {any} ??? - １つめの被演算子
 * @param {any} ??? - ２つめの被演算子
 * @returns {any} ２つの被演算子を与えられた順番のまま || で評価したときと同じ結果
 */
// ここにコードを書きましょう
function or(bool1, bool2) {
  if (bool1) {
    return (bool1);
  } else if (bool2) {
    return (bool2);
  } else {
    return false;
  }
}

let actual = or(true, true);
let expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = or(true, false);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらに || 演算子の挙動に近づけるために、次のテストもパスするようにしてください。
actual = or("bananas", false);
expected = "bananas";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = or("", "bananas");
expected = "bananas";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


separatorLine("conditionals-cont 応用2"); //---------------------------------------------
//&& 演算子を使用せずに、&& のように機能する関数 and を宣言してください。
/**
 * @param {any} ??? - 1 つめの被演算子
 * @param {any} ??? - 2 つめの被演算子
 * @returns {any} 2 つの被演算子を与えられた順番のまま && で評価したときと同じ結果
 */
// ここにコードを書きましょう
function and(bool1, bool2) {
  if (bool1) {
    return bool2;
  } else if (!(bool1)) {
    return (bool1);
  } else {
    return (bool2);
  }
}

actual = and(true, true);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = and(true, false);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください



//さらに && 演算子の挙動に近づけるために、次のテストもパスするようにしてください。
actual = and("bananas", false);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = and("", "bananas");
expected = "";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


actual = and("bananas", "");
expected = "";
test(expected, actual);


actual = and("", false);
expected = "";
test(expected, actual);


actual = and(false, "");
expected = false;
test(expected, actual);




separatorLine("Nightmare"); //---------------------------------------------
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



