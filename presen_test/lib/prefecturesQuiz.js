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
    const recArea = document.querySelector("#record_area");

    // 出題用配列
    const prefDatas = prefInfos.map(pref => ({[pref["id"]]: pref["prefName"]}));
    let inQuiz = false;
    let resetQuiz = false;
    let choicePrefId = "";

    // スタート、リセットボタン


    // 初期化
    const initialize = () => {

        !tglOkinawa.checked ? tglOkinawa.click(): setViewBox();
        !tglMapLock.checked ? tglMapLock.click(): null;
        recArea.style.display = "block";
        nvArea.style.display = "block";
        nvDesc.innerHTML = "出題される都道府県の🗾場所を\nクリックしてください"

        nvOpt.innerHTML = "<input id='radio_normal' name='nv_opt' type='radio'>ノーマル\
            <input id='radio_time' name='nv_opt' type='radio'>タイムトライアル";
        const normalMsg = "スタートボタンを押す度に出題されます";
        const timetryalMsg = "47都道府県全て正解するタイムを計測します";
        nvOpt.addEventListener('change', (event) => {
            if (event.target.id === "radio_normal") {
                nvMsg.innerHTML = normalMsg;
                nvTime.style.display = "none";
            } else if (event.target.id === "radio_time") {
                nvMsg.innerHTML = timetryalMsg;
                nvTime.innerHTML = "0:00";
                nvTime.style.display = "block";
            }
        });
        nvOpt.childNodes[0].click();

    }

    // クイズ出題
    const execQuiz = () => {

        inQuiz = true;
        nvRes.innerHTML = "";
        const rnd = Math.floor(Math.random() * prefDatas.length);
        choicePrefId = Object.keys(prefDatas[rnd])[0];
        nvQuiz.innerHTML = prefDatas[rnd][choicePrefId];

    }

    // タイムトライアル

    // // 開始
    // timeoutID = setTimeout(displayTime, 10);
    // // 停止
    // clearTimeout(timeoutID);

    // Date.now();  // で都度差分を見ていけば経過時間が算出できる
    // // フォーマットする場合
    // new Date(Date.now());

    const timer = () => {
        let cnt = 0;
        let timeoutID;
        const execTimer = () => {
            timeoutID = setTimeout(execTimer, 1000);
            ++cnt;
            nvTime.innerHTML = `${Math.floor(cnt / 60)}:${("0" + (cnt % 60)).toString().slice(-2)}`;
        }
        execTimer.start = () => execTimer();
        execTimer.stop = () => {
            clearTimeout(timeoutID);
            nvTime.innerHTML = "0:00";
            cnt = 0;
        }
        return execTimer;
    }

    // 都道府県クリック検出
    const prefElms = document.querySelectorAll(".jp-pref")
    .forEach(elm => {
        elm.addEventListener("click", (event) => {
            let msg;
            if (choicePrefId === elm.id) {
                msg = `正解${rndChoice(["🎉", "🎊", "🎈", "👍", "😊"])}`;
            } else {
                msg = `不正解${rndChoice(["😱", "😣", "😵", "🙈", "👻"])}`;
            }
            nvRes.innerHTML = msg;
        });
    });

    // ＄判定して結果表示

    // ＄数秒待機

    // ＄次の問題

    const quizTimer = timer();

    // スタートボタン
    nvStart.addEventListener("click", (event) => {
        execQuiz();
        if (document.querySelector("#radio_time").checked) {
            console.log("time!");
            quizTimer.start();
            nvStart.disabled = true;
        }

    });
    
    // ＄リセットボタンで初期化
    nvReset.addEventListener("click", (event) => {
        quizTimer.stop();
        nvStart.disabled = false;
    });
    
    // const reset = () => quizTimer.stop();    //resetQuiz = true;


    return initialize;
}


