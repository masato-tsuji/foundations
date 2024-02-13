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
    const tglMapLock = document.querySelector("#map_lock");

    // 出題用配列
    const prefDatas = prefInfos.map(pref => ({[pref["id"]]: pref["prefName"]}));
    let inQuiz = false;
    let resetQuiz = false;
    let choicePrefId = "";

    // スタート、リセットボタン




    // 初期化
    const initialize = () => {
        tglOkinawa.checked = true;
        setViewBox();
        tglMapLock.checked = true;
        tglMapLock.disabled = true;
        nvArea.style.display = "block";
        nvDesc.innerHTML = "出題される都道府県の🗾場所を\nクリックしてください"
    }

    // クイズ開始
    const execQuiz = () => {
        // while (!resetQuiz) {
        // }
        inQuiz = true;
        nvRes.innerHTML = "";
        const rnd = Math.floor(Math.random() * prefDatas.length);
        choicePrefId = Object.keys(prefDatas[rnd])[0];
        nvQuiz.innerHTML = prefDatas[rnd][choicePrefId];


    }

    // 都道府県クリック検出
    const prefElms = document.querySelectorAll(".jp-pref")
    .forEach(elm => {
        elm.addEventListener("click", (event) => {
            let msg;
            if (choicePrefId === elm.id) {
                msg = `正解です${rndChoice(["🎉", "🎊", "🎈"])}`;
            } else {
                msg = "不正解です😱";
            }
            nvRes.innerHTML = msg;
        });
    });

    // ＄判定して結果表示

    // ＄数秒待機

    // ＄次の問題

    // スタートボタン
    nvStart.addEventListener("click", (event) => {
        execQuiz();
    });

    // ＄リセットボタンで初期化
    const reset = () => resetQuiz = true;


    return initialize;
}


