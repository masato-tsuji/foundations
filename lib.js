

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
    return console.log(line + title + line );
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

