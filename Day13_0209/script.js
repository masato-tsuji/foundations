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


line("クロージャ lesson"); //---------------------------------------------

function outerFunc() {
    let word = "Hi!";
    let cnt = 0;
    function innerFunc() {
        word = word + cnt++;
        console.log(word);
    }
    return innerFunc;
}

const func = outerFunc();

func(); // => "Hi!""
// なぜouterFuncがreturnしてメモリから解放されているのに実行されるのかがクロージャ
// 変数のwordはグローバルからアクセスできないので保護される

const func2 = outerFunc();
func2();
func2();
func2();

// これはクロージャにならない
outerFunc()();
outerFunc()();

// 実用例
function taxCalcuratorMaker(taxRate) {
    function taxCalculator(price) {
        return price * taxRate;
    }
    return taxCalculator;
}

const taxCalculatorTokyo = taxCalcuratorMaker(0.1);
console.log(taxCalculatorTokyo(12000));

const taxCalculatorNewYork = taxCalcuratorMaker(0.08875);
console.log(taxCalculatorNewYork(12000));


line("クロージャ bankAccount"); //---------------------------------------------

// 関数 bankAccount を宣言してください。
/**
 * @param {string} name 名前を表わす文字列
 * @param {number} amount 預金金額を表わす数値
 * @returns {function} 周囲の環境の変数を使用した無名関数
 *                    @param {number} amount 入出金額
 *                    @return {string} 
 *                    ”'名前'さんの預金残高は、'金額'です。” を返す
 */
function bankAccount(name, amount) {
    let deposit = amount;
    function anserDeposit(amount) {
        deposit = deposit + amount;
        return `${name}さんの預金残高は、${deposit}円です。`;
    }
    return anserDeposit;
  }

const bankAccountA = bankAccount("A", 1000);
console.log(bankAccountA(2000));



/**
 * @param {number} x
 * @returns {(y: number) => number} 引数 y をとり、y に x を足した値を返す関数
 */
// コードを書き始めましょう
function add(x) {
    return function(num) {
        return num + x;
    }
  }
  
  const addFive = add(5);
  test(addFive(1), 6);


  

  function makeCounter() {
    let counter = 0;
    return function () {
      counter += 1;
      return counter;
    };
  }
  
  const counterA = makeCounter();
  test(counterA(), 1);
  test(counterA(), 2);
  
  const counterB = makeCounter(); // 新しいカウンターを作りたい。
  test(counterB(), 1);
  test(counterB(), 2);


  line("クロージャ 中級1"); //---------------------------------------------
// クロージャを用いて関数を作成しましょう。以下のようなシナリオを考えます。
// あなたは、13 歳未満の子どもはアクセスできない機能のある Web サイトを作成しています。
// 引数に age をとる関数 createWebsiteAccount を宣言してください。
// 呼び出されるたびに、age を 1 つ加算し、また、age が 13 歳以上なら true を返し、13 歳未満なら false を返す内部関数を作ります。
/**
 * @param {number} ageInput 年齢
 * @returns {() => boolean} 実行されるたびに age に 1 を足し、 age が 13 以上かどうかを返す関数
 */
function createWebsiteAccount(ageInput) {
    let age = ageInput;
    return function() {
        age = age + 1;
        return age >= 13 ? true: false;
    }
}

const childAccount = createWebsiteAccount(10);
test(childAccount(), false); // => false
test(childAccount(), false); // => false
test(childAccount(), true); // => true (今、子供は 13 歳です！)

const adultAccount = createWebsiteAccount(33);
test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)


line("Nightmare 1"); //---------------------------------------------

//テストをよく見て関数 accumulate を宣言してください。
/**
 * @param {number} num 加算する数値
 * @returns {Function} 呼び出しが連鎖できる関数。呼び出す度に渡された引数の値を累計していく。
 * 累計値が分かるように関数を呼び出したときに値をコンソールに表示するようにしておきましょう。
*/

// 関数宣言
function accumulate1(num) {
    return function accum(accumNum) {
        num += accumNum;
        console.log(num);
        return accum;
    }
}

// アロー関数
// const accumulate2 = num => {
//     const accum = accumNum => {
//         num += accumNum;
//         console.log(num);
//         return accum;
//     }
//     return accum;
// };


const accumulate2 = num => {
    return function accum(accumNum) {
        num += accumNum;
        console.log(num);
        return accum;
    };
};



// accumulate(1); // 初回は何もコンソールに表示されなくてよしとします。

// 関数呼び出しを連鎖させることができます。
// accumulate(1)(2); // 3
// accumulate(1)(2)(3); // 3 6
accumulate2(1)(2)(3)(4)(5)(6); // 3 6 10 15 21


line("Nightmare 2"); //---------------------------------------------
//accumulate を修正して、console.log を外し、代わりに .value() というメソッドで値を返すようにしてください。
/**
 * @param {number} num
 * @returns {Function} 呼び出しが連鎖できる関数。累計の値を返す `.value()` というメソッドを持つ。
 */
const accumulate = num => {
    const accum = accumNum => {
        num += accumNum;
        return accum;
    };
    accum.value = () => num;  // 関数にメソッドを持たせる
    return accum;
};

// 関数を呼び出すと `.value()` でその時点の累計値を 1 つ返します。初回の関数呼び出しから使えます。
test(accumulate(1).value(), 1);

// 関数呼び出しを連鎖させることができ、`.value()` で累計の値が得られます。
test(accumulate(1)(2).value(), 3);
test(accumulate(1)(2)(3)(4)(5)(6).value(), 21);




