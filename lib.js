

function getDirName() {
    const arrPath = location.href.split("/");
    return arrPath[arrPath.length - 2];
}


//区切り線
/**
 * 
 * 
 */
function line(title) {
    const dirName = getDirName()
    const line = " --------------- " ;
    let icon = "";

    if (title.includes("worm up")) {
        icon = " 💪";
    } else if (title.includes("基礎")){
        icon = " 🕺";
    } else if (title.includes("中級")){
        icon = " 🙈";
    } else if (String(title).includes("応用")){
        icon = " 👽";
    } else if (title.includes("Nightmare")){
        icon = " 😈";
    }
    return console.log(line + title + icon + line );
}



function test(actual, expected) {
    // 正しい結果を返すことを確認する
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("OK! Test PASSED.");
    } else {
        console.error("Test FAILED. Try again!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

console.log("lib.js loaded!");
console.log(getDirName() + "\n\n");


function csv2json() {
    const csvFilePath = './presen_test/img/pref_info.csv'
    const jsonFilePath = './presen_test/img/pref_info.json'

    const csv = require('csvtojson')
    const moment = require('moment')
    const fs = require('fs')

    csv()
    .fromFile(csvFilePath)
    .then((rows)=>{
    rows = rows.map((row) => {
        row.id = new Number(row.id)
        row.area = new String(row.area)
        row.prefName = new String(row.prefName)
        row.temp_2023 = new Number(row.temp_2023)
        // row.registrationDate = moment(row.registrationDate).format("YYYY-MM-DD")
        return row
    })
    fs.writeFile(jsonFilePath, JSON.stringify(rows, null, 2), (err) => {
        if (err) {
        throw err;
        }
        console.log("JSON generated.");
    })
    })
}


