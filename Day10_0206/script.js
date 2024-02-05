'use strict'
// 1行目に記載している 'use strict' は削除しないでください


line("worm up"); //---------------------------------------------
/**
 * @param {Array<object>} arrObjs 複数のオブジェクトが入った配列
 * @param {string} key キー
 * @returns {Array<any>} 配列の中のオブジェクトから、第 2 引数と同じキーに対応する値だけを拾って（＝ pluck して）、配列に入れたもの
 */

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


/*
const animals = [
  {'id': 1, 'category': 'bird', 'name': 'sparrow'},
  {'id': 2, 'category': 'bird', 'name': 'swallow'},
  {'id': 3, 'category': 'dog', 'name': 'shiba'},
  {'id': 4, 'category': 'bird', 'name': 'crow'},
  {'id': 5, 'category': 'dog', 'name': 'poodle'}
]

// animalsは定義済
//
const doubleItems = items.map( function (item) {
  return item * 2
})

//アロー関数
const names = animals.map(item => item.name)
console.log(names)
// ***出力結果***
// [ 'sparrow', 'swallow', 'shiba', 'crow', 'poodle' ]
*/

const arrayOfObjects = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
    { a: 7, b: 8, c: 9 },
  ];
  
  test(pluck(arrayOfObjects, "a"), [1, 4, 7]);
  test(pluck(arrayOfObjects, "b"), [2, 5, 8]);
  test(pluck(arrayOfObjects, "c"), [3, 6, 9]);


  line("Nightmare"); //---------------------------------------------
  //関数 getDepth を宣言してください。
/**
 * @param {object} nestObj - 多次元のオブジェクト
 * @returns {number} 引数のオブジェクトの深さ（何層になっているか）を返す。入れ子になったオブジェクトが複数ある場合は、一番深い層の数を返してください。
 */

function getDepth(nestObj, depthCnt = 0) {
    for (const obj in nestObj) {
        console.log(obj);
    }
}

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
test(getDepth(nestedObject1), 1);

// nestedObject2 の深さは 2 です
test(getDepth(nestedObject2), 2);

// nestedObject3 の深さは 3 です
test(getDepth(nestedObject3), 3);

// nestedObjectZ の深さは 22 です。
test(getDepth(nestedObjectZ), 22);





