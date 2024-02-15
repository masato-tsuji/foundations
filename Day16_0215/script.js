'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//         console.log("OK! Test PASSED.");
//     } else {
//         console.error("Test FAILED. Try again!");
//         console.log("    actual: ", actual);
//         console.log("  expected: ", expected);
//         console.trace();
//     }
// }


/**
 * 関数 incrementNumbers を宣言してください。
 * @param {{ [key: string]: number }} obj
 * @returns {{ [key: string]: number }} 与えられたオブジェクトと同じキーと値のペアを持つオブジェクト。
 * ただし、値が数値の場合には 1 が足された値となる。
 */
function incrementNumbers(obj) {
    const result = {};
    for (const key in obj) {
        if (typeof obj[key] === "number") {
            result[key] = obj[key] + 1;
        } else if (typeof obj[key] !== "number") {
            
            result[key] = obj[key];
        }
    }
    return result;
}
test(incrementNumbers({ a: 1, b: 2, 1: 3, d: "hello" }), {
    a: 2,
    b: 3,
    1: 4,
    d: "hello",
  });
  test(incrementNumbers({ a: 2, b: 3, 1: 4, d: "hello" }), {
    a: 3,
    b: 4,
    1: 5,
    d: "hello",
  });







