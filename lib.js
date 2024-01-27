

function getDirName() {
    const arrPath = location.href.split("/");
    return arrPath[arrPath.length - 2];
}

function kugiri(title) {
    const dirName = getDirName()
    const line = " --------------- " ;
    return console.log(line + title + line );
}

console.log("lib.js loaded!");
console.log(getDirName() + "\n\n");

