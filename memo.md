
## アセスメント　→　Day7, Day13, Day19



## リモートリポジトリと連携
git remote add origin https://github.com/masato-tsuji/foundations.git


## ユーザー名とメールアドレスを登録しておく
git config --global user.name "masato-tsuji"
git config --global user.email "masato_tsuji@mail.toyota.co.jp"


## 会社PCでPULL、PUSHするならProxy設定が必要
git config --global http.proxy http://proxy1000.adm.toyota.co.jp:15520

## proxy削除する場合
git config --global --unset http.proxy


## 
git branch -M main  


## Githubへ転送
git push -u origin main

## Githubからブランチの定義を新しく定義（合流）してPull（競合時にもOK）
git pull --rebase


## Githubから強制Pull（github上に最新があるのならこれをする）
git pull --allow-unrelated-histories  origin main


## Githubへ強制Push
git pull --f  origin main


## ---------------------------------------------
絵文字コード
https://gray-code.com/html_css/list-of-emoji/


## --------------------------------------------
### スプレッド構文はECMAScript 2015（ES6）から追加された機能
...array

### 配列を征するものはJSを征す
https://ics.media/entry/200825/#for-in%E6%96%87%E3%82%92foreach%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%A7%E8%A1%A8%E7%8F%BE


### 2次元配列を1次元に
arr = [[1, 2], [3, 4], [5, 6]]

res = arr.reduce( (newArr,elem) => {
  return  newArr.concat(elem)
}, [] )

console.log(res)   //[1, 2, 3, 4, 5, 6]

//returnなし
res = arr.reduce( (newArr,elem) => 
   newArr.concat(elem)
, [] )

## ---------------------------------------------
### 3次元
arr = [[[1,2]],[[3,4],[5,6]]]

res = arr.reduce( (newArr,elem) => 
            newArr.concat(elem), [] 
            ).reduce( (newArr2, elem2) => 
            newArr2.concat(elem2), [] )

console.log(res) //[1, 2, 3, 4, 5, 6]