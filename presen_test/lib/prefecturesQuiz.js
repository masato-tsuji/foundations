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
    const msgBox = document.querySelector("#msg_box");
    const msgIcon = document.querySelector("#msg_icon");
    const msgRec = document.querySelector("#msg_record");
    const msgName = document.querySelector("#msg_input_name");
    const msgSave = document.querySelector("#msg_save_btn");
    const recArea = document.querySelector("#record_area");
    const recTbl = document.querySelector("#record_tbl");


    const defaultQuiz = "問題";

    // 出題用配列
    const prefDatas = prefInfos.map(pref => ({[pref["id"]]: pref["prefName"]}));
    let choicePrefId = "";

    //出題用の配列
    /**
     * 
     * @returns 
     */
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
            if (prefsArray.indexOf(prefsData.choicedPref) > -1) {
                const index = prefsArray.indexOf(prefsData.choicedPref);
                prefsArray.splice(index, 1);
            }
        }
        return prefsData;
    };
    const prefs = prefsData();  // 即時関数ではメソッドがundefinedになった･･･

    /**
     * 
     * @param {string} score 
     * @returns 
     */
    const record = () => {
        const recArray = [];
        const rowArray = [];
        let rank = 1;
        const readRecord = (score) => {
            const tbl = recTbl.querySelectorAll("td");
            if (tbl.length > 0) {rank = 1;}
            for (let i = 0; i < tbl.length; i++) {
                rowArray.push(tbl[i].innerText);
                if (i % 2 === 1) {
                    if (tbl[i].innerText !== "" && tbl[i].innerText < score) {rank++;}
                    recArray.push(rowArray.concat());
                    rowArray.splice(0);
                }
            }
            return recArray;
        }
        readRecord.getRank = () => rank;
        readRecord.writeRecord = (newRec) => {
            recArray.splice(rank - 1, 0, newRec);
            recArray.pop();
            const tbl = recTbl.querySelectorAll("td");
            for (let i = 0; i < recArray.length; i++) {
                tbl[i * 2].innerText = recArray[i][0];
                tbl[i * 2 + 1].innerText = recArray[i][1];
            }
        }
        return readRecord;
    }


    // 初期化
    const initialize = () => {
        prefs.makePrefs(false);
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
        let state = false;
        const timeCnt = () => {
            cnt++;
            elm.innerText = `${Math.floor(cnt / 60)}:${("0" + (cnt % 60)).toString().slice(-2)}`;
        }
        const execTimer = () => timeoutID = setInterval(timeCnt, 1000);
        execTimer.start = () => {
            execTimer();
            state = true;
        }
        execTimer.stop = () => {
            clearInterval(timeoutID);
            state = false;
        }
        execTimer.getState = () => state;
        execTimer.reset = () => {
            execTimer.stop();
            cnt = 0;
            elm.innerText = "0:00";
        }
        return execTimer;
    }
    
    /**
     * 
     * @param {*} elm 
     * @returns 
     */
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
            nvQuiz.style.backgroundColor = "rgb(218, 255, 178)";
            prefs.deletePref();
            quizCounter.up();
        } else {
            nvQuiz.style.backgroundColor = "rgb(243, 174, 178)";
            return;
        }

        // 進捗チェック
        // if (quizCounter.value() < maxPref) {
        if (quizCounter.value() < 5) {  //デモ用
            execQuiz();
            return;
        }
        
        quizTimer.stop();
        msg = `おめでとう${rndChoice(["🎉", "🎊", "🚀", "🤗", "💮"])}`;
        nvRes.innerText = msg;
      
        // 記録チェック
        const rec = record();
        rec(nvTime.innerText);

        // 6位以上ならreturn
        if (rec.getRank() > 5) {
            return;
        }

        // 記録更新メッセージ
        msgIcon.innerText = ["🏆", "🥈", "🥉", "4位", "5位"][rec.getRank() - 1];
        msgRec.innerText = nvTime.innerText;
        const showMessage = (() => {
            msgBox.style.display = "block";
            setTimeout(() => {
                msgBox.classList.add("show");
            }, 100);
        })();

        // 保存ボタン
        msgSave.addEventListener("click", (e) => {
            const userName = msgName.value ? msgName.value + "さん" : "ななしさん";
            rec.writeRecord([userName, nvTime.innerText]);
            msgBox.style.display = "none";
        });
    }
    
    // 都道府県クリック検出
    document.querySelectorAll(".jp-pref").forEach(elm => {
        elm.addEventListener("click", (e) => {

            
            // 回答チェック
            if (document.querySelector("#radio_normal").checked) {
                chkNormalQuiz(elm);
            } else if (document.querySelector("#radio_time").checked) {
                if (quizTimer.getState()) {
                    chkTimeQuiz(elm);
                }
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
        initialize()
    });

    return initialize;
}


