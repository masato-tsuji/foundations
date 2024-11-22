
## アセスメント　→　Day7, Day13, Day19


## ---------------------------------------------
## Gitコマンド
## ---------------------------------------------

### ▼クローン
`git clone [URL]`

### ▼リモートリポジトリ接続時のパスワードについて
パスワードはpersonal access tokenを入力する必要がある
Settings ⇒ Developer settings ⇒ personal access tokenで生成したTokenを貼り付ける

### ▼ローカルリポジトリが無い場合の一連の流れ
```
mkdir [repository-name]          # ローカルリポジトリのディレクトリ作成
cd [repository-name]
echo "# [repository-name]" >> README.md
git init                         # ローカルリポジトリの作成（初期化） ⇒ .gitディレクトリが作られる
（同期対象から外したいものがある場合は .gitignore ファイルを作成して登録しておく）
git add README.md                # ローカルリポジトリにREADME.mdファイルの作成
（既にpushしたいものがある場合は git add .で全体をgitに追加）
git commit -m "first commit"     # README.mdファイルを作成した時点でコミット
git branch -M main               # ローカルに新規ブランチを作成
git remote add origin [URL]      # ローカルリポジトリとリモートリポジトリの連携
git push -u origin main          # ローカルコミットされた内容をリモートにpush
```


### ▼リモートリポジトリと連携
// リモート側にリポジトリがあってローカル側のリポジトリと接続
// ローカルリポジトリのカレントディレクトリで実行
```
// リモートリポジトリセット
git remote add origin https://github.com/masato-tsuji/foundations.git

// リモートリポジトリ確認
git remote -v

// 解除する場合は
git remote remove origin

// 同期する場合はpullじゃない方がいい？
git fetch
git merge origin/main

```

### ▼リモートリポジトリと連携(SSH)
// クライアント側でssh-keygenしてキーを生成
`ssh-keygen -t Ed25519 -b 4096 -C ""  -f raspi-github`
// 公開鍵（pub）の内容をGitHubのSSHを作成したところに登録
// クライアント側でSSHのポート番号を変更している場合はconfigファイルで登録
Host github.com
    Hostname ssh.github.com
    User git
    Identityfile ~/.ssh/raspi-github
    Port 22
// 接続テスト
`ssh -T git@github.com`
// 基本的な流れはhttpと同じでremote add のURLは下記になる
`git@github.com:gentarou7735/slackbot.git`



### ▼リモートリポジトリの確認
```
git remote -v
```

### ▼設定状態の確認

// 全設定
`git config -l`

// 項目指定
`git coifig user.email`


### ▼ユーザー名とメールアドレスを登録しておく
```
git config --global user.name "masato-tsuji"
git config --global user.email "masato_tsuji@mail.toyota.co.jp"
```

### ▼会社PCでPULL、PUSHするならProxy設定が必要
`git config --global http.proxy http://proxy1000.adm.toyota.co.jp:15520`

### ▼proxy削除する場合
`git config --global --unset http.proxy`

### ▼branchの確認
```
git branch
git branch -a    // リモートブランチも含める
```

### ▼branch名の変更（Mは同名があっても強制 mもある）
`git branch -M main`

### ▼branchの作成
`git branch xxxx`

### ▼branchへの移動 強制時は -f
`git switch xxxx`

### ▼branchの作成と切替を同時
`git switch -c xxxx`


### ▼基本的な流れ（ローカルで編集したコードをリモートにpush）
git add .                 # 変更をステージング（コミットの対象をINDEXに入れる）
git commit -m "[Add]test"  # コメントをつけてコミット
git push                  # リモートにpush

### ▼管理対象外にする
ディレクトリ直下に .gitignore のファイルを作り
*.exe
log/
などを記入し対象外にする


### ▼modifiedを取り消す
git checkout -- .
git checkout ファイル名||ディレクトリ名

### ▼ステージングを取り消す
git reset [ファイル名]

### ▼直前のcommitに戻る
git restore .
git restore ファイル名

### ▼リモートbranchを取り込む
`git fetch origin xxxx`

