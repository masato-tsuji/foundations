'use strict'
// 都道府県当てクイズ

const prefecturesQuiz = () => {
    
    const nvArea = document.querySelector("#navi_area");
    const nvDesc = document.querySelector("#navi_description");
    const nvOpt = document.querySelector("#navi_option");
    const nvMsg = document.querySelector("#navi_message");
    const nvQuiz = document.querySelector("#navi_question");
    const nvRes = document.querySelector("#navi_result");
    const nvCnt = document.querySelector("#navi_count");
    const nvDnm = document.querySelector("#navi_denom");
    const nvTime = document.querySelector("#navi_time");
    const nvStart = document.querySelector("#navi_start");
    const nvReset = document.querySelector("#navi_reset");
    const tglOkinawa = document.querySelector("#okinawa_move");
    const tglMapLock = document.querySelector("#map_lock");
    const recArea = document.querySelector("#record_area");

    const defaultQuiz = "問題";

    // 出題用配列
    const prefDatas = prefInfos.map(pref => ({[pref["id"]]: pref["prefName"]}));
    // console.log(prefDatas);
    let choicePrefId = "";

    //出題用の配列
    //const prefDatas = prefInfos.map(pref => ({[pref["id"]]: pref["prefName"]}));
    const prefsData = () => {
        let prefsArray = [];
        let choicedPref;
        prefsData.makePrefs = (childMode = false) => {
            if (!childMode) {
                prefsArray = prefInfos.map(pref => ({[pref["id"]]: pref["prefName"]}));
            } else {
                prefsArray = prefInfos.map(pref => ({[pref["id"]]: pref["prefHiragana"]}));
            }
        }
        prefsData.getData = () => prefsArray;
        prefsData.choicedPref = "";
        prefsData.deletePref = () => {
            const index = prefsArray.indexOf(prefsData.choicedPref);
            console.log("delete index: ", index, prefsArray.length, prefsData.choicedPref);
            if (index > -1) {
                prefsArray.splice(index, 1);
            }
            console.log("delete index: ", index, prefsArray.length, prefsArray.indexOf(prefsData.choicedPref));
        }
        return prefsData;
    };
    const prefs = prefsData();


    // 初期化
    const initialize = () => {
        prefs.makePrefs(true);
        // console.log(prefs.getData());
        !tglOkinawa.checked ? tglOkinawa.click(): setViewBox();
        !tglMapLock.checked ? tglMapLock.click(): null;
        recArea.style.display = "block";
        nvArea.style.display = "block";
        nvDesc.innerText = "出題される都道府県の🗾場所を\nクリックしてください"

        // 初回のみ
        if (nvOpt.hasChildNodes() === false) {
            nvOpt.innerHTML = "<input id='radio_normal' name='nv_opt' type='radio'>ノーマル\
                <input id='radio_time' name='nv_opt' type='radio'>タイムトライアル";
            const normalMsg = "スタートボタンを押す度に出題されます";
            const timetryalMsg = "47都道府県全て正解するタイムを<br>計測します";
            nvOpt.addEventListener('change', (e) => {
                if (e.target.id === "radio_normal") {
                    nvMsg.innerText = normalMsg;
                    nvCnt.style.display = "none";
                    nvDnm.style.display = "none";
                    nvTime.style.display = "none";
                    initialize();
                } else if (e.target.id === "radio_time") {
                    nvMsg.innerHTML = timetryalMsg;
                    nvCnt.innerHTML = "0";
                    nvCnt.style.display = "block";
                    nvDnm.innerHTML = "/47";
                    nvDnm.style.display = "block";
                    nvTime.innerHTML = "0:00";
                    nvTime.style.display = "block";
                    initialize();
                }
            });
            nvOpt.childNodes[0].click();    // default
        }

        nvQuiz.style.backgroundColor = "";
        nvQuiz.innerText = defaultQuiz;
        nvRes.innerText = "";
        nvStart.disabled = false;
    }


    

    /**
     * 出力用の要素を受け取り経過時間をフォーマットして文字列を表示させる
     * @param {object} elm - 経過時刻を表示させる要素を受け取る
     * @returns タイマーを実行する関数execTimer
     */
    const timer = (elm) => {
        let cnt = 0;
        let timeoutID;
        const timeCnt = () => {
            ++cnt;
            elm.innerText = `${Math.floor(cnt / 60)}:${("0" + (cnt % 60)).toString().slice(-2)}`;
        }
        const execTimer = () => timeoutID = setInterval(timeCnt, 1000);
        execTimer.start = () => execTimer();
        execTimer.stop = () => clearInterval(timeoutID);
        execTimer.reset = () => {
            execTimer.stop();
            cnt = 0;
            elm.innerText = "0:00";
        }
        return execTimer;
    }
    
    const counter = (elm) => {
        let cnt = 0;
        const accum = () => {
            cnt++;
            elm.innerText = cnt;
            return cnt;
        }
        accum.value =  () => cnt;
        accum.up = () => accum();
        accum.reset = () => {
            cnt = 0;
            elm.innerText = 0;
        }
        return accum;
    }

    // クイズ出題
    const execQuiz = () => {
        nvRes.innerText = "";
        // const obj = rndChoice(prefDatas); // script.jsの関数を使用
        const obj = rndChoice(prefs.getData()); // script.jsの関数を使用
        prefs.choicedPref = obj;
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
        const maxPref = 47;

        // 結果表示
        let msg;
        if (choicePrefId === elm.id) {
            // msg = `正解${rndChoice(["🎉", "🎊", "🎈", "👍", "😊"])}`;
            nvQuiz.style.backgroundColor = "rgb(218, 255, 178)";
            prefs.deletePref();
            quizCounter.up();
        } else {
            nvQuiz.style.backgroundColor = "rgb(243, 174, 178)";
            // msg = `不正解${rndChoice(["😱", "😣", "😵", "🙈", "👻"])}`;
            return;
        }

        // 進捗チェック
        // if (quizCounter.value() < maxPref) {
        if (quizCounter.value() < 5) {
            execQuiz();
            return;
        }
        
        quizTimer.stop();
        msg = `おめでとう${rndChoice(["🎉", "🎊", "🚀", "🤗", "💮"])}`;
        nvRes.innerText = msg;
      
    
        // 記録チェック


        // 記録

    }


    // 都道府県クリック検出
    const prefElms = document.querySelectorAll(".jp-pref")
    .forEach(elm => {
        elm.addEventListener("click", (e) => {

            if (nvQuiz.innerText === defaultQuiz) return;

            // 回答チェック
            if (document.querySelector("#radio_normal").checked) {
                chkNormalQuiz(elm);
            } else if (document.querySelector("#radio_time").checked) {
                chkTimeQuiz(elm);
            }
        });
    });


    const quizTimer = timer(nvTime);
    const quizCounter = counter(nvCnt);

    // スタートボタン
    nvStart.addEventListener("click", (e) => {
        execQuiz();
        if (document.querySelector("#radio_time").checked) {
            nvStart.disabled = true;
            quizCounter.reset();
            quizTimer.start();
        }
    });
    
    // ＄リセットボタン
    nvReset.addEventListener("click", (e) => {
        quizTimer.reset();
        quizCounter.reset();
        initialize();
    });

    return initialize;
}


