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

//関数 doSomething を宣言してください。
/**
 * @param {Function} ???
 * @param {any} ??? - 第 1 引数で与えられた関数に渡す値
 * @returns {any} 与えられた引数を、与えられた関数に渡したときの返り値
 */

// ここにコードを書きましょう
function doSomething(func, arg) {
    return func(arg);
}

function addTen(number) {
    return number + 10;
  }
  
  test(doSomething(addTen, 6), 16);
  test(doSomething(addTen, -100), -90);


  const outer = function () {
    return function () {
      return 5;
    };
  };


  console.log(outer()); // => 関数の定義文
  console.log(typeof outer()); // function


  const inner = outer();

  console.log(inner);   // => 関数の定義文
  console.log(typeof inner);    // => function

  console.log(inner());


const add = function (x) {
    return function (y) {
      return x + y;
    };
  };
  
  const addFive = add(5);
  let foo = addFive(3);
  console.log(foo); // => 8
  console.log(typeof addFive);  // => function