### ▼これも切り替えるコマンドだがswitchが後からできたのでそちらを
// checkoutは変更の取り消しなどに使う
`git checkout xxxx`


### ▼branchの削除
// カレントのbranchは削除できないので移動しておく
// pushかmerge済みでないと削除できない 強制削除は -D
`git branch -d xxxx`



// ------------------------------------------------
### ▼git pullとは
// 下記２つを実行したものと同じ
`git fetch`   // リモートブランチの状態を取得（のみ）
`git marge origin/main`


### ▼Githubからブランチの定義を新しく定義（合流）してPull（競合時にもOK）
// 現在のブランチで新しいコミットが作成される
`git pull --rebase`


### ▼Githubから強制Pull（github上に最新があるのならこれをする）
`git pull --allow-unrelated-histories  origin main`


// ------------------------------------------------
### ▼Githubへ転送 branchを指定できる
`git push -u origin main`


### ▼Githubへ強制Push
`git push -f  origin main`


// ---------------------------------------------
### 強制的にリモートの内容で上書き

# ローカルブランチがリモートブランチを追跡しているか確認
`git branch -vv`
```
gen@LAPTOP-LLO8K2DD:~/repositories/tecsdb-conv$ git branch -vv
  a    368f955 test
* main 801854e [origin/main] edit
# [oring/main]があればリモートのブランチを追跡できている
```

# 差分を確認（なければプロンプトが返る）
`git diff origin/main`

`git fetch origin`
`git reset --hard origin/main`


## ---------------------------------------------
## Firebase + Node.js  ⇒　開発環境はWSL2 + Dockerにした
## --------------------------------------------


### ①WSL2インストール
windows11の場合
```
wsl --install
```
本コマンドによって、以下4つの作業が実行されます。
・「Linux用Windowsサブシステム（WSL）」と「仮想マシン プラットフォーム」を有効化する
・WSL2用Linuxカーネルをダウンロード・インストールする
・WSL2を既定のバージョンとする
・Ubuntuディストリビューションをダウンロード・インストールする
さらにWindows11では、Windows Terminalがあらかじめインストール済となっています。


### WSLからindex.htmlを開く
// windows上のブラウザにD&Dしても開かない
// 方法1. 既定のブラウザで開く
`explorer.exe index.html`

// 方法2. chromeで開く
.bashrcに

function chrome(){
    /mnt/c/Program\ Files/Google/Chrome/Application/chrome.exe $(wslpath -w $(realpath $1))
}
alias chrome='chrome'
としておいて、chrome temp.html



### ②Docker Desktop for Windowsをインストール
インストール途中でWSL2と連携するようなメッセージ無かったが
起動して設定確認すると連携されていた
Use the WSL 2 based engine (Windows Home can only run the WSL 2 backend)にチェックあり

ubuntu起動して`docker --version`を実行するとインストールされている

### ③VS Codeと連携
①②をしてからVS Codeを起動すると自動で認識し拡張機能のインストールが促される
WSLという拡張機能


### パッケージ管理（バージョン切り替え）システム
homebrewやnvmやn, nodistなど色々あるがvoltaを採用

WSLにてインストールは
curl https://get.volta.sh | bash



### voltaでNode.jsのインストール
バージョン管理システムでNode.jsをインストールした方が互換性の管理がしやすい。
パッケージの依存関係も含めて管理してもらえるので変更した場合の作業が効率的。
※インストール可能なNode.js一覧は表示できないみたい・・・
```
volta install node@latest
volta install node  // でも可
```
// バージョン指定
`volta install node@14.15.0`

// インストールされているNodeの一覧
`volta list node`

// バージョンの切り替え（プロジェクトのカレントディレクトリで）
`volta pin node@14.15.0`

// グローバルに使用するバージョンの切り替え
`volta default node@14.15.0`



### Firebaseのインストール
// インストールするディレクトリはどこでも良さそう。。
`npm install -g firebase-tools`


### Firebaseにログイン
// ログイン済みの場合は現在のログインアカウントが表示される
`firebase login`

