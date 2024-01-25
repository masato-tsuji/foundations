'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log("---------- warm up 1 ----------");
const variableString = "I am a string";
console.log(typeof variableString); // "string"と表示されましたか？

const variableNumber = 1;         // "number"と表示させるにはどんな値を代入すればいいでしょう？
console.log(typeof variableNumber); // "number"と表示されましたか？

// ここにコードを書いて、"boolean"と表示されるようにしてください。
const variableBoolean = true;
console.log(typeof variableBoolean);

//ここにコードを書いて、"undefined"と表示されるようにしてください。
let variableUndefined;
console.log(typeof variableUndefined);

console.log("---------- warm up 2 ----------");
const numberA = 2
const numberB = 4

const average = (numberA + numberB) / 2;
console.log(average); // numberA と numberB の平均が表示される。

console.log("---------- meaningOfLife ----------");
function meaningOfLife(i) {
    return 42;
}
meaningOfLife();

console.log("---------- addTen ----------");
function addTen(number) {
    return number + 10;
}
console.log(addTen(5));

console.log("---------- function ----------");
/*
addTen {
    console.log("I am inside!");
    return number * 10;
  }
*/
  function addTen(number) {
    console.log("I am inside!");
    return number + 10;
  }
  console.log(addTen(5));


  console.log("---------- 4 ----------");

  function subtract(num1, num2) {
    // ここにコードを書いてください
    return num1 - num2;
  }

  console.log(subtract(4, 3)); // => 1
  console.log(subtract(100, 42)); // => 58

  console.log("---------- 5 ----------");
// ここにコードを書いてください
function greeting(name) {
    return "Hello, " + name + "!";
}

console.log(greeting("Alex")); // => "Hello, Alex!"
console.log(greeting("Bob")); // => "Hello, Bob!"

console.log("---------- 6 ----------");

function average2(num1, num2) {
    return (num1 + num2) / 2;
}

console.log(average2(2, 3));

