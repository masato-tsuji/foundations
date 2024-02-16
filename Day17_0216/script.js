'use strict'
// 1行目に記載している 'use strict' は削除しないでください



// function doubleArray(array) {
//     const resArray = [];
//     for (const num of array) {
//         resArray.push(num * 2);
//     }
//     return resArray;
// }

// test(doubleArray([1, 2, 3]), [2, 4, 6]);


// function squareArray(array) {
//     const resArray = [];
//     for (const num of array) {
//         resArray.push(num ** 2);
//     }
//     return resArray;
// }

// test(squareArray([1, 2, 3]), [1, 4, 9]);


// //関数 getGreeting を宣言してください。用意されているテストで .map メソッドがこの関数を呼び出して実行しているという点に注目してください。なお、関数自体は .map メソッドを 使わずに 定義してください。
// /**
//  * @param {string} ???
//  * @returns {string} 与えられた引数に挨拶文を追加した文字列
//  */
// function getGreeting(name) {
//     return `Hello, ${name}.`;
// }

// test(["Hana", "Sakura", "Shohei"].map(getGreeting), [
//     "Hello, Hana.",
//     "Hello, Sakura.",
//     "Hello, Shohei.",
//   ]);

// /**
//  * @param {number} ???
//  * @returns {number} 与えられた引数の絶対値
//  */
// function abs(num) {
//     if (num < 0) {
//         return -1 * num;
//     } else {
//         return num;
//     }
// }

// test([1, 2, 3].map(abs), [1, 2, 3]);
// test([-1, -2, -3].map(abs), [1, 2, 3]);
// test([-1, 2, -3].map(abs), [1, 2, 3]);


/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の各要素に 1 を足した数を要素として持つ、新しい配列
 */
// ここにコードを書きましょう
function getIncrementedNumbers(array) {
    return array.map(function(element) {
        return element + 1;
    })
}

test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

const array1 = [0, 0, 0];
test(getIncrementedNumbers(array1), [1, 1, 1]);

// 元の配列が変更されていないことを確認してください
test(array1, [0, 0, 0]);







