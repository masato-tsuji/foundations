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

  line("worm up1"); //---------------------------------------------

  const obj1 = { a: "A" };
  const obj2 = { a: "A", b: 2 };
  const obj3 = { a: "A", b: 2, c: "C", d: true };
  const obj4 = { a: "A", c: "C" };

//関数 filterObjectForStrings を宣言してください。
/**
 * @param {object} オブジェクト
 * @returns {{ [key: string]: string }} 与えられたオブジェクト内の、値が文字列であるキーと値のペアのみを持つ新しいオブジェクト
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
  test(filterObjectForStrings(obj2), obj1); // 値が文字列でないペアは取り除かれている
  test(filterObjectForStrings(obj3), obj4); // 値が文字列でないペアは取り除かれている


  line("worm up2"); //---------------------------------------------
 // 関数 filterArrayForStrings を宣言してください。1 問目で作った関数 filterObjectForStrings を使いましょう。
  /**
   * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
   * @returns {Array<{ [key: string]: string }>} 与えられた配列内の各オブジェクトから、値が文字列であるキーと値のペア以外のペアを取り除いた新しいオブジェクトを作成して新しい配列に入れたもの。
   */
  
  function filterArrayForStrings(arrayOfObjects) {
    const resArray = [];
    for (const array of arrayOfObjects) {
        resArray.push(filterObjectForStrings(array));
    }
    return resArray;
  }
  
  test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
  test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]); // 2 つめの要素の `b: 2` が取り除かれる。
  test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


  line("worm up ext"); //---------------------------------------------
//for of loop と for in loop　の復習として以下の課題に取り組んでみましょう！
//以下の問題ではこの変数を使用します。
const menuOfFruits = [
  { name: "apple", price: "1,200yen", stock: "40" },
  { name: "banana", price: "100yen", stock: "30" },
  { name: "cherry", price: "670yen", stock: "20" },
  { name: "kiwi", price: "210yen", stock: "10" },
  {
    name: "wartermelon",
    price: "4,560yen",
    stock: "0",
    secret: "Happy coding!",
  },
];

line("1");
// 全ての key に対する value をコンソールに出力しましょう
for (const arrayObj of menuOfFruits) {
    if (typeof arrayObj === "object") {
        for (const key in arrayObj) {
            console.log(arrayObj[key]);
        }
    }
}

line("2");
// key 名が "stock" の value を全てコンソールに出力しましょう
for (const arrayObj of menuOfFruits) {
    console.log(arrayObj.stock);
}

line("3");
//key 名が "secret" のオブジェクトだけをコンソールに出力しましょう
for (const arrayObj of menuOfFruits) {
    for (const key in arrayObj) {
        if (key === "secret") {
            console.log(arrayObj);
        }
    }
}


line("for と while ループ");

let counter = 1;
while (counter <= 10) {
    console.log(counter++);
}

const cars = ["Toyota", "Volvo", "BMW", "Honda"];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}


let index = 0;

while (index <= 4) {
  console.log("hello!");
  index++;
}

for (let i = 0; i <= 4; i++) {
    console.log("Hello");
}


const array = ["a", "b", "c", "d", "e"];
for (let i = 0; i < array.length; i++) {
  console.log("Index: " + i, "Value :" + array[i]);
}

// Index: 0 Value: a
// Index: 1 Value: b
// Index: 2 Value: c
// Index: 3 Value: d
// Index: 4 Value: e


function sayFourHellos() {
    for (let i = 1; i <= 4; i++) {
        console.log("Hello!");
    }
}

sayFourHellos();


line("Nightmare 1"); //---------------------------------------------
//パーティに n 人のゲストが来ています。各ゲストには番号が割り当てられます。
//各ゲストにすでに到着しているゲストを紹介する関数 getIntroductions を宣言してください。
/**
 * @param {number} num - ゲストの数
 * @returns {Array<string>} 到着するゲストへの挨拶文が入った配列
 */
function getIntroductions(num) {
  const resArray = [];
  const menbers = [];
  let string;
  for (let i = 1; i <= num; i++) {
    if (i > 1) menbers.push(i - 1);
    string = menbers.length > 0 ? `${menbers.join(" さん、")} さんです` : "";
    resArray.push(`${i} さん、ようこそ。${string}`);
  }
  return resArray;
}

test(getIntroductions(1), ["1 さん、ようこそ。"]);
test(getIntroductions(2), ["1 さん、ようこそ。", "2 さん、ようこそ。1 さんです"]);
test(getIntroductions(5), [
  "1 さん、ようこそ。",
  "2 さん、ようこそ。1 さんです",
  "3 さん、ようこそ。1 さん、2 さんです",
  "4 さん、ようこそ。1 さん、2 さん、3 さんです",
  "5 さん、ようこそ。1 さん、2 さん、3 さん、4 さんです",
]);


line("Nightmare 2"); //---------------------------------------------
//関数 christmasTree を宣言してください。
/**
 * @param {string} string - 任意の 1 文字
 * @param {number} height - ツリーの高さ
 * @returns {string} 与えられた文字と高さを使用して、クリスマスツリーを文字列で作る。
 */

function christmasTree(string, height) {
  //console.log("#".repeat(5).split("").join(" ").padStart(11));
  const array = [];
  for (let i = 0; i < height; i++) {
    array.push(string.repeat(i + 1).split("").join(" ").padStart(i + height));
  }
  console.log(array.join("\n"));
  return array.join("\n");
}

const expected1 = "T";
test(christmasTree("T", 1), expected1);
const expected2 = " +\n+ +";
test(christmasTree("+", 2), expected2);
const expected4 = "   #\n  # #\n # # #\n# # # #";
test(christmasTree("#", 4), expected4);

// \n は改行を意味するコードです。実際に文字列を console.log すると、ツリーがこんな風に表示されますよ。

/*
      T
     T T
    T T T
   T T T T
  T T T T T
*/

