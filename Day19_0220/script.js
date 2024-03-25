'use strict'

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("  actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}


// 1.
const doTheThing = array => {
  return array.filter(num => num < 6)
        .map( num => num * num);
}

test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);



// 2.

const arrayItem = (() => {
  const resArray = [];
  return {
    value() {
      return resArray;
    },
    append(item) {
      resArray.push(item);
    },
    remove(item) {
      const removeIndex = resArray.indexOf(item);
      if (removeIndex > -1) {
        resArray.splice(removeIndex, 1);
      }
      resArray;
    }
  };
})();


// 配列の値取得
const getItemsInRefrigerator = () => arrayItem.value();


/**
 * １つの渡された引数を配列に追加して返す
 * @param {string} item - 配列に追加する文字列
 * @returns {Array} - 引数を追加した配列
 */
const putItemInRefrigerator = item => arrayItem.append(item);


/**
 * １つの渡された引数を配列から削除（対象がない場合はそのまま返す）
 * @param {string} item - 配列から削除する文字列
 * @returns {Array} - 引数の文字列を削除した配列
 */
const removeItemFromRefrigerator = item => arrayItem.remove(item);



test(getItemsInRefrigerator(), []);

putItemInRefrigerator("milk");
test(getItemsInRefrigerator(), ["milk"]);

putItemInRefrigerator("juice");
test(getItemsInRefrigerator(), ["milk", "juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);



