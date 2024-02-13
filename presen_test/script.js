'use strict'

// グローバル変数宣言
let mapZoomLock;
let selectPref;

// 県情報読み込み
const prefInfos = [{"id":"pref01","area":"北海道","prefName":"北海道","temp_2023":32.5},{"id":"pref02","area":"東北","prefName":"青森県","temp_2023":9},{"id":"pref03","area":"東北","prefName":"岩手県","temp_2023":21.1},{"id":"pref04","area":"東北","prefName":"宮城県","temp_2023":30.1},{"id":"pref05","area":"東北","prefName":"秋田県","temp_2023":30.2},{"id":"pref06","area":"東北","prefName":"山形県","temp_2023":31.4},{"id":"pref07","area":"東北","prefName":"福島県","temp_2023":35.7},{"id":"pref08","area":"関東","prefName":"茨城県","temp_2023":6.2},{"id":"pref09","area":"関東","prefName":"栃木県","temp_2023":34.4},{"id":"pref10","area":"関東","prefName":"群馬県","temp_2023":39.3},{"id":"pref11","area":"関東","prefName":"埼玉県","temp_2023":28.2},{"id":"pref12","area":"関東","prefName":"千葉県","temp_2023":32.1},{"id":"pref13","area":"関東","prefName":"東京都","temp_2023":22.7},{"id":"pref14","area":"関東","prefName":"神奈川県","temp_2023":37.4},{"id":"pref15","area":"中部","prefName":"新潟県","temp_2023":19.1},{"id":"pref16","area":"中部","prefName":"富山県","temp_2023":29.9},{"id":"pref17","area":"中部","prefName":"石川県","temp_2023":14.6},{"id":"pref18","area":"中部","prefName":"福井県","temp_2023":7.9},{"id":"pref19","area":"中部","prefName":"山梨県","temp_2023":5.5},{"id":"pref20","area":"中部","prefName":"長野県","temp_2023":13.5},{"id":"pref21","area":"中部","prefName":"岐阜県","temp_2023":33.9},{"id":"pref22","area":"中部","prefName":"静岡県","temp_2023":20.3},{"id":"pref23","area":"中部","prefName":"愛知県","temp_2023":33.9},{"id":"pref24","area":"近畿","prefName":"三重県","temp_2023":20},{"id":"pref25","area":"近畿","prefName":"滋賀県","temp_2023":7.9},{"id":"pref26","area":"近畿","prefName":"京都府","temp_2023":18.3},{"id":"pref27","area":"近畿","prefName":"大阪府","temp_2023":25.5},{"id":"pref28","area":"近畿","prefName":"兵庫県","temp_2023":26.7},{"id":"pref29","area":"近畿","prefName":"奈良県","temp_2023":7.6},{"id":"pref30","area":"近畿","prefName":"和歌山県","temp_2023":14},{"id":"pref31","area":"中国","prefName":"鳥取県","temp_2023":0.5},{"id":"pref32","area":"中国","prefName":"島根県","temp_2023":29.8},{"id":"pref33","area":"中国","prefName":"岡山県","temp_2023":11.4},{"id":"pref34","area":"中国","prefName":"広島県","temp_2023":16.3},{"id":"pref35","area":"中国","prefName":"山口県","temp_2023":16.9},{"id":"pref36","area":"四国","prefName":"徳島県","temp_2023":19.9},{"id":"pref37","area":"四国","prefName":"香川県","temp_2023":25.7},{"id":"pref38","area":"四国","prefName":"愛媛県","temp_2023":10.7},{"id":"pref39","area":"四国","prefName":"高知県","temp_2023":27.9},{"id":"pref40","area":"九州・沖縄","prefName":"福岡県","temp_2023":19.3},{"id":"pref41","area":"九州・沖縄","prefName":"佐賀県","temp_2023":34.3},{"id":"pref42","area":"九州・沖縄","prefName":"長崎県","temp_2023":26.2},{"id":"pref43","area":"九州・沖縄","prefName":"熊本県","temp_2023":31},{"id":"pref44","area":"九州・沖縄","prefName":"大分県","temp_2023":19.1},{"id":"pref45","area":"九州・沖縄","prefName":"宮崎県","temp_2023":0.3},{"id":"pref46","area":"九州・沖縄","prefName":"鹿児島県","temp_2023":32.7},{"id":"pref47","area":"九州・沖縄","prefName":"沖縄県","temp_2023":17.5}]

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
    const okinawa = document.querySelector("#pref47");
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
                document.querySelector("#pref24").style.fill = "#ff11c7";
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
            // console.log(getPrefInfo(elm.id).prefName);
            selectPref = elm.id;
        
        });
    });


    // viewBox





});

// ページロード完了
window.onload = function() {
    console.log("window loaded");
};


