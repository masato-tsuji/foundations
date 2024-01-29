
## アセスメント　→　Day7, Day13, Day19


## ---------------------------------------------
## Gitコマンド
## ---------------------------------------------

### ▼リモートリポジトリと連携
```
git remote add origin https://github.com/masato-tsuji/foundations.git
```

### ▼ユーザー名とメールアドレスを登録しておく
```
git config --global user.name "masato-tsuji"
git config --global user.email "masato_tsuji@mail.toyota.co.jp"
```

### ▼会社PCでPULL、PUSHするならProxy設定が必要
git config --global http.proxy http://proxy1000.adm.toyota.co.jp:15520

### ▼proxy削除する場合
git config --global --unset http.proxy


### 
git branch -M main  


### ▼Githubへ転送
git push -u origin main

### ▼Githubからブランチの定義を新しく定義（合流）してPull（競合時にもOK）
git pull --rebase


### ▼Githubから強制Pull（github上に最新があるのならこれをする）
git pull --allow-unrelated-histories  origin main


### ▼Githubへ強制Push
git pull --f  origin main


## ---------------------------------------------
## 参考メモ
## --------------------------------------------

### ▼絵文字コード
https://gray-code.com/html_css/list-of-emoji/

### ▼配列を征するものはJSを征す
https://ics.media/entry/200825/#for-in%E6%96%87%E3%82%92foreach%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%A7%E8%A1%A8%E7%8F%BE


## --------------------------------------------
## コーディングメモ
## --------------------------------------------

### ▼スプレッド構文はECMAScript 2015（ES6）から追加された機能
...array

### ▼2次元配列を1次元に
````JS
arr = [[1, 2], [3, 4], [5, 6]]

res = arr.reduce( (newArr,elem) => {
  return  newArr.concat(elem)
}, [] )

console.log(res)   //[1, 2, 3, 4, 5, 6]

//returnなし
res = arr.reduce( (newArr,elem) => 
   newArr.concat(elem)
, [] )
````

## ---------------------------------------------
### ▼3次元
````JS
arr = [[[1,2]],[[3,4],[5,6]]]

res = arr.reduce( (newArr,elem) => 
            newArr.concat(elem), [] 
            ).reduce( (newArr2, elem2) => 
            newArr2.concat(elem2), [] )

console.log(res) //[1, 2, 3, 4, 5, 6]
````

## ------------------------------------------------
## Math
## ------------------------------------------------

### ▼ Math.random
Math.random() 関数は、 0 以上 1 未満 (0 は含むが、 1 は含まない) の範囲で浮動小数点の擬似乱数を返します。その範囲ではほぼ均一な分布で、ユーザーは範囲の拡大をすることができます。実装側で乱数生成アルゴリズムの初期シードを選択します。ユーザーが初期シードを選択、またはリセットすることは出来ません。
````JS
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1
````

2 つの値の間のランダムな整数を得る
この例は指定した値の間のランダムな整数を返します。返値は min 以上 (min が整数でない場合、 min より大きい次の整数以上)、 max 未満です。

````JS
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
````

### ▼ Math.floor()
Math.floor() 関数は与えられた数値以下の最大の**整数**を返します。切り捨て
※マイナスは勘違いしやすいので注意⚠️

````JS
console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05));
// Expected output: -6

````

### ▼ Math.cewil()
Math.ceil() 関数は、引数として与えた数以上の最小の整数を返します。切り上げ
注: Math.ceil(null) は整数の 0 を返し、 NaN エラーは返しません。
````JS
console.log(Math.ceil(0.95));
// Expected output: 1

console.log(Math.ceil(4));
// Expected output: 4

console.log(Math.ceil(7.004));
// Expected output: 8

console.log(Math.ceil(-7.004));
// Expected output: -7

Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(-0.95); // -0
Math.ceil(-4); // -4
Math.ceil(-7.004); // -7
````


### ▼十進数の丸め
````JS
/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === "undefined" || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split("e");
  value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
  // Shift back
  value = value.toString().split("e");
  return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
}

// Decimal round
const round10 = (value, exp) => decimalAdjust("round", value, exp);
// Decimal floor
const floor10 = (value, exp) => decimalAdjust("floor", value, exp);
// Decimal ceil
const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp);

// Round
round10(55.55, -1); // 55.6
round10(55.549, -1); // 55.5
round10(55, 1); // 60
round10(54.9, 1); // 50
round10(-55.55, -1); // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1); // -50
round10(-55.1, 1); // -60
// Floor
floor10(55.59, -1); // 55.5
floor10(59, 1); // 50
floor10(-55.51, -1); // -55.6
floor10(-51, 1); // -60
// Ceil
ceil10(55.51, -1); // 55.6
ceil10(51, 1); // 60
ceil10(-55.59, -1); // -55.5
ceil10(-59, 1); // -50
````
