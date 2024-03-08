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

line("1.");// ---------------------------------------------
// 1.evenOrOdd という名前の関数を宣言してください。この関数は引数として数値型の要素を持つ配列と、
// boolean を受け取ります。boolean が true の場合は、偶数のみの配列を返し、 false の場合は、奇数のみの配列を返します。

const evenOrOdd = (array, onEven) => array.filter( elm => elm % 2 ^ onEven);

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);



line("2.");// ---------------------------------------------
// 2.findKeys という名前の関数を宣言してください。この関数は引数としてオブジェクトと 
// "target" (文字列または数値) を受け取り、オブジェクト中、ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返します。

// const findKeys = (obj, target) => {
//   const keys = Object.keys(obj);
//   const vals = Object.values(obj);
//   return Object.entries(obj).filter(([key, val]) => val === target);
// }


const findKeys = (obj, target) => {
  const keys = Object.keys(obj);
  const vals = Object.values(obj);
  return keys.filter( (elm, i) => vals[i] === target);
}


test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]); 
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]); 



line("3.");// ---------------------------------------------
// 3.buildObject という名前の関数を宣言してください。この関数は引数として 2 つの配列を受け取り、
//「オブジェクトを作る」というその名が示す通り新しいオブジェクトを作って返します。
// リターンするオブジェクトは、第一引数の配列の要素をオブジェクトのキーとして設定し、
// 第二引数の配列の要素をオブジェクトの値として設定します。

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



line("4.");// ---------------------------------------------
// 4.add という名前の関数を宣言してください。この関数は引数として 1 つの数値 x を受け取り、関数を返します。
// 返された関数は引数として 1 つの数値 y を受けとり、'x' と 'y' の和を返します。

const add = x => (y) => x + y;

const addTwo = add(2);
test(addTwo(3), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);
test(addOneHundred(3), 103);



line("5.");// ---------------------------------------------
// 以下のコードを実行すると、どの順番で何が表示されるでしょうか？もちろん、コードを実行する前に答えてください。
// なぜそうなるのか、わからない場合はわかるまで調べましょう！
function sayHello() {
  console.log("Hello");
}

function sayHelloAndName(name) {
  return "Hello, " + name;
}

const foo = sayHello();
const bar = sayHelloAndName("JavaScript");

console.log(foo);
console.log(bar);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください
// Hello
// undefined
// Hello, JavaScript

/* 動作の説明
変数fooにsayHelloが代入される際に呼び出し演算子で関数が実行されているので
最初にコンソールにHelloと出力される。また、sayHelloにはreturn文がないため
変数fooにはundefinedが代入される。
次に変数barに実引数"JavaScript"を持つsayLelloAndName関数の実行結果である
"Hello, JavaScript"が代入される。
その後コンソールにfooの値であるundefinedが出力され最後にbaiの値がコンソールに
出力される。
*/


line("6.");// ---------------------------------------------
// クリックしたらページの色が変わるボタンを作りましょう。色はボタンをクリックするたびにランダムで決まります。
/*
ページの色が変わるボタンの作成が終わったら、新しい要素やボタンを追加して何か面白い機能を追加してください。例えば...
段落のテキストを変更する
文字のサイズや色を変更する
色々な画像を表示する（imgbb に保存した画像を使用する）等々
想像力を働かせてみてください！🎉
提出物
この問題では script.js を Gist にアップしてください。もし何かしら変更を加えた場合は index.html、 style.css も
アップしてください。ファイル名はそのままで構いません。
*/






line("7.");// ---------------------------------------------
// 関数 map を宣言してください。この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、
// コレクション内の各要素に対してコールバック関数を実行した結果を要素に持つ新しい配列を返します。コールバック関数は、
// コレクション内のすべての要素に適用されます。 ⚠️ 注意：ビルトインメソッド (.forEach(), .map()) は使用しないでください。

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



line("8.");// ---------------------------------------------
// 関数 changeMiddle を宣言してください。この関数は引数として「奇数個の単語からなる文字列(スペースで区切られる)」と
// 「1 つの単語」を受け取り、第 1 引数の真ん中の単語を第 2 引数の単語で置き換えた新しい文字列を返します。

const changeMiddle = (oddString, newWord) => {
  const splitArray = oddString.split(" ");
  splitArray.splice(Math.floor(splitArray.length / 2), 1, newWord);
  return splitArray.join(" ");
}

test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");
test(changeMiddle("YAY NO MUSIC NO LINE", "DIG"), "YAY NO DIG NO LINE");



line("9.");// ---------------------------------------------
// 関数 countSomething を宣言してください。この関数は引数として数値・文字列・ブーリアンを要素にもつ配列を受け取ります。
// 要素の登場回数が最も多い型をチェックし、以下のいずれかの文字列を返してください。
// "BOOL COUNT: x" (ブーリアンが最も多い場合) "STRING COUNT: x" (文字列が最も多い場合) "NUMBER COUNT: x" （数値が最も多い場合） 
// ※ x はその型の要素がが何回出現したかを表す。

const countSomething = mixArray => {
  const typeNameObj = {boolean: "BOOL", string: "STRING", number: "NUMBER"}
  const typeMapArray = mixArray.map(elm => typeof elm);
  const typeCntArray = [];

  // 型の種類別でカウントしたオブジェクトを作成
  Object.entries(typeNameObj).forEach( ([key, val]) => {
    const obj = {};
    obj.type = val;
    obj.count = typeMapArray.filter(elm => elm === key).length;
    typeCntArray.push(obj);
  });

  // 最大値を持つオブジェクトを取得
  const maxTypeObj = typeCntArray.reduce((accum, current) =>
    accum.count > current.count ? accum : current
  );
  return `${maxTypeObj.type} COUNT: ${maxTypeObj.count}`;
}


test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3"); // "STRING COUNT: 3"
test(countSomething([true, true, false, true]), "BOOL COUNT: 4"); // "BOOL COUNT: 4"
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4"); // "NUMBER COUNT: 4"


line("10.");// ---------------------------------------------
// 関数 each を宣言してください。この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、
// コレクション内の各要素に対してコールバック関数を一度だけ実行してください。この関数は何もリターンしません。 
// ⚠️ 注意：ビルトインメソッド (.forEach(), .map()) は使用しないでください。

const each = (collection, callBackFunc) => {
  for (const [ , val] of Object.entries(collection)) {
    callBackFunc(val);
  }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

// 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6


line("11.");// ---------------------------------------------
// 関数 compose を宣言してください。この関数は引数として funcA と funcB という 2 つの関数を受け取り、
// 新しい関数を返します。返された関数は引数 x を受け取り、funcA に x を引数として渡して得られた戻り値を 
// funcB に引数として渡し、得られた結果を返します。

const compose = (funcA, funcB) => x => funcB(funcA(x));

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
test(baz("a"), NaN);