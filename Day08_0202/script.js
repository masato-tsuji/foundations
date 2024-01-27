'use strict'
// 1行目に記載している 'use strict' は削除しないでください


kugiri("Nightmare1"); //---------------------------------------------
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
      if (Math.max(...accVals) <= curVal) accVals.push(curVal);
      for (let i = 0; i < accVals.length; i++) {
        if (accVals[i] > curVal) {
          accVals.splice(i, 0, curVal);
          break;
        }
      }
      console.log(accVals, curVal);
      return accVals;
    }, []);
    return sortArr;
  }
  
  let numbers = [4, 5, 3, 2, 1];
  
  let actual = mySort(numbers);
  let expected = [1, 2, 3, 4, 5];
  
  // 正しい結果を返すことを確認する
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
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
