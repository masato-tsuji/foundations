'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual;
let expected;

line("loop 応用2"); //---------------------------------------------
//関数 deepCount を宣言してください。
/**
 * @param {Array<any>} deepArr
 * @returns {number} 与えられた配列の「要素」の数。このとき、入れ子になった配列がある場合は、その配列内の要素も一つ一つカウントすること。
 */

const deepCount = (deepArr, accCnt = 0) => deepArr.reduce((accum, currentVal) => {
  //取り出した値が配列なら再帰、数値ならflatArrに追加
  
  if (Array.isArray(currentVal)) {
    deepCount(currentVal, accCnt);
  } else {

    accCnt++;
    console.log(currentVal, accCnt);
    return accCnt;
  }
  console.log(accCnt);
  //return accCnt;
}, []);





actual = deepCount([1]);
expected = 1;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = deepCount([1, 3]);
expected = 2;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = deepCount([1, 3, [2, 4]]);
expected = 4;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = deepCount(["a", "b", ["c", ["d", "e", ["f"]]]]);
expected = 6;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。



line("TDD - Nightmare 😈"); //---------------------------------------------
//関数 mySort を宣言してください。JavaScript のビルトインメソッド sort は使わないでください。
//アドバイス： 配列を並び替える方法はたくさんあります。自分の好きな方法を選んでください。
//これまでに同じような関数を書いたことがある人は違う方法にトライしましょう。

/**
 * @param {Array<number>} 数値型の要素を持つ配列
 * @returns {Array<number>} 与えられた配列の数字が昇順に並び替えられた配列
 */
function mySort(numbers) {
  // ここにコードを書きましょう。
  const sortArr = numbers.reduce((accVals, curVal) => {
    //現在値が配列の中の最大値以上であれば最後尾に追加
    if (Math.max(...accVals) <= curVal) accVals.push(curVal);
    //配列内を走査し現在値を超えたらその前方に追加
    for (let i = 0; i < accVals.length; i++) {
      if (accVals[i] > curVal) {
        accVals.splice(i, 0, curVal);
        break;
      }
    }
    return accVals;
  }, []);
  return sortArr;
}

let numbers = [5, 4, 3, 2, 1];

actual = mySort(numbers);
expected = [1, 2, 3, 4, 5];

// 正しい結果を返すことを確認する
test(expected, actual);

// 元の配列が変更されていないことを確認する
if (JSON.stringify(numbers) === JSON.stringify([5, 4, 3, 2, 1])) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
numbers = [3, 4, 5, 2, 1];

actual = mySort(numbers);
expected = [1, 2, 3, 4, 5];
// 正しい結果を返すことを確認する
test(expected, actual);


  line("Nightmare2 😈"); //---------------------------------------------
//関数 flattenDeep を宣言してください。配列の配列（何段階も深く入れ子になっている場合もある）
//を引数として受け取り、平坦化された、つまり、入れ子のない配列（＝ 1 次元配列）を新しく作って返します。

/**
 * @param {Array<any>} 数値型の要素を持つ多次元配列
 * @param {Array<any>} 一次元配列を記憶するための数値型の要素を持つ配列
 * @returns {Array<any>} 与えられた配列を 1 次元配列に平坦化した配列
 */
const flattenDeep = (multiArr, flatArr = []) => multiArr.reduce((accum, currentVal) => {
  //取り出した値が配列なら再帰、数値ならflatArrに追加
  if (Array.isArray(currentVal)) {
    flattenDeep(currentVal, flatArr);
  } else {
    return flatArr.push(currentVal);
  }
  return flatArr;
}, []);

//テスト
expected = [1, 2, 3, 4, 5, 6];
actual = flattenDeep([1, 2, 3, [4, 5, 6]]);

// 正しい結果を返すことを確認する
test(expected, actual);

expected = [1, 2, 3, 4, 5, 6];
actual = flattenDeep([[1, 2, 3], [4, 5, 6],]);

// 正しい結果を返すことを確認する
test(expected, actual);

expected = [1, 2, 3, 4, 5, 6];
actual = flattenDeep([[1], [2], [3], [4, 5, 6]]);

// 正しい結果を返すことを確認する
test(expected, actual);

expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
actual = flattenDeep([[1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]]);

// 正しい結果を返すことを確認する
test(expected, actual);




