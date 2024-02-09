'use strict'
// 1行目に記載している 'use strict' は削除しないでください

/*
基礎演習
*/
//---------------------------------------------

// 例
const school = "DIG college";
console.log(school); // "DIG college" を表示
let week = 1;
console.log(week); // "1" を表示

// ここにあなたのコードを書いてください
const name = "masato tsuji"   //nameは非推奨 window.nameがあるがvarでなければ動く
let age = 5;
const isProgrammer = true;
let currentTask = 1;

console.log(name); // あなたの名前を表示
console.log(age); // あなたの年齢を表示
console.log(isProgrammer); // "true" を表示
console.log(currentTask); // "1" を表示

currentTask = 2;

console.log(currentTask); // "1" を表示

//---------------------------------------------

// 正方形の面積を計算して保存
const squareSideLength = 2;
// ここにあなたのコードを書いてください
const squareArea = squareSideLength * 2;

console.log(squareArea); // "4" を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
// ここにあなたのコードを書いてください
const rectangleArea = rectangleBaseLength * rectangleHeightLength;

console.log(rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
// ここにあなたのコードを書いてください
const triangleArea = triangleBaseLength * triangleHeightLength / 2;

console.log(triangleArea); // "10" を表示

//---------------------------------------------

/*
中級演習
チャレンジ問題です。ここでは講義で説明されていないテクニックも使うかもしれません。
変数 circleCircumference と circleArea を宣言して、円の円周と面積を計算した値を代入し
出力してみましょう。あなたが予想した答えとは若干異なるかもしれませんが、心配しないでください。
結果が予想した値とほぼ同じであれば正解です。
*/

/*
変数 circleCircumference と circleArea を宣言して、円の円周と面積を計算した値を代入し
出力してみましょう。あなたが予想した答えとは若干異なるかもしれませんが、心配しないでください。
結果が予想した値とほぼ同じであれば正解です。
*/
const circleDiameter = 10;

// ここにあなたのコードを書いてください
const circleCircumference = circleDiameter * Math.PI;
const circleArea = Math.PI * (circleDiameter / 2) ** 2;

console.log(circleCircumference); // "31.41592653589793" に近い値を表示
console.log(circleArea); // "78.53981633974483" に近い値を表示


/*
直接、値を再代入せずに a と b の値を入れ替えて期待通りの値が出力されるようにしましょう。
アドバイス： データを一時的に保存するために別の変数を作成する必要があります。
*/
let a = "B";
let b = "A";
// ここにあなたのコードを書いてください
const tempA = a;
a = b;
b = tempA;

console.log(a); // "A" を表示
console.log(b); // "B" を表示

/*
指数関数的成長 (Exponential growth) を実装してみましょう。変数 の値を変更して、
2 のべき乗を求めましょう。
*/
let value = 1, suffix = 0;

console.log(value); // "1" を表示

// value に何かを行う
value = 2 ** ++suffix;
console.log(value); // "2" を表示

// value に何かを行う
value = 2 ** ++suffix;
console.log(value); // "4" を表示

// value に何かを行う
value = 2 ** ++suffix;
console.log(value); // "8" を表示

// value に何かを行う
value = 2 ** ++suffix;
console.log(value); // "16" を表示

// value に何かを行う
value = 2 ** ++suffix;
console.log(value); // "32" を表示

// value に何かを行う
value = 2 ** ++suffix;
console.log(value); // "64" を表示

/*
文字列結合に挑戦しましょう。"???"の部分を書き換えて様々な変数を連結し、
期待している結果を表示してください。
*/
const firstName = "masato";
const lastName = "tsuji";
const city = "toyota";
const profile = "Hello, my name is " + firstName + " " + lastName + ". I live in " + city + ".";


console.log(profile); // "Hello, my name is Yan Fan. I live in Tokyo." を表示

//---------------------------------------------
/*
応用演習
この演習では講義で説明されていないテクニックも使うかもしれません。
*/

/*
counter という関数を宣言します。これが呼び出されたら、常に前回呼び出された時よりも
 1 つ大きい数値を console.log で表示しましょう。
*/
// アドバイス： ここで何かする必要があるかもしれません
let ns = {};
ns.cnt = 0;

function increment(value) {
  let cnt = ++cnt;
  return cnt;
}

function counter() {
  // ここにあなたのコードを書いてください
  console.log(++ns.cnt);
}

counter(); // => 1
counter(); // => 2
counter(); // => 3
// etc.

/*
isOdd という関数を宣言します。これが呼び出されたら、与えられた数値が奇数かどうかを 
console.log で表示しましょう。
*/
function isOdd(givenNumber) {
  // ここにあなたのコードを書いてください
  // 与えられた数値によって、"Yes, it's odd" もしくは "No, it's even" を表示
  if (typeof(givenNumber) != "number") {
    console.log("Oh, it's not number...");
  } else if (givenNumber % 2 != 0) {
    console.log("Yes, it's odd");
  } else {
    console.log("No, it's even");
  }
}

isOdd(2);     // => "No, it's even"
isOdd(101);   // => "Yes, it's odd"
isOdd(12.3);  // => "Yes, it's odd"
isOdd("4");   // => "Oh, it's not number..."













