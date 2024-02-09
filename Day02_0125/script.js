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

console.log("---------- kiso1 ----------");

function add(numOne, numTwo) {
  return numOne + numTwo;
}

// テスト
console.log(add(4, 3)); // => 7 を表示
console.log(add(100, 42)); // => 142 を表示


console.log("---------- kiso2 ----------");

console.log(add(100)); // 何が起こる？ => NaN(Not a Number)
console.log(add(1, 4, 5)); // 何が起こる？ => 5


console.log("---------- kiso3 ----------");
function simpleFunctionA() {
  return "Hello simple function A";
}

function simpleFunctionB() {
  console.log("Hello simple function B");
}

console.log("simpleFunctionA: ", simpleFunctionA());
console.log("simpleFunctionB: ", simpleFunctionB());

console.log("---------- kiso4 ----------");

function subtract(num1, num2) {
  // ここにコードを書いてください
  return num1 - num2;
}

console.log(subtract(4, 3)); // => 1
console.log(subtract(100, 42)); // => 58

console.log("---------- kiso5 ----------");
// ここにコードを書いてください
function greeting(name) {
    return "Hello, " + name + "!";
}

console.log(greeting("Alex")); // => "Hello, Alex!"
console.log(greeting("Bob")); // => "Hello, Bob!"

console.log("---------- kiso6 ----------");

function average2(num1, num2) {
    return (num1 + num2) / 2;
}

console.log(average2(2, 3));

console.log("---------- kiso7 ----------");
/*
function square(5) {
  return 5 * 5;
}
=> 引数が使われていない

function square("x") {
  return "x" * "x";
}
=> 引数が数値でない

function Square(monkey) {
  return monkey * monkey;
}
=> 引数名が適切でない、変数名の最初が大文字、２乗なら　** 2とするべき
*/

console.log("---------- kiso8 ----------");
function cube(number) {
  return number ** 3;
}

console.log(cube(2));

console.log("---------- chukyu1 ----------");
function simpleHelloA() {
  console.log("hello");
}

function simpleHelloB() {
  return "hello";
}

const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b);


console.log("---------- chukyu2 ----------");
//下の関数を 3 回呼び出し、それぞれの返り値を適切な変数に代入して、
//最後の console.log の 3行でコメントと同じ表示が出るようにしてください。
function createGreeting(phrase, friend) {
  return phrase + ", " + friend + "!";
}

// ここにコードを書いてください。
let morningGreeting = createGreeting("Good moring", "Mike");
let dayGreeting = createGreeting("Hello", "Bob");
let eveningGreeting = createGreeting("Good evening", "Alex");

console.log(morningGreeting); // "Good morning, Mike!" を表示
console.log(dayGreeting); // "Hello, Bob!" を表示
console.log(eveningGreeting); // "Good evening, Alex!" を表示

console.log("---------- chukyu3 ----------");
//orz...


console.log("---------- oyo1 ----------");
//HTMLのSCRIPTタグで２つのJSファイルが読み込まれ互いにアクセスできる状態になっている。
//タグの最初に読み込まれたファイルが実行されてから次のファイルが実行されている。


console.log("---------- oyo2 ----------");
//下記に guessMyNumber と randomNumber というコードがあります。これらのコードを読んで、
//コンソールで関数のテストを行いましょう。guess は推測するという意味です。
function guessMyNumber1(n) {
  if (n > 6) {
    return "0 から 6 の間の数字を入力してください。";
  } else if (n === randomNumber(6)) {
    return "当たりです！";
  }
  return "残念！はずれです。";
}

function randomNumber1(n) {
  return Math.floor(Math.random() * (n + 1));
}

console.log(guessMyNumber1(7));


console.log("---------- oyo3,4 ----------");
function guessMyNumber(n) {
  const upperBound = 8;
  const rNumber = randomNumber(upperBound);
  if (n > upperBound) {
    return "0 から " + upperBound + " の間の数字を入力してください。";
  } else if (n === rNumber) {
    return "当たりです！";
  }
  return "残念！正解は " + rNumber + " でした。";
}

function randomNumber(n) {
  return Math.floor(Math.random() * (n + 1));
}

console.log(guessMyNumber(9));

console.log("---------- rikaido ----------");

//関数を実行するとき、仮引数より実引数の数が少ない、もしくは多い場合、何が起こりますか？
// => 

//return キーワードは何をしますか？　関数の「外側」で使うことはできますか？