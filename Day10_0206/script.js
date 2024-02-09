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


line("worm up"); //---------------------------------------------
/**
 * @param {Array<object>} arrObjs 複数のオブジェクトが入った配列
 * @param {string} key キー
 * @returns {Array<any>} 配列の中のオブジェクトから、第 2 引数と同じキーに対応する値だけを拾って（＝ pluck して）、配列に入れたもの
 */



//アロー関数
// function pluck(arrObjs, key) {
//     return arrObjs.map(item => item[key]);
// }

function pluck(arrObjs, key) {
    const resArr = [];
    for (const obj of arrObjs) {
        resArr.push(obj[key]);
    }
    return resArr;
}

const arrayOfObjects = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
    { a: 7, b: 8, c: 9 },
  ];
  
  test(pluck(arrayOfObjects, "a"), [1, 4, 7]);
  test(pluck(arrayOfObjects, "b"), [2, 5, 8]);
  test(pluck(arrayOfObjects, "c"), [3, 6, 9]);
  test(pluck(arrayOfObjects, "d"), [undefined, undefined, undefined]);





  const hellos = {
    English: "Hello",
    Japanese: "Konnichiwa",
    German: "Hallo",
    Spanish: "Hola",
    Arabic: "Ahlan wa sahlan",
    Chinese: "Nihao",
  };
  
  /*
   * @returns {undefined} この関数は挨拶をコンソールに表示するだけで、返り値は必要ありません。
   */
  
  // ここにコードを書きましょう
  function sayHellos() {
    for (const key in hellos) {
        console.log(hellos[key]);
    }
  }


  sayHellos();　// 実際にこの関数を呼び出すと、以下のようにコンソールに表示されることを確認しましょう。
  // "Hello"
  // "Konnichiwa"
  // "Hallo"
  // "Hola"
  // "Ahlan wa sahlan"
  // "Nihao"
  

/**
 * @param {object} object
 * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
 */

// ここにコードを書きましょう
function getKeys(object) {
    const result = [];
    for (const key in object) {
        result.push(key);
    }
    return result;
}

const object1 = { a: 1, b: 2, c: "hello" };
const object2 = { 1: "a", 2: "b", hello: "c" };

// test(getKeys(object1), ["a", "b", "c"]);
// test(getKeys(object2), ["1", "2", "hello"]);


/**
 * @param {object} ???
 * @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
 */

// ここにコードを書きましょう
function getValues(object) {
    const result = [];
    for (const key in object) {
        result.push(object[key]);
    }
    return result;
}

test(getValues(object1), [1, 2, "hello"]);
test(getValues(object2), ["a", "b", "c"]);





  line("Nightmare"); //---------------------------------------------
  //関数 getDepth を宣言してください。
/**
 * @param {object} nestObj - 多次元のオブジェクト
 * @returns {number} 引数のオブジェクトの深さ（何層になっているか）を返す。入れ子になったオブジェクトが複数ある場合は、一番深い層の数を返してください。
 */

function getDepth1(nestObj, depthCnt = 1) {
    console.log("roop before: ", nestObj);
    let resKey;
    for (const key in nestObj) {
        if (typeof nestObj[key] === "object") {
          console.log("if: ", key, nestObj[key], typeof nestObj[key], depthCnt);
          return getDepth(nestObj[key], Math.max(++depthCnt, depthCnt));
          // depthCnt++;
        } else {
          depthCnt = 1;
        }
        //return typeof nestObj[obj] === "object" ? ++depthCnt : getDepth(nestObj[obj], depthCnt);
    }
    return getDepth(nestObj[key], depthCnt++);
}

// 〇
function getDepth2(nestObj, depthCnt = 1) {
  console.log("func: ", nestObj, depthCnt);
  for (const key in nestObj) {
    console.log("for: ", typeof nestObj[key], nestObj, nestObj[key]);
    if (typeof nestObj[key] === "object") {
      console.log("if中", key, nestObj[key], Math.max(depthCnt + 1, depthCnt));
      return getDepth(nestObj[key], Math.max(depthCnt + 1, depthCnt));
    } else {
      delete nestObj[key];
      console.log("next: ", nestObj, depthCnt);
      return getDepth(nestObj, depthCnt);
    }
  }
  return depthCnt;
}


// ネストのキーは取れない
function getDepth5(nestObj) {
  console.log(Object.keys(nestObj));
}

//一次元目の値は取得できている
function getDepth9(nestObj) {
  for (const key in nestObj) {
    console.log(nestObj[key]);

  }
}


// function getDepth(nestObj, depthCnt = 1) {

//   for (const key in nestObj) {
//     console.log("key", key);
//     if (typeof nestObj[key] === "object") {
//       return getDepth(nestObj[key], Math.max(depthCnt + 1, depthCnt));
//     } else {
//       console.log("delete key: ", nestObj[key]);
//       delete nestObj[key];
//       console.log(nestObj);
//       return getDepth(nestObj, depthCnt);
//     }
//   }
//   return depthCnt;
// }


function getDepth(nestObj) {
  let depthMax = 1;
  let depthCnt = 1;
  function counter(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        depthMax = Math.max(depthMax, depthCnt + 1);
        depthCnt = depthMax;
        //console.log("counter:", key,depthMax, depthCnt, obj[key]);
        return counter(obj[key]);
      }
    }
    depthMax = Math.max(depthMax, depthCnt);
    depthCnt = 1;
    return depthMax;
  }

  for (const key in nestObj) {
    if (typeof nestObj[key] === "object") {
      depthCnt++;
      //console.log("main: ", key, nestObj[key], depthMax, depthCnt);
      counter(nestObj[key]);
    }
  }
  return depthMax;
}


const nestedObjectA = { a: "A", b: { c: "C", d: "D", e: {f: "F"}}, g:"G", H: {i: {j: "J"}} };

const nestedObject1 = { a: "A" };
const nestedObject2 = { a: "A", b: { c: "C" } };
const nestedObject3 = { a: "A", b: { c: "C" }, d: { e: { f: "F" } } };
const nestedObjectZ = {
  z: {
    y: {
      x: {
        w: {
          v: {
            u: {
              t: {
                s: {
                  r: {
                    q: {
                      p: {
                        o: {
                          n: {
                            m: {
                              l: {
                                k: {
                                  j: {
                                    i: {
                                      h: {
                                        g: {
                                          f: {
                                            e: "E",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};


// nestedObject1 の深さは 1 です
test(getDepth(nestedObjectA), 3);


// nestedObject1 の深さは 1 です
test(getDepth(nestedObject1), 1);

// nestedObject2 の深さは 2 です
test(getDepth(nestedObject2), 2);

// nestedObject3 の深さは 3 です
test(getDepth(nestedObject3), 3);

// nestedObjectZ の深さは 22 です。
test(getDepth(nestedObjectZ), 22);





