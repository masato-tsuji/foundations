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
    let choicePrefId = "";

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
        nvOpt.addEventListener('change', (e) => {
            if (e.target.id === "radio_normal") {
                nvMsg.innerHTML = normalMsg;
                nvTime.style.display = "none";
            } else if (e.target.id === "radio_time") {
                nvMsg.innerHTML = timetryalMsg;
                nvTime.innerHTML = "0:00";
                nvTime.style.display = "block";
            }
        });
        nvOpt.childNodes[0].click();    // default
    }

    /**
     * 出力用の要素を受け取り経過時間をフォーマットして表示させる
     * @param {object} elm - 経過時刻を表示させる要素を受け取る
     * @returns タイマーを実行する関数execTimer
     */
    const timer = (elm) => {
        let cnt = 0;
        let timeoutID;
        const counter = () => {
            ++cnt;
            elm.innerText = `${Math.floor(cnt / 60)}:${("0" + (cnt % 60)).toString().slice(-2)}`;
            execTimer();
        }
        const execTimer = () => timeoutID = setTimeout(counter, 1000);
        execTimer.start = () => execTimer();
        execTimer.stop = () => clearTimeout(timeoutID);
        execTimer.reset = () => execTimer.stop(); cnt = 0;
        return execTimer;
    }

    // クイズ出題
    const execQuiz = () => {
        nvRes.innerText = "";
        const obj = rndChoice(prefDatas); // script.jsの関数を使用
        choicePrefId = Object.keys(obj)[0]; 
        nvQuiz.innerText = Object.values(obj)[0];
    }

    // ノーマルモード 回答チェック
    const chkNormalQuiz = (elm) => {
        let msg;
        if (choicePrefId === elm.id) {
            msg = `正解${rndChoice(["🎉", "🎊", "🎈", "👍", "😊"])}`;
        } else {
            msg = `不正解${rndChoice(["😱", "😣", "😵", "🙈", "👻"])}`;
        }
        nvRes.innerHTML = msg;
    }

    // タイムトライアル 回答チェック
    const chkTimeQuiz = (elm) => {


        // 結果表示　正解ならすぐ消す
        let msg;
        if (choicePrefId === elm.id) {
            msg = `正解${rndChoice(["🎉", "🎊", "🎈", "👍", "😊"])}`;
        } else {
            msg = `不正解${rndChoice(["😱", "😣", "😵", "🙈", "👻"])}`;
        }
        nvRes.innerHTML = msg;


        // 進捗チェック


        // 継続なら出題した県を配列から抜ぬいてカウントアップ


        // 次の出題


        // 記録チェック


        // 記録


    }


    // 都道府県クリック検出
    const prefElms = document.querySelectorAll(".jp-pref")
    .forEach(elm => {
        elm.addEventListener("click", (e) => {
            if (document.querySelector("#radio_normal").checked) {
                chkNormalQuiz(elm);
            } else if (document.querySelector("#radio_time").checked) {
                chkTimeQuiz(elm);
            }
        });
    });

    // ＄判定して結果表示

    // ＄数秒待機

    // ＄次の問題

    const quizTimer = timer(nvTime);

    // スタートボタン
    nvStart.addEventListener("click", (e) => {
        execQuiz();
        if (document.querySelector("#radio_time").checked) {
            quizTimer.start();
            nvStart.disabled = true;
            //カウント開始
            
        }
    });
    
    // ＄リセットボタン
    nvReset.addEventListener("click", (e) => {
        quizTimer.reset();
        nvStart.disabled = false;
    });

    return initialize;
}


