'use strict'
// 1行目に記載している 'use strict' は削除しないでください



// const arrayOfObjects = [
//     { name: "alice", favoriteColor: "green" },
//     { name: "bob", favoriteColor: "blue" },
// ];


// //コードを追加して、テストをパスしましょう。関数は 5 行以下のコードになるよう実装してみましょう。
// function getNames(arrayObj) {
//     return arrayObj.map(function (obj) {
//         return obj.name;
//     });
// }

// function getFavoriteColors(arrayObj) {
//     return arrayObj.map(function(obj) {
//         return obj.favoriteColor;
//     });
// }


// test(getNames(arrayOfObjects), ["alice", "bob"]);
// test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);


// function evenArray(array) {
//     const resArray = [];
//     for (const elm of array) {
//         if (elm % 2 === 0) {
//             resArray.push(elm);
//         }
//     }
//     return resArray;
// }

// test(evenArray([2, 3, 4, 5, 6]), [2, 4, 6]);




// /**
//  * @param {number} ???
//  * @returns {boolean} 与えられた数値が 10 の倍数かどうか
//  */
// function isMultipleOfTen(num) {
//     return num % 10 === 0;
// }

// const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];

// test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]); // .filter メソッドの引数に isMultipleOfTen を渡しています。
// test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);

// const newArray = arrayOfNumbers.filter(function (elm) {
//     return elm > 10;
// });

// console.log(arrayOfNumbers, newArray);




// const originalArray = [2, 3, 4, 5, 6];

// // コールバック関数をアロー関数に（.filterを連結）
// const filteredArray = 
//     originalArray.filter(num => num % 2 === 0)
//                  .filter(num => num > 3);



// console.log(filteredArray); // [4, 6]


// /**
//  * @param {number} ???
//  * @returns {boolean} 与えられた数値が 10 の倍数かどうか
//  */
// // ここにコードを書きましょう

// const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];

// function isMultipleOfTen(num) {
//     return num % 10 === 0;
// }

// test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]); // .filter メソッドの引数に isMultipleOfTen を渡しています。
// test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);



/**
 * @param {string} ???
 * @returns {boolean} 与えられた文字列に母音 (a, e, i, o, u) が1つ以上含まれているか
 */
// ここにコードを書きましょう
function hasAVowel(str) {
    
    return 
}


const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]); // .filter メソッドの引数に hasAVowel を渡しています。
test(arrayOfStrings2.filter(hasAVowel), ["waa"]);












