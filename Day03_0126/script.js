'use strict'
// 1行目に記載している 'use strict' は削除しないでください
//※テンプレートリテラルを使ってみる
// > ← 大なり（グレーター）
// < ← 小なり（レサーザン　lesser then）
//調べるのはMDNおすすめ　Mozira... 公式

console.log("---------- warming up1 ----------");
function greeting(name) {
  return "Hello, " + name + "!";
}

// テスト
console.log(greeting("Kana")); // => "Hello, Kana!"
console.log(greeting("Kimiko")); // => "Hello, Kimiko!"


console.log("---------- warming up2 ----------");
function average2(num1, num2) {
  return (num1 + num2) / 2;
}

console.log(average2(2, 4));  // => 3


console.log("---------- kiso1 ----------");
//以下の式がどんな値になるか、まず頭で考えてみましょう。
//考えたら Google Chrome のコンソールに 1 行ずつ入力し、導き出される値を確かめてください。
"true" == true; // => false
// 上の例では使っていますが、基本的に等価演算子 ( == ) は使わず、
//必ず厳密等価演算子 ( === ) を使うようにしましょう。
"true" === true;  // => false
3 >= 3; // => true
3 !== 4;  // => true


console.log("---------- kiso2 ----------");
//以下のコードを script.js にコピーして、それぞれの式の結果が 
//boolean 型の値になるようにしましょう。コードの ??? 部分に適切な
//比較演算子を入れてください。index.html を Google Chrome で開き、
//コンソールに出力された結果を確認してください。

/**/
console.log(1100 >= 99) // => true を表示
console.log(1 === 21) // => false を表示
console.log(62 !== "62") // => true を表示
console.log("5" === 5) // => false を表示
console.log("6" !== "six") // => true を表示


console.log("---------- kiso3 ----------");
//script.js に以下のコードをコピーして、「算術演算子」を「 1 つだけ」変えましょう。
//そのとき、以下の式の結果が true になるようにしてください。
//式が算術演算子を評価する順番を確認しておきましょう！
console.log(2 + 3 * 10 > 50);
console.log(2 * 3 * 10 > 50);


console.log("---------- kiso4 ----------");
//以下の関数を script.js にコピーして、式が true と評価されるように 
//??? の部分に、異なる 2 つの引数を渡してみましょう。アドバイス：=== は
//値とデータ型両方の一致を評価し、== は値の一致のみを評価します。
function isEqual(valueOne, valueTwo) {
  return valueOne == valueTwo;
}

console.log(isEqual(2, "2")); // => true


console.log("---------- kiso5 ----------");
//以下の関数を script.js に追加してください。valueOne が valueTwo より
//大きいとき true、小さいときには false を返すように関数の中身を書いてください。
function isGreaterThan(valueOne, valueTwo) {
  return valueOne > valueTwo;
}

//テストケースをいくつか書いてみましょう！ また、false が表示されるように 
//2 つの異なる引数を渡して isGreaterThan を呼び出してみましょう。
console.log(isGreaterThan(3, 2)); // => true
console.log(isGreaterThan(3, 4)); // => false

console.log("---------- kiso6 ----------");
//日本では 20 歳以上になるとお酒を飲めるようになります。script.js に 
//数値 型の引数を 1 つ取り、与えられた年齢がお酒を飲める年齢かどうかを 
//boolean 型の値で返す isOfAge という関数を宣言しましょう。
function isOfAge(age) {
  return age >= 20;
}

console.log(isOfAge(19));
console.log(isOfAge(20));


console.log("---------- chukyu1 ----------");
//先ほど作成した関数 isOfAge が「boolean 型の値を返す動きに加えて、
//飲酒可能年齢なのかどうかを表す文字列をコンソールに表示する関数」になるよう修正しましょう。
function isOfAge2(age) {
  console.log(age >= 20 ? "飲酒可能です" : "飲酒できません");
  return age >= 20;
}

console.log(isOfAge2(19));
console.log(isOfAge2(20));


console.log("---------- chukyu2 ----------");
//引数に数字 n をとる isEven という名前の関数を作成しましょう。
//引数が偶数であれば true を、そうでなければ false を返してください。
function isEven(n) {
  return !(n % 2);
}

console.log(isEven(22));  // => true
console.log(isEven(21));  // => false


console.log("---------- chukyu3 ----------");
//2 つの引数 username と password をとる validCredentials 
//という名前の関数を作成しましょう。両方の引数が十分な長さであれば 
//true を、そうでなければ false を返してください。「十分な長さ」は自由に決めてください。
function validCredential(username, password) {
  return (username.length >= 5 && password.length >= 8);
}

console.log(validCredential("masato", "12345678")); // => true
console.log(validCredential("masa", "12345678"));   // => false


console.log("---------- oyo1 ----------");
//％ 演算子を使用しないで isEven 関数を書き換えてください。
function isEven2(number) {
  return Number.isInteger(number / 2);
}

console.log(isEven2(2));  // => true
console.log(isEven2(3));  // => false
console.log(isEven2(0));  // => true
console.log(isEven2(-8)); // => true


console.log("---------- oyo2 ----------");
//2 つの引数のうち大きい数字を返す getGreaterValue という名前の関数を作成してください。
function getGreaterValue1(num1, num2) {
  return Math.max(num1, num2);
}

console.log(getGreaterValue1(4, 9));

console.log("---------- oyo3 ----------");
//与えられた引数のうち一番大きい数字を返すgetGreatestValue という名前の関数を作成してください。
//残余引数
function getGreatestValue(...arrNum) {
  return Math.max(...arrNum);
}

console.log(getGreatestValue(10, 15)); // 15 を表示
console.log(getGreatestValue(15, 10)); // 15 を表示
console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示


console.log("---------- Nightmare ----------");
//reduce　=> 配列を１つずつ取り出す　 concat => 配列の末尾に追加
//https://qiita.com/shizen-shin/items/7552b36d24db3f2d0b94


const flatten = arr => arr.reduce((newArr,currentVal) => {
  //console.log(newArr);
  return  newArr.concat(currentVal);
}, []);

console.log(
  flatten([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [1, 2, 3, 4, 5, 6]
  
console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]


console.log("---------- kaisetsu ----------");

true + true;    // => 2
false + false;  // => 0
true + false;   // => 1
false + true;   // => 1
true + 5;       // => 6
false + 5;      // => 5
true * "5";     // => 1
false * "5";    // => 0
"true" + false; // => "truefalse"
"true" + true;  // => "truetrue"
false / true;   // => 0
true / false;   // => infinity
true / "1";     // => 1
true / "a";     // => NaN
!1;             // => false
!0;             // => true
!5;             // => false
!(-1);          // => false
!null;          // => true
!undefined;     // => true
!NaN;           // => true
!"";            // => true

// => 演算対象にするとtrueは1,falseは0として扱われる
// => 数値を評価すると0はfalseでそれ以外はtrueとして扱われる







