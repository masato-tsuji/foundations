'use strict'

// グローバル変数宣言
let mapZoomLock;
let selectPref;

// 県情報読み込み
const prefInfos = [{"id":"pref_01","area":"北海道","prefName":"北海道","shortName":"北海道","prefHiragana":"ほっかいどう","shortHiragana":"ほっかいどう","temp2023":21.5},{"id":"pref_02","area":"東北","prefName":"青森県","shortName":"青森","prefHiragana":"あおもりけん","shortHiragana":"あおもり","temp2023":3.6},{"id":"pref_03","area":"東北","prefName":"岩手県","shortName":"岩手","prefHiragana":"いわてけん","shortHiragana":"いわて","temp2023":23.1},{"id":"pref_04","area":"東北","prefName":"宮城県","shortName":"宮城","prefHiragana":"みやぎけん","shortHiragana":"みやぎ","temp2023":30.9},{"id":"pref_05","area":"東北","prefName":"秋田県","shortName":"秋田","prefHiragana":"あきたけん","shortHiragana":"あきた","temp2023":29},{"id":"pref_06","area":"東北","prefName":"山形県","shortName":"山形","prefHiragana":"やまがたけん","shortHiragana":"やまがた","temp2023":34.1},{"id":"pref_07","area":"東北","prefName":"福島県","shortName":"福島","prefHiragana":"ふくしまけん","shortHiragana":"ふくしま","temp2023":33.6},{"id":"pref_08","area":"関東","prefName":"茨城県","shortName":"茨城","prefHiragana":"いばらきけん","shortHiragana":"いばらき","temp2023":26.1},{"id":"pref_09","area":"関東","prefName":"栃木県","shortName":"栃木","prefHiragana":"とちぎけん","shortHiragana":"とちぎ","temp2023":13.2},{"id":"pref_10","area":"関東","prefName":"群馬県","shortName":"群馬","prefHiragana":"ぐんまけん","shortHiragana":"ぐんま","temp2023":12.8},{"id":"pref_11","area":"関東","prefName":"埼玉県","shortName":"埼玉","prefHiragana":"さいたまけん","shortHiragana":"さいたま","temp2023":14.4},{"id":"pref_12","area":"関東","prefName":"千葉県","shortName":"千葉","prefHiragana":"ちばけん","shortHiragana":"ちば","temp2023":17.4},{"id":"pref_13","area":"関東","prefName":"東京都","shortName":"東京","prefHiragana":"とうきょうと","shortHiragana":"とうきょう","temp2023":29.9},{"id":"pref_14","area":"関東","prefName":"神奈川県","shortName":"神奈川","prefHiragana":"かながわけん","shortHiragana":"かながわ","temp2023":13.5},{"id":"pref_15","area":"中部","prefName":"新潟県","shortName":"新潟","prefHiragana":"にいがたけん","shortHiragana":"にいがた","temp2023":8.7},{"id":"pref_16","area":"中部","prefName":"富山県","shortName":"富山","prefHiragana":"とやまけん","shortHiragana":"とやま","temp2023":19.1},{"id":"pref_17","area":"中部","prefName":"石川県","shortName":"石川","prefHiragana":"いしかわけん","shortHiragana":"いしかわ","temp2023":17.1},{"id":"pref_18","area":"中部","prefName":"福井県","shortName":"福井","prefHiragana":"ふくいけん","shortHiragana":"ふくい","temp2023":11.3},{"id":"pref_19","area":"中部","prefName":"山梨県","shortName":"山梨","prefHiragana":"やまなしけん","shortHiragana":"やまなし","temp2023":25.1},{"id":"pref_20","area":"中部","prefName":"長野県","shortName":"長野","prefHiragana":"ながのけん","shortHiragana":"ながの","temp2023":28.2},{"id":"pref_21","area":"中部","prefName":"岐阜県","shortName":"岐阜","prefHiragana":"ぎふけん","shortHiragana":"ぎふ","temp2023":15.2},{"id":"pref_22","area":"中部","prefName":"静岡県","shortName":"静岡","prefHiragana":"しずおかけん","shortHiragana":"しずおか","temp2023":13.1},{"id":"pref_23","area":"中部","prefName":"愛知県","shortName":"愛知","prefHiragana":"あいちけん","shortHiragana":"あいち","temp2023":12.6},{"id":"pref_24","area":"近畿","prefName":"三重県","shortName":"三重","prefHiragana":"みえけん","shortHiragana":"みえ","temp2023":32.1},{"id":"pref_25","area":"近畿","prefName":"滋賀県","shortName":"滋賀","prefHiragana":"しがけん","shortHiragana":"しが","temp2023":4.2},{"id":"pref_26","area":"近畿","prefName":"京都府","shortName":"京都","prefHiragana":"きょうとふ","shortHiragana":"きょうと","temp2023":9.4},{"id":"pref_27","area":"近畿","prefName":"大阪府","shortName":"大阪","prefHiragana":"おおさかふ","shortHiragana":"おおさか","temp2023":19.1},{"id":"pref_28","area":"近畿","prefName":"兵庫県","shortName":"兵庫","prefHiragana":"ひょうごけん","shortHiragana":"ひょうご","temp2023":27.2},{"id":"pref_29","area":"近畿","prefName":"奈良県","shortName":"奈良","prefHiragana":"ならけん","shortHiragana":"なら","temp2023":23.7},{"id":"pref_30","area":"近畿","prefName":"和歌山県","shortName":"和歌山","prefHiragana":"わかやまけん","shortHiragana":"わかやま","temp2023":15.7},{"id":"pref_31","area":"中国","prefName":"鳥取県","shortName":"鳥取","prefHiragana":"とっとりけん","shortHiragana":"とっとり","temp2023":27.4},{"id":"pref_32","area":"中国","prefName":"島根県","shortName":"島根","prefHiragana":"しまねけん","shortHiragana":"しまね","temp2023":25.5},{"id":"pref_33","area":"中国","prefName":"岡山県","shortName":"岡山","prefHiragana":"おかやまけん","shortHiragana":"おかやま","temp2023":31.4},{"id":"pref_34","area":"中国","prefName":"広島県","shortName":"広島","prefHiragana":"ひろしまけん","shortHiragana":"ひろしま","temp2023":19.2},{"id":"pref_35","area":"中国","prefName":"山口県","shortName":"山口","prefHiragana":"やまぐちけん","shortHiragana":"やまぐち","temp2023":33.1},{"id":"pref_36","area":"四国","prefName":"徳島県","shortName":"徳島","prefHiragana":"とくしまけん","shortHiragana":"とくしま","temp2023":4.2},{"id":"pref_37","area":"四国","prefName":"香川県","shortName":"香川","prefHiragana":"かがわけん","shortHiragana":"かがわ","temp2023":15.5},{"id":"pref_38","area":"四国","prefName":"愛媛県","shortName":"愛媛","prefHiragana":"えひめけん","shortHiragana":"えひめ","temp2023":31},{"id":"pref_39","area":"四国","prefName":"高知県","shortName":"高知","prefHiragana":"こうちけん","shortHiragana":"こうち","temp2023":40},{"id":"pref_40","area":"九州・沖縄","prefName":"福岡県","shortName":"福岡","prefHiragana":"ふくおかけん","shortHiragana":"ふくおか","temp2023":6.2},{"id":"pref_41","area":"九州・沖縄","prefName":"佐賀県","shortName":"佐賀","prefHiragana":"さがけん","shortHiragana":"さが","temp2023":27.1},{"id":"pref_42","area":"九州・沖縄","prefName":"長崎県","shortName":"長崎","prefHiragana":"ながさきけん","shortHiragana":"ながさき","temp2023":21.8},{"id":"pref_43","area":"九州・沖縄","prefName":"熊本県","shortName":"熊本","prefHiragana":"くまもとけん","shortHiragana":"くまもと","temp2023":32.5},{"id":"pref_44","area":"九州・沖縄","prefName":"大分県","shortName":"大分","prefHiragana":"おおいたけん","shortHiragana":"おおいた","temp2023":10.5},{"id":"pref_45","area":"九州・沖縄","prefName":"宮崎県","shortName":"宮崎","prefHiragana":"みやざきけん","shortHiragana":"みやざき","temp2023":28.7},{"id":"pref_46","area":"九州・沖縄","prefName":"鹿児島県","shortName":"鹿児島","prefHiragana":"かごしまけん","shortHiragana":"かごしま","temp2023":25.6},{"id":"pref_47","area":"九州・沖縄","prefName":"沖縄県","shortName":"沖縄","prefHiragana":"おきなわけん","shortHiragana":"おきなわ","temp2023":3}];


