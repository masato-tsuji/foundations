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

line("確認1"); //---------------------------------------------

// #1
function sayHello() {
  console.log("Hello!");
}

// #2
let triple = function(x) {
  return 3 * x;
};

// #3
let double = function(x) {
  console.log(2 * x);
};

// #4
const cache = [];

function average(array) {
  let result = 0;
  for (const number of array) {
    result = result + number;
  }
  result = result / array.length;

  cache.push(result);
  return result;
}

// #5
function greet(friend) {
  const languages = ["Hello", "Konnichiwa", "Aloha", "Nihao"];
  const randomIndex = Math.round(Math.random() * languages.length-1);
  const randomGreeting = languages[randomIndex];
  console.log(randomGreeting + " " + friend + "!");
}

line("確認2"); //---------------------------------------------

function sayThankYou() {
  console.log("Thank you!");
}

function runSomething(func) {
  func();
}

runSomething(sayThankYou);

line("確認3"); //---------------------------------------------

//runSomething(sayHello()); //not a function


line("中級1"); //---------------------------------------------

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


  line("中級2"); //---------------------------------------------

  const outer = function () {
    return function () {
      return 5;
    };
  };

// (1)
  console.log(outer()); // => 関数の定義文
  console.log(typeof outer()); // => function

// (2)
  const inner = outer();
  console.log(inner);   // => 関数の定義文
  console.log(typeof inner);    // => function

  // (3)outer を使って 5 という返り値を得るにはどうすればよいでしょうか。
  console.log(inner());


  line("中級3"); //---------------------------------------------

const add = function (x) {
    return function (y) {
      return x + y;
    };
  };
  
  const addFive = add(5);
  let foo = addFive(3);
  console.log(foo); // => 8
  console.log(typeof addFive);  // => function
  console.log(addFive()); // => NaN (yがundefinedだから)
  console.log(add(5)(8)); // => 13 (add(5)でfunctio(y)が返ってきてそれに(8)を渡している)


function walkTree(node) {
  if (node == null) {
    return;
  }
  // ノードに対し処理を行う
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}



const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));
