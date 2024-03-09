'use strict';
// please do not delete the 'use strict' line above

// ボタン
const colorBtn = document.getElementById('color-button');
colorBtn.addEventListener('click', changeColor);


// スライダー用コンテナ
const divContainer = document.createElement("div");
divContainer.style.cssText = 
  "display: grid;\
   width: 200px;\
   margin-left: 50px;\
   padding: 20px;\
   gap: 12px 0px;\
   background-color: #FFFFFF;\
   opacity: 60%;\
   border: solid 1px #636363;\
   border-radius: 8px;";
document.body.appendChild(divContainer);


// カラーコード表示
const elmColorCode = document.createElement("p");
elmColorCode.style.height = "25px";
elmColorCode.style.fontSize = "20px";
elmColorCode.style.fontWeight = "bold";
divContainer.appendChild(elmColorCode);


// スライダーオブジェクト定義
const makeSlider = (targetElm, colorChangeFunc) => {
  const createElm = colorName => {
    // 色名
    const name = document.createElement("span");
    name.innerText = colorName.toUpperCase();
    name.style.fontSize = "16px";
    targetElm.appendChild(name);
    // スライダー
    const elm = document.createElement("input");
    elm.type = "range";
    elm.min = 0;
    elm.max = 255;
    elm.value = 0;
    elm.name = colorName;
    elm.innerText = colorName;
    elm.disabled = true;
    targetElm.appendChild(elm);
    elm.addEventListener("input", changeBodyBgColor);
    return {
      setVal(val) {
        elm.value = val;
      },
      getVal() {
        return elm.value;
      },
      setDisabled(bool) {
        elm.disabled = bool;
      }
    }
  }
  return createElm;
}

// スライダーレンダリング
const slider = makeSlider(divContainer, changeBodyBgColor);
const redSlider = slider("red");
const greenSlider = slider("green");
const blueSlider = slider("blue");
const sliders = [redSlider, greenSlider, blueSlider];


// 背景色をランダムに変える
function changeColor() {
  // ランダム値をスライダーにセット
  sliders.map( elm => elm.setVal(Math.floor(Math.random() * 255)));
  // 背景色変更
  changeBodyBgColor();
  // スライダー有効化
  sliders.map( elm => elm.setDisabled(false));
}

// 背景色を各スライドバーで設定されている色に変更
function changeBodyBgColor() {
  const rgbCode = `RGB(${redSlider.getVal()}, ${greenSlider.getVal()}, ${blueSlider.getVal()})`;
  document.body.style.backgroundColor = rgbCode;
  // RGB値とHEX値を表示
  elmColorCode.innerHTML = 
    rgbCode + "<br>HEX:" +
    "#" + rgbCode.match(/\d+/g).map( val => {return ("0" + parseInt(val).toString(16)).slice(-2)}).join("");
}



