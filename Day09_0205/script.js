'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("OK! Test PASSED.");
    } else {
        console.error("Test FAILED. Try again!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

line("worming up"); //------------------------------------------------

/**
 * @param {Array<number>} arrNums - 数値型の要素を持つ配列
 * @returns {Array<number>} 与えられた配列の中の奇数（odd number）だけが入った新しい配列
 */
function getOddNumbers(arrNums) {
    const resArr = [];
    for (const arrNum of arrNums) {
        if (arrNum % 2 !== 0) {
            resArr.push(arrNum);
        }
    }
    return resArr;
}

// ⇒ BIT論理積での判定もある

  
let actual = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
let expected = [1, 3, 5, 7];
test(actual, expected);

actual = getOddNumbers([1, 5, 2, 9, 34, -5, 4, 8]);
expected = [1, 5, 9, -5];
test(actual, expected);

actual = getOddNumbers([2, 4, 8]);
expected = [];
test(actual, expected);

actual = getOddNumbers([2, "5", 8]);
expected = ["5"];
test(actual, expected);


line("確認1"); //------------------------------------------------

const place = "Zoom";
const lesson = {
  students: ["田中", "川西", "大村"],
  coding: true,
  place: "Zoom",
};
console.log(lesson["place"]); // Zoom
console.log(lesson.place); // Zoom
console.log(lesson[place]); // undefined
console.log(lesson["cod" + "ing"]); // true
console.log(lesson[2]); // undefined
console.log(lesson.students[2]); // 大村
console.log(lesson.length); // undefined
console.log(lesson.students.length); // 3
console.log(typeof lesson.students); // object


line("確認2"); //------------------------------------------------

const object = {
    a: "おはよう",
    b: "おやすみ",
    c: 1000,
};

console.log(object["a"]); // おはよう
console.log(object.b); // おやすみ
object["b"] = "ありがとう";
console.log(object["b"]); // ありがとう

// これは少し難しい！ 😉
console.log(object[a]); // not defined


line("確認3"); //------------------------------------------------

const pokemons = [
{
    Number: "001",
    Name: "フシギダネ",
    Generation: "第一世代",
    About:
    "生後しばらくは種から養分を得て成長する。背中の種から養分を受け取ることで、何日も何も食べなくても平気。",
    Types: ["くさ", "どく"],
},
{
    Number: "025",
    Name: "ピカチュウ",
    Generation: "第一世代",
    About:
    "静電気を体にまとい触った相手をまひさせることがある。",
    Types: ["でんき"],
},
{
    Number: "019",
    Name: "コラッタ",
    Generation: "第一世代",
    About:
    "どんな場所でも住み着いていける生命力。警戒心がとても強い。",
    Types: ["ノーマル"],
},
];
  
  console.log(pokemons[0]); // ???
  console.log(pokemons[1].Name); // ???
  console.log(pokemons[0]["Name"]); // ???
  console.log(pokemons[2]["About"]); // ???
  //console.log(pokemons[2].Types[0]); // ???


line("スコープ基礎1"); //------------------------------------------------


let word = "こんにちは！";

function greet(name) {
  let word = "おはよう！";
  return name + "さん、" + word;
}

console.log(greet("りか")); // => りかさん、おはよう！


line("スコープ基礎2"); //------------------------------------------------

function sumArray(arrayOfNumbers) {
    let sum = 0;
    for (const number of arrayOfNumbers) {
        console.log(number, sum);
        sum += number;
    }
    return sum;
}

test(sumArray([1, 2, 3]), 6);
test(sumArray([10, 20, 30]), 60);
test(sumArray([100, 200, 300]), 600);


