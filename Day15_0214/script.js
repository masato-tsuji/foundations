'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("OK! Test PASSED.");
    } else {
        console.error("Test FAILED. Try again!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
        console.trace();
    }
}



// line("worm up"); //---------------------------------------------

// // 1
// document.getElementsByTagName("img")[0].width = 500;

// // 2
// document.getElementsByTagName("h1")[0].innerText = "私は最初の h1 要素です。";

// // 3
// document.getElementsByTagName("h2")[0].innerText = "私は最初の h2 要素です。";

// // 4
// document.getElementsByTagName("h2")[1].innerText = "私は 2 つめの h2 要素です。";

// // 5
// document.getElementsByTagName("h3")[0].innerHTML = "私は <i>cool</i> な h3 要素です。";


// line("基礎1"); //---------------------------------------------

// document.querySelector("h1").innerText = "プログラミング基礎";

// const elm = document.createElement("h2");
// elm.innerText = "masato tusji";
// document.querySelector("h1").appendChild(elm);

// const elmStyle = document.querySelector("h1").style;
// elmStyle.backgroundColor = "green";
// elmStyle.textAlign = "right";
// elmStyle.color = "white";



line("基礎1"); //---------------------------------------------



const elmS = document.querySelector("h1");