/**
 * 引数のidと一致する都道府県の情報を返す
 * @param {string} id - 都道府県を識別するための文字列 pref_xx
 * @returns {object} - 一致した都道府県情報のオブジェクト
 */
const getPrefInfo = id => {
    for (const pref of prefInfos) {
        if (pref["id"] === id) return pref;
    }
}

/**
 * マップ表示のViewBox（座標と縮尺）を設定しマップに反映する
 * 引数が無い場合はズームと位置を沖縄移動の設定に合わせ調整する
 * @param {Array} viewParams - viewBoxを設定する配列又は空を受け取る
 */
const setViewBox = viewParam => {
    const svg = document.querySelector("#svg_japan");
    const okinawa = document.querySelector("#pref_47");
    const tglOkinawa = document.querySelector("#okinawa_move");

    if (Array.isArray(viewParam)) {

    } else if (tglOkinawa.checked) {
        okinawa.setAttribute("transform", "translate(400,-180)");
        svg.setAttribute("viewBox", "-325 -4 1300 1100");
    } else {
        okinawa.setAttribute("transform", "translate(0,0)");
        svg.setAttribute("viewBox", "-440 0 1600 1350");
    }
}

/**
 * 
 * @param {Array} array 
 * @returns 
 */
const rndChoice = array => {
    return array[Math.floor(Math.random() * array.length)];
}


