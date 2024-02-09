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





