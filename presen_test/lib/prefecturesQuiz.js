'use strict'
// 都道府県当てクイズ

const prefecturesQuiz = () => {
    
    const nvArea = document.querySelector("#navi_area");
    const nvDesc = document.querySelector("#navi_description");
    const nvOpt = document.querySelector("#navi_option");
    const nvMsg = document.querySelector("#navi_message");
    const nvQuiz = document.querySelector("#navi_question");
    const nvRes = document.querySelector("#navi_result");
    const nvTime = document.querySelector("#navi_time");
    const nvStart = document.querySelector("#navi_start");
    const nvReset = document.querySelector("#navi_reset");

    const tglOkinawa = document.querySelector("#okinawa_move");

    const prefDatas = prefInfos.map(pref => ({[pref["id"]]: pref["prefName"]}));

    // ＄初期化（表示リセットと県情報を取得）
    const initialize = () => {

        tglOkinawa.checked = true;
        setViewBox();

        nvArea.style.display = "block";

        nvDesc.innerHTML = "出題される都道府県の🗾場所を\nクリックしてください！"



    }

    // ＄出題（ランダムに都道府県を出力）
    // Math.floor(Math.random() * max)

    // ＄県クリック検出

    // ＄判定して結果表示

    // ＄待機

    // ＄次の問題

    // ＄リセットボタンで初期化

    return initialize;
}


