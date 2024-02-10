'use strict'
// 1行目に記載している 'use strict' は削除しないでください


line("worm up") //---------------------------------------------
//引数に数値 x を取り、関数を返す関数 divide を作成してください。
//内部関数は引数に y をとり、x を y で割った値を返すようにしてください。
/**
 * @param {number} x
 * @returns {(y: number) => number} 引数として y を取り、x を y で割った値を返す関数
 */
function divide(x) {
    function division(y) {
        return x / y;
    }
    return division;
}

const divideByTwo = divide(2);

test(divideByTwo(4), 0.5);
test(divide(2)(1), 2);
test(divide(2)(0), Infinity);
test(divide(2)("P"), Infinity);