//DOMツリーが出来上がったら実行※画像読み込み前
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM tree created");

    // メニュークリック
    const menuElms = document.querySelectorAll(".menu-btn")
    .forEach(elm => {
        elm.addEventListener("click", (event) => {
            console.log(elm.innerHTML);

            // 都道府県を知ろう
            if (elm.id === "btn_game01") {
                
            }
            
            // 都道府県当てクイズ
            if (elm.id === "btn_game02") {

                const quiz = prefecturesQuiz();
                
                quiz();
            }
            //prefecturesQuiz
            
        });
    });   
    
    // オプション設定トグルイベント
    const cnfElms = document.querySelectorAll(".cnf-tgl > input")
    .forEach(elm => {
        elm.addEventListener("change", (event) => {
            // console.log(elm.id);
            // 県名表示
            if (elm.id === "disp_pref_name") {

            }

            // 沖縄移動
            if (elm.id === "okinawa_move") {
                setViewBox();
            }

            // 知名度UP
            if (elm.id === "disp_pref_highlite") {
                document.querySelector("#pref_24").style.fill = "#ff11c7";
            }
            
            // 地図ロック(rxjs.jsにて変数使用)
            if (elm.id === "map_lock") {
                mapZoomLock = elm.checked;
            }
            
        });
    });
    
    // 各県クリックイベント
    const prefElms = document.querySelectorAll(".jp-pref")
    .forEach(elm => {
        elm.addEventListener("click", (event) => {
            // console.log(prefInfo.id[elm.id].prefName);
            console.log(getPrefInfo(elm.id).prefName);
            selectPref = elm.id;
        
        });
    });


    // viewBox





});

// ページロード完了
window.onload = function() {
    console.log("window loaded");
};


