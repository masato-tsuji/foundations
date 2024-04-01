'use strict'


line ("方法１"); // ---------------------------------------------

//パーティに n 人のゲストが来ています。各ゲストには番号が割り当てられます。
//各ゲストにすでに到着しているゲストを紹介する関数 getIntroductions を宣言してください。
/**
 * @param {number} num - ゲストの数
 * @returns {Array<string>} 到着するゲストへの挨拶文が入った配列
 */

const getIntroductions = num => {
  const resArray = [];
  const menbers = [];
  let string;
  for (let i = 1; i <= num; i++) {
    if (i > 1) menbers.push(i - 1);
    string = menbers.length > 0 ? `${menbers.join(" さん、")} さんです` : "";
    resArray.push(`${i} さん、ようこそ。${string}`);
  }
  return resArray.length > 0 ? resArray : "有効な数値ではありません";
}


test(getIntroductions(0), "有効な数値ではありません");
test(getIntroductions(-1), "有効な数値ではありません");
test(getIntroductions(0.5), "有効な数値ではありません");
test(getIntroductions("３"), "有効な数値ではありません");
test(getIntroductions("a"), "有効な数値ではありません");

test(getIntroductions("1"), ["1 さん、ようこそ。"]);
test(getIntroductions(1), ["1 さん、ようこそ。"]);
test(getIntroductions(2), ["1 さん、ようこそ。", "2 さん、ようこそ。1 さんです"]);
test(getIntroductions(5), [
  "1 さん、ようこそ。",
  "2 さん、ようこそ。1 さんです",
  "3 さん、ようこそ。1 さん、2 さんです",
  "4 さん、ようこそ。1 さん、2 さん、3 さんです",
  "5 さん、ようこそ。1 さん、2 さん、3 さん、4 さんです",
]);




// line ("方法２"); // ---------------------------------------------

// function getIntroductions2(num) {
//   const resArray = [];
//   const menbers = [];
//   let string;

//   return Array.from(Array(num))
//               .map((_ ,i ) => i)
//               .from(this , (x) => {
//                 return x;
//               });
  



  // Array.from([1, 2, 3], (x) => x + x);
  // [2, 4, 6]

//   for (let i = 1; i <= num; i++) {
//     if (i > 1) menbers.push(i - 1);
//     string = menbers.length > 0 ? `${menbers.join(" さん、")} さんです` : "";
//     resArray.push(`${i} さん、ようこそ。${string}`);
//   }
//   return resArray;


// }


// console.log(getIntroductions2(3));

// test(getIntroductions2(1), ["1 さん、ようこそ。"]);



  





// パーティに n 人のゲストが来ています。各ゲストには番号が割り当てられます。
// 各ゲストにすでに到着しているゲストを紹介する関数 getIntroductions を宣言してください。

/**
 * @param {number} - ゲストの数
 * @returns {Array<string>} 到着するゲストへの挨拶文が入った配列
 */

// ここにコードを書きましょう
// const getIntroductions = num => {
//   const array = [];
//   let i = 1;
//   while (i <= num) {
//     array.push(`${num} さん、ようこそ。`);

//     i++;
//   }
// }




// test(getIntroductions(1), ["1 さん、ようこそ。"]);
// test(getIntroductions(2), ["1 さん、ようこそ。", "2 さん、ようこそ。1 さんです"]);
// test(getIntroductions(5), [
//   "1 さん、ようこそ。",
//   "2 さん、ようこそ。1 さんです",
//   "3 さん、ようこそ。1 さん、2 さんです",
//   "4 さん、ようこそ。1 さん、2 さん、3 さんです",
//   "5 さん、ようこそ。1 さん、2 さん、3 さん、4 さんです",
// ]);







