'use strict'

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("OK! Test PASSED.");
    } else {
        console.error("Test FAILED. Try again!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
        console.trace();
    }
}


/**
 * 課題 1
 * 引数で受け取った配列を引数で指定された偶数又は奇数の配列にして返す
 * @function
 * @param {array} array - 数値型の要素を持つ配列
 * @param {boolean} onEven - 偶数を指定する場合はtrue 奇数を指定する場合はfalseを受け取る
 * @returns {array} - 偶数又は奇数を要素に持つ配列
 */
const evenOrOdd = (array, onEven) => array.filter((elm) => elm % 2 ^ onEven);

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);


/**
 * 課題 2
 * オブジェクトと"target" (文字列または数値) を受け取り、オブジェクト中、
 * ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返す
 * @function
 * @param {object} obj - 文字列又は数値の値を持つオブジェクト
 * @param {string | number} target - オブジェクトの値とマッチさせる文字列又は数値
 * @returns {array} - マッチしたキーを要素に持つ配列
 */
const findKeys = (obj, target) => {
  const keys = Object.keys(obj);
  const vals = Object.values(obj);
  return keys.filter((elm, index) => vals[index] === target);
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]); 
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]); 


/**
 * 課題 3
 * 第1引数の各要素をキーとし第2引数の各要素を値としたオブジェクトを返す
 * @function
 * @param {array} arrayKeys - 新しいオブジェクトのキーとなる文字列を要素に持つ配列
 * @param {array} arrayVals - 新しいオブジェクトの値を要素に持つ配列
 * @returns {object} - 2つの引数から生成された新しいオブジェクト
 */
const buildObject = (arrayKeys, arrayVals) => {
  const resObj = {};
  for (let i =0; i < arrayKeys.length; i++) {
    resObj[arrayKeys[i]] = arrayVals[i];
  }
  return resObj;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});


/**
 * 課題 4
 * 1つの数値 x を受け取り、関数を返し返された関数は引数として 1つの数値 y を受けとり、'x' と 'y' の和を返す
 * @function
 * @param {number} x - 1つめの関数で受け取る数値
 * @returns {number} - 引数xとyの和
 */
const add = x => (y) => x + y;

const addTwo = add(2);
test(addTwo(3), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);
test(addOneHundred(3), 103);


/**
 * 課題 7
 * 引数として受け取ったオブジェクト又は配列の値の各要素に1を加えた新しい配列を返す
 * @param {object | array} collection - 数値の値を持つオブジェクト又は配列
 * @param {function} addOneFunc - 引数として渡した値に1を加えて返す関数
 * @returns {array} - 計算結果の要素を持つ新しい配列
 */
const map = (collection, addOneFunc) => {
  const resArray = [];
  for (const [ , val] of Object.entries(collection)) {
    resArray.push(addOneFunc(val));
  }
  return resArray;
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne),  [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);


/**
 * 課題 8
 * 第1引数で受け取った奇数個の単語の文字列の真ん中を第2引数で受け取った単語に置き換えて返す
 * @function
 * @param {string} oddString - 奇数個の単語からなるスペースで区切られた文字列
 * @param {string} newWord - 置き換える単語
 * @returns {string} - 単語を置き換えた新しい文字列
 */
const changeMiddle = (oddString, newWord) => {
  const splitArray = oddString.split(" ");
  splitArray.splice(Math.floor(splitArray.length / 2), 1, newWord);
  return splitArray.join(" ");
}

test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");
test(changeMiddle("YAY NO MUSIC NO LINE", "DIG"), "YAY NO DIG NO LINE");


/**
 * 課題 9
 * 受け取った配列の要素の最も多い型と個数を文字列で返す
 * @function
 * @param {array} mixArray - 数値・文字列・ブーリアンを要素にもつ配列
 * @returns {string} - 型の種類とカウント数を記した文字列
 */
const countSomething = mixArray => {
  const typeNameObj = {boolean: "BOOL", string: "STRING", number: "NUMBER"}
  const typeMapArray = mixArray.map((elm) => typeof elm);
  const typeCntArray = [];

  // 型の種類別のカウント値を持つオブジェクトを作成
  Object.entries(typeNameObj).forEach(([key, val]) => {
    const obj = {};
    obj.type = val;
    obj.count = typeMapArray.filter((elm) => elm === key).length;
    typeCntArray.push(obj);
  });

  // 最大値を持つオブジェクトを取得
  const maxTypeObj = typeCntArray.reduce((accum, current) =>
    accum.count > current.count ? accum : current
  );
  return `${maxTypeObj.type} COUNT: ${maxTypeObj.count}`;
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");
test(countSomething(["true", true, "1", "0", 1, "false", 1]), "STRING COUNT: 4");


/**
 * 課題 10
 * 引数としてオブジェクト又は配列とコールバック関数を受け取り各要素を引数にした関数を実行
 * @function
 * @param {object | array} collection - オブジェクト又は配列
 * @param {function} callBackFunc - 引数として受け取る関数
 */
const each = ((collection, callBackFunc) => {
  const collectArray = Object.entries(collection);
  const iterationFunc = () => {
    const [ , val] = collectArray.shift();
    callBackFunc(val);
    if (collectArray.length > 0) {
      iterationFunc();
    }
  }
  iterationFunc();
});

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);


/**
 * 課題 11
 * 2つの関数を受け取り新たな関数を定義し受け取った数値の引数に対し各関数で演算した結果を返す
 * @function
 * @param {function} funcA - 引数として渡した値を2倍にする関数
 * @param {function} funcB - 引数として渡した値に10を加える関数
 * @returns {number} - 関数で行った計算結果を返す
 */
const compose = (funcA, funcB) => (x) => funcB(funcA(x));

function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
test(baz(5), 20);
test(baz(100), 210);
test(baz(-5), 0);
test(baz(0), 10);
