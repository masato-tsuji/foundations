'use strict'
// 1行目に記載している 'use strict' は削除しないでください

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



// 問題１
/**
 * @param {Array<string>} arrayNames - 友達の名前が入った配列
 * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
 */
function sayHelloToFriends(arrayNames) {
    const resArray = [];
    for (const name of arrayNames) {
        resArray.push(`Hello, ${name}!`);
    }
    return resArray;
}
  
let friends = ["Mario", "Luigi"];
test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

friends = ["taro"];
test(sayHelloToFriends(friends), ["Hello, taro!"]);


// 問題２
const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };
  

   /**
 * @param {object} object  オブジェクト
 * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
 */
function filterObjectForStrings(object) {
    const resObj = {};
    for (const key in object) {
        if (typeof object[key] === "string") {
            resObj[key] = object[key];
        }
    }
    return resObj;
  }
  
  test(filterObjectForStrings(obj1), obj1); // 変化なし
  test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
  test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない



// 問題３
/**
 * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
 * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
 */
function filterArrayForStrings(arrayOfObjects) {
    const resArray = [];
    for (const arrayObj of arrayOfObjects) {
        resArray.push(filterObjectForStrings(arrayObj));
    }
    return resArray;
  }
  
  test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
  
  // 2 番目の要素から値が 2 のペアは除くこと
  test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
  
  test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);



// 問題４
const names = ["いち", "に", "さん", "よん"];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < names.length; j++) {
    for (let k = 1; k < 3; k++) {
    console.log(names[j]);
    }
  }
}


//問題５
for (let i = 0; i < 2; i++) {
    console.log("a: " + i);
    for (let i = 0; i < 2; i++) {
      console.log("b: " + i);
      for (let i = 0; i < 2; i++) {
        console.log("c: " + i);
      }
    }
  }