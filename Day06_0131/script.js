'use strict'
// 1行目に記載している 'use strict' は削除しないでください


line("worming up1"); //---------------------------------------------
/**
 * @param {number} ??? - 1 番目の数字
 * @param {number} ??? - 2 番目の数字
 * @returns {"X は Y と等しい" | "X は Y より小さい" | "X は Y より大きい"} 与えられた 2 つの数字の比較結果
 */
// ここに関数を定義しましょう
function compareTwoNumbers() {
  
}

let actual = compareTwoNumbers(1, 1);
let expected = "1 は 1 と等しい";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = compareTwoNumbers(3, 4);
expected = "3 は 4 より小さい";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// 期待値が "X は Y より大きい" になるテストを書いてみましょう



line("conditionals-cont 応用1"); //---------------------------------------------
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

actual = or(true, true);
expected = true;

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


line("conditionals-cont 応用2"); //---------------------------------------------
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




line("TDD - Nightmare 😈"); //---------------------------------------------
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
 * @param {number} number - 数値。その名前がアルファベットの形で返ることになる
 * @returns {number} 与えられた数値をアルファベットで記した時の名前
 */
// ここにコードを書きましょう
//      100 => one handred
//    1,000 => one thousand
//  100,000 => one hundred thousand
//1,000,000 => one million

// const str = "あいうえおかきくけこ";

// //先頭５文字
// const strHead  = str.slice( 0, 5 );   // -> "あいうえお"
// const strHead2 = str.substr( 0, 5 );  // -> "あいうえお"

// //末尾５文字
// const strFoot  = str.slice( -5 );      // -> "かきくけこ"
// const strFoot2 = str.substr( -5, 5 );  // -> "かきくけこ"

const englishNum = {
  0: "zero", 1: "one", 2: "two" , 3:"three", 4: "four", 5: "five", 6: "six", 7: "seven",
  8: "eight", 9: "nine", 10: "ten", 11:"eleven", 12: "tweleve", 13: "thirteen", 14: "fourteen",
  15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty" ,
  30: "thirty", 40: "fourty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"
}

const getHandredNum = splitNum => {
  let resNumName = "";
  //百の位を取得
  const handredNum = Math.floor(splitNum / 100);
  if (handredNum > 0) {
    resNumName = " " + englishNum[handredNum] + " handred";
  }
  //十の位を取得
  const teenNum = splitNum - handredNum * 100;
  if (teenNum > 0 && teenNum < 20) {
    resNumName += " " + englishNum[teenNum];
  } else {
    const tyNum = Math.floor(teenNum / 10 ) * 10;
    //一の位を取得
    const lastNum = teenNum - tyNum;
    //console.log(teenNum, tyNum, lastNum);
    if (tyNum > 0) {
      resNumName += " " + englishNum[tyNum];
    }
    if (lastNum > 0) {
      resNumName += " " + englishNum[lastNum];
    }
  }
  return resNumName.trim();
}

console.log(getHandredNum(123));
console.log(getHandredNum(6));
console.log(getHandredNum(57));
console.log(getHandredNum(408));
console.log(getHandredNum(999));
console.log(getHandredNum(300));

const getNumberName = number => {
 
  const unitName = ["", "thousand", "million", "billion", "trillion"]

  //num.toLocaleString();
  //String();
  //Array.reverse()




  return englishNum[number];
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
actual = getNumberName(16);
expected = "sixteen";
test(expected, actual);
