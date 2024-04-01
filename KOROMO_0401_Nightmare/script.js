'use strict'


line ("4/01"); // ---------------------------------------------

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
  
  
  
  function getIntroductions2(num) {
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
  
  
  console.log(getIntroductions2("a"));
  
  
  // test(getIntroductions(1), ["1 さん、ようこそ。"]);
  // test(getIntroductions(2), ["1 さん、ようこそ。", "2 さん、ようこそ。1 さんです"]);
  // test(getIntroductions(5), [
  //   "1 さん、ようこそ。",
  //   "2 さん、ようこそ。1 さんです",
  //   "3 さん、ようこそ。1 さん、2 さんです",
  //   "4 さん、ようこそ。1 さん、2 さん、3 さんです",
  //   "5 さん、ようこそ。1 さん、2 さん、3 さん、4 さんです",
  // ]);