### google cloudのプロジェクトの一覧を表示
`firebase projects:list`

### プロジェクトの選択
`firebase use [project id]`


### ローカル環境でエミュレートする
Firebase Local Emulator Suite を使用すると、Firebase プロジェクトにデプロイする代わりにローカルマシンでアプリをビルドしてテストできます。開発中にローカルテストを行うことを強くおすすめします。その理由の 1 つとしては、本番環境でコストを発生させる可能性があるコーディング エラーのリスク（無限ループなど）が低下するためです。

関数をエミュレートするには:

`firebase emulators:start`

実行し、Emulator Suite UI の URL の出力を確認します。デフォルトは localhost:4000 ですが、お使いのマシンによっては別のポートでホストされている場合があります。その URL をブラウザに入力して、Emulator Suite UI を開きます。

firebase emulators:start コマンドの出力で、HTTP 関数の URL を確認します。この URL は http://localhost:5001/MY_PROJECT/us-central1/addMessage のような形式です。ただし、次の点に注意してください。

MY_PROJECT はプロジェクト ID に置き換えられます。
お使いのローカルマシンによってはポートが異なる場合があります。

終了する場合は
Ctrl + c

### サンプルコードのuppercase-firestoreをemulatorした場合
// URLのクエリストリングにメッセージ（文字）を送るとfirestoreのコレクションに追加される

// コンソールに出力されているメッセージ送信用のURLを開く
http://127.0.0.1:5001/webapi-415111/us-central1/addmessage

// URLにクエリストリングを追記する
http://127.0.0.1:5001/webapi-415111/us-central1/addmessage?text=test message

// エミュレートされたFirebaseサイトでFirestoreに追加されていることを確認する
http://127.0.0.1:4000/firestore 

※これをdeployする時はFunctionsのみにする
`firebase deploy --only functions`

### PowerShellのセキュリティのエラーが出た場合
// firebase : このシステムではスクリプトの実行が無効になっているため、...
```
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser
```
// セキュリティレベルが下がっているので注意が必要

### firebaseでgoogleのモジュールがないと言われた場合
npm install eslint-config-google --save-dev


### npm install (オプションなし)

オプションなしで`npm install`すると、カレントディレクトリにある package.json に記述されている情報を元に、そこに記述されている パッケージを node_modules （インストール先）にインストールします。

※Google Driveの仮想ディレクトリ上でinstallするとmkdirが失敗するエラーが出る ENOTDIR -4052


### package.jsonに"engines"が設定されている場合
// 「このバージョンのNode.jsでしか動かない」を表明できる
// 他のバージョンでインストールするとエラーが出る
````js
  "engines": {
    "node": "18"
  },
````

### firebase deployで下記のエラーが出る場合
```
Oops! Something went wrong! :(

ESLint: 7.19.0

ESLint couldn't find the config "google" to extend from. Please check that the name of the config is correct.
```

// 下記をインストール
`npm install eslint-config-google --save-dev`





### ビルドするためのツール

webpack
bundleおよびminify処理をしてくれる

babel
transpile処理をしてくれる

これらのツールは、Node.jsのパッケージとして提供されています。だから、フロントエンドの開発環境をNode.jsで構築することが多いのです。これらのパッケージをインストールして、設定ファイルに必要事項を記載しておくことで、コマンド1つで、一連のビルド処理を行ってくれます。


## ---------------------------------------------
## Node.js + React + GitHub Pages
## --------------------------------------------

### Reactの基本構成
srcディレクトリの中に
index.js  // メインファイル HTMLテンプレートとJSのコンポーネントをレンダリング実際の表示
App.js  // コンポーネントを定義したファイル。実際に画面に表示される内容はここで定義
publicディレクトリの中に
index.html  // メインのindex.jsの対になるHTMLのテンプレートファイル index.jsに読み込まれる

バックエンドでNode.jsが動くようなサーバならよいがそうでない場合はindex.jsは読み込まれないので
npm run buildでビルドしてindex.htmlが生成されindex.jsの相当するスクリプトが実行される。


