'use strict'
// 1行目に記載している 'use strict' は削除しないでください



const arrayOfObjects = [
    { name: "alice", favoriteColor: "green" },
    { name: "bob", favoriteColor: "blue" },
];


//コードを追加して、テストをパスしましょう。関数は 5 行以下のコードになるよう実装してみましょう。
function getNames(arrayObj) {
    return arrayObj.map(function (obj) {
        return obj.name;
    });
}

function getFavoriteColors(arrayObj) {
    return arrayObj.map(function(obj) {
        return obj.favoriteColor;
    });
}


test(getNames(arrayOfObjects), ["alice", "bob"]);
test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);


function evenArray(array) {
    const resArray = [];
    for (const elm of array) {
        if (elm % 2 === 0) {
            resArray.push(elm);
        }
    }
    return resArray;
}

test(evenArray([2, 3, 4, 5, 6]), [2, 4, 6]);




/**
 * @param {number} ???
 * @returns {boolean} 与えられた数値が 10 の倍数かどうか
 */
function isMultipleOfTen(num) {
    return num % 10 === 0;
}

const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];

test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]); // .filter メソッドの引数に isMultipleOfTen を渡しています。
test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);

const newArray = arrayOfNumbers.filter(function (elm) {
    return elm > 10;
});

console.log(arrayOfNumbers, newArray);




const originalArray = [2, 3, 4, 5, 6];

// コールバック関数をアロー関数に（.filterを連結）
const filteredArray = 
    originalArray.filter(num => num % 2 === 0)
                 .filter(num => num > 3);



console.log(filteredArray); // [4, 6]


line("基礎1")
/**
 * @param {number} ???
 * @returns {boolean} 与えられた数値が 10 の倍数かどうか
 */
// ここにコードを書きましょう

// const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];

function isMultipleOfTen(num) {
    return num % 10 === 0;
}

test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]); // .filter メソッドの引数に isMultipleOfTen を渡しています。
test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);



line("基礎2")
/**
 * @param {string} ???
 * @returns {boolean} 与えられた文字列に母音 (a, e, i, o, u) が1つ以上含まれているか
 */
// ここにコードを書きましょう
function hasAVowel(str) {
    const regex = /.*[a, e, i, o, u].*/;
    return  regex.test(str);
}


const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]); // .filter メソッドの引数に hasAVowel を渡しています。
test(arrayOfStrings2.filter(hasAVowel), ["waa"]);



line("Nightmare1")  // ---------------------------------------------

//関数 shuffle を宣言してください。ここでは Lodash のメソッドを 使用しないで 実装しましょう。
/**
 * @param {Array<any>} ???
 * @returns {Array<any>} 与えられた配列をランダムな順番に並び替えた配列
 */
// ここにコードを書きましょう
const shuffle = array => {
    const length = array.length;
    const resArray = [];
    while (array.length > 0) {
        let i = Math.floor(Math.random() * length);
        if (resArray[i] === undefined) {
            resArray[i] = array.pop();
        }
    }
    return  resArray;
}

// この種の関数をテストするのは簡単ではありません。
// 返り値の配列がランダムな順番に並べ替えられているかは、以下のように何度か表示してみて目で判断してください。

const NUM_TRIALS = 10;

for (let i = 0; i < NUM_TRIALS; ++i) {
  console.log(shuffle([1, 2, 3, 4]));
}

// チャレンジ精神が旺盛な方は、配列の順番が本当にランダムかどうかを自動テストする方法を考えてみましょう。


line("Nitemare2")   // ---------------------------------------------

//関数 mySort を宣言してください。ここでは Lodash のメソッドを 使用しないでください。
//ビルトインの .sort メソッドも 使用しないでください（テストを除く）。実装の仕方によっては、
//処理に長い時間がかかります。この問題では 1 秒以内に 並べ替えの処理が終わるように挑戦してみてください。
//開発中は NUM_ELEMENTS の値を小さくしておくのがいいかもしれません。
/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の中の数字が「ソート」された、つまり昇順に並べ替えられた配列
 */
// ここにコードを書きましょう
const mySort = array => {
    const length = array.length;
    const resArray = [];
    let index = arry.length;
    let value = array.pop();
    while (array.length > 0) {

        // indexが最小値までいったら先頭に追加
        if (index === 0) {
            resArray.unshift(value);
        }
        
        if (index >= length) {

        }
  
    }
    return resArray;
}


const array = [];

const NUM_ELEMENTS = 100000;

for (let i = 0; i < NUM_ELEMENTS; ++i) {
  array.push(Math.random());
}

console.log(array);

console.time("mySort");
const startTime = Date.now();
const sortedArray = mySort(array);
const endTime = Date.now();
console.timeEnd("mySort");

// 昇順に並べ替えが行われているかのテスト
test(
  sortedArray,
  array.slice().sort((a, b) => a - b)
);

// 並べ替え処理が 1 秒以内に終わるかのテスト
test(endTime - startTime < 1000, true);




