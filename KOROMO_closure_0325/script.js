'use strict'
// 1行目に記載している 'use strict' は削除しないでください

/**問題１: 
クロージャを使用して税金を計算する最適な解決方法を考えてみよう！
さまざまな都市の税率に基づいて製品の税金を計算するための関数を実装する必要があります。
この関数は、都市ごとに異なる税率を考慮して、製品の価格に適用される税金を返すものです。
/*
//以下の2つの解決方法があります：
//方法1:
const taxCalculatorTokyo1 = {
  taxCalculator: function(price) {
    return price * 0.1;
  }
};
const taxCalculatorNewYork1 = {
  taxCalculator: function(price) {
    return price * 0.08875;
  }
};
const taxCalculatorParis1 = {
  taxCalculator: function(price) {
    return price * 0.2;
  }
};
//方法２:
function taxCalculatorMaker(taxRate){
  function taxCalculator(price){
    return price * taxRate;
  }
  return taxCalculator;
}
const taxCalculatorTokyo2 = taxCalculatorMaker(0.1);
const taxCalculatorNewYork2 = taxCalculatorMaker(0.08875);
const taxCalculatorParis2 = taxCalculatorMaker(0.2);
/**以下の問いに答えてください：
1.都市を追加してください
  デンマーク（税率：25%）、北京（税率：13%）、イタリア（税率：22%）
2.どちらのアプローチがより柔軟で再利その理由を説明してください。
3.方法２で使用されているファクト%リ関数の利点は何ですか？
  ファクトリ関数がこのケースで適している理由を説明してください。
4.方法1は、方法2と比較して何が問題ですか？
　それを改善するためにできることはありますか？
/*    
    
    
/**問題２: 
クロージャを使用してカウンター関数を作成する方法を考えてみよう！
以下の outerFunc 関数は、クロージャを利用して内部でカウントを保持し、呼び出されるたびにその値を出力する
counter 関数を返します。
*/

function outerFunc() {
  let count = 1;
  function counter() {
    console.log(count);
    count += 1;
  }
  return counter;
}

const counter1 = outerFunc();

/**以下の問いに答えてください：
1.カウンターが正しい順序でインクリメントされることを確認するコードを書いてください
2.同じ outerFunc を使用して新しいカウンターを作成し、それぞれが独立して動作することを確認するコードを書いてください
3.外部から count 変数にアクセスできないことを確認するコードを書いてください
4.クロージャ内で定義された count 変数に直接アクセスできないことを確認するコードを書いてください
5.count 変数に直接アクセスできないのはなぜですか理由を説明してください
*/