### 前提条件
Node.js
npm
GitHub repository

### Reactのインストール
`npx create-react-app my-app cd my-app`

### GitHubと連携しpush
```
git remote add origin https://github.com/masato-tsuji/foundations.git
git push
```

### Reactのビルド
npm run build

### GitHubのPegesにデプロイするモジュールインストール
npm install --save gh-pages

### package.jsonの追記
`"homepage": "http://username.github.io/site",`

```
"scripts": { 
  "start": "react-scripts start", 
  "build": "react-scripts build", 
  "test":"react-scripts test", 
  "eject": "react-scripts eject", 
  "predeploy": "npm run build",  // 追記
  "deploy": "gh-pages -d build"  // 追記
}
```

### デプロイ VSCodeのコンソールで実行したほうがいい
`nmp run deploy`


### gh-pagesのブランチは既にあるエラーが出たらキャッシュ消す
`rm -rf node_modules/.cache`




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


### ▼コーディング上で改行
 ⇒ \ バックスラッシュで文字列を途中で改行しても連続と認識

### ▼コーディング上の改行を文字列でも扱う
 ⇒ `` バッククオートで囲むと実際の改行通りに認識

### ▼スプレッド構文はECMAScript 2015（ES6）から追加された機能
...array

### ▼changeイベントでの注意
change イベントは <input>, <select>, <textarea> 要素において、
ユーザーが要素の値を変更したときに発行されます。 input イベントとは異なり、 
change イベントは要素の値 (value) が変更されるたびに発生するとは限りません。


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

### オブジェクトの変換


````js
// Object.keys() キーの配列を作成
const fruits = {
  banana: 28,
  apple: 17,
  orange: 54,
}

const keys = Object.keys(fruits)
console.log(keys) // [banana, apple, orange]
````

````js
// Object.values() 値の配列を作成
const fruits = {
  banana: 28,
  apple: 17,
  orange: 54,
}

const values = Object.values(fruits)
console.log(values) // [28, 17, 54]
````

````js
// Object.entries() キーと値の配列を作成
const fruits = {
  banana: 28,
  apple: 17,
  orange: 54,
}

const entries = Object.entries(fruits)
console.log(entries)
// [[apple, 28], [orange, 17], [pear, 54]]
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

## ------------------------------------------------
## 日付・時刻
## ------------------------------------------------


### ▼一定時間でループさせる
````js
// 開始
timeoutID = setTimeout(displayTime, 10);
// 停止
clearTimeout(timeoutID);

Date.now();  // で都度差分を見ていけば経過時間が算出できる
// フォーマットする場合
new Date(Date.now());


````


## ------------------------------------------------
## CSS
## ------------------------------------------------

### ▼要素にクラスを追加/削除

element.classList.add('hoge');
element.classList.remove('hoge');

const div = document.createElement("div");
div.className = "foo";

// 最初の状態: <div class="foo"></div>
console.log(div.outerHTML);

// classList API を用いてクラスを除去、追加
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// visible が設定されていれば除去し、なければ追加
div.classList.toggle("visible");

// i が 10 未満であるかどうかの条件によって visible を追加または除去
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// 複数のクラスを追加または除去
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// スプレッド構文を使用したクラスの追加または除去
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// "foo" クラスを "bar" クラスで置き換え
div.classList.replace("foo", "bar");

// ★スタイルを元に戻す場合は（空白を代入）
div.style.backgroundColor = "";


### ▼vertical-alignが効かない

１・その要素、ブロック要素じゃないですか？
２・その要素にfloatかけてませんか？
３・かけてる所、間違ってませんか？
４・そもそもvertical-alignじゃないとダメですか？

1・ブロック要素には効かないので、インライン要素に変える。
例えば<div>タグはブロック要素なので、そのままだとvertical-alignは効きません。
なので、displayプロパティを使って、インライン要素に変えてあげましょう。
この時　display: inline;　だと高さや幅の指定ができないので、　display: table-cell;　を使います。
あとは必ず、高さを指定してください。
高さの真ん中に来るはずです。






