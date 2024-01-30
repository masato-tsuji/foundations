'use strict'
// 1行目に記載している 'use strict' は削除しないでください


line("worming up1"); //---------------------------------------------
//isMultipleOfThree という名前の関数を宣言しましょう。引数の数字が 3 の倍数であれば true、
//そうでなければ false を返してください。
function isMultipleOfThree(number) {
  // ここにあなたのコードを書いてください
  return !(number % 3);
}

// テスト
console.log(isMultipleOfThree(6)); // => true
console.log(isMultipleOfThree(10)); // => false

line("worming up2"); //---------------------------------------------
//isMultipleOf という名前の関数を宣言しましょう。1 つ目の引数が 2 つ目の引数の倍数であれば true 、
//そうでなければ false を返してください。
function isMultipleOf(num1, num2) {
  // ここにあなたのコードを書いてください
  return !(num1 % num2);
}

// テスト
console.log(isMultipleOf(6, 3)); // => true
console.log(isMultipleOf(10, 4)); // => false
console.log(isMultipleOf(-7, 4)); // => false


line("kiso4"); //---------------------------------------------

function biggerNumber(number1, number2) {
  if (number1 > number2) {
    return "The first argument is bigger.";
  } else if (number1 < number2) {
    return "The second argument is bigger.";
  }
}

//テスト
console.log(biggerNumber(4, 3)); // => 'The first argument is bigger.' と表示されるようにする。
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.' と表示されるようにする。
console.log(biggerNumber(4, 4)); // => 'The second argument is bigger.' と表示されるようにする。


line("kiso5"); //---------------------------------------------

function printDataType(data) {
  if (typeof data === "number") {
    console.log("This is a number.");
  } else if (typeof data === "string") {
    console.log("This is a string.");
  } else if (typeof data === "boolean") {
    console.log("This is a boolean.");
  } else {
    console.log("This is not a string, boolean, or number.");
  }
  // ここにあなたのコードを書いてください
}

//テストケース
printDataType(42); // => "This is a number." が表示されるようにする。
printDataType("Hello!"); // => "This is a string." が表示されるようにする。
printDataType(true); // => "This is a boolean." が表示されるようにする。
printDataType(undefined); // => "This is not a string, boolean, or number." が表示されるようにする。
printDataType("42"); // => "This is a string." が表示されるようにする。


line("kiso6"); //---------------------------------------------
function greeting(name, language) {
  if (language === "Japanese") {
    return "Konnichiwa, "  + name + "!";
  } else if (language === "English") {
    return "Hello," + " " + name + "!";
  } else if (language === "German") {
    return "Gutentag," + " " + name + "!";
  } else if (language === "Spanish") {
    return "Hola," + " " + name + "!";
  }
}

console.log(greeting("Harry Potter", "Japanese")); // => "Konnichiwa, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!" が表示されるようにする。


/**/
line("chukyu1"); //---------------------------------------------





line("oyo1"); //---------------------------------------------
//randomStopLight という名前の関数を宣言してください。
//この関数が呼び出されたら 0 以上 10 以下のランダムな整数を生成します。
//生成された数字が 3 未満であれば "🔴Red" を、3 以上 6 以下であれば
// "🟡Yellow" を、6 より大きければ "🟢Green"を返すようにしてください。
//アドバイス： Math.random を使ってみましょう。
/*
 緑：&#x1F7E2;<br>
  黄：&#x1F7E1;<br>
  赤：&#x1F534;
*/
/**/
const rnd = Math.floor(Math.random() * 11)
console.log(rnd);
if (rnd < 3) {
  console.log("🔴Red");
} else if(rnd > 6) {
  console.log("🟢Green");
} else {
  console.log("🟡Yellow");
}

//switchは不等号使えない･･･

