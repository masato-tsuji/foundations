'use strict';
// please do not delete the 'use strict' line above

// ボタンイベント設定
const colorBtn = document.getElementById('color-button');
colorBtn.addEventListener('click', setRandomSliderColor);


// スライダー用コンテナレンダリング
const divContainer = document.createElement("div");
divContainer.className = "slider-container";
document.body.appendChild(divContainer);


// カラーコード表示要素レンダリング
const elmColorCode = document.createElement("p");
elmColorCode.className = "color-code-disp";
divContainer.appendChild(elmColorCode);


// スライダーオブジェクト定義
const makeSlider = (targetElm, colorChangeFunc) => {
  const createElm = colorName => {
    // 色名の要素レンダリング
    const name = document.createElement("span");
    name.textContent = colorName.toUpperCase();
    name.className = "color-name";
    targetElm.appendChild(name);
    // スライダー要素レンダリング
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = 0;
    slider.max = 255;
    slider.value = 0;
    slider.name = colorName;
    slider.textContent = colorName;
    slider.disabled = true;
    targetElm.appendChild(slider);
    slider.addEventListener("input", colorChangeFunc);
    return {
      setVal(val) {
        slider.value = val;
      },
      getVal() {
        return slider.value;
      },
      setDisabled(bool) {
        slider.disabled = bool;
      }
    }
  }
  return createElm;
}

// スライダーオブジェクト作成
const slider = makeSlider(divContainer, changeBodyBgColor);
const redSlider = slider("red");
const greenSlider = slider("green");
const blueSlider = slider("blue");
const sliders = [redSlider, greenSlider, blueSlider];


// RGBスライダーの各色の値をランダムに生成し背景色変更を呼び出し
function setRandomSliderColor() {
  sliders.map((elm) => elm.setDisabled(false));
  sliders.map((elm) => elm.setVal(Math.floor(Math.random() * 255)));
  changeBodyBgColor();
}


// 背景色をRGBスライドバーで設定されている色に変更
function changeBodyBgColor() {
  const rgbCode = `RGB(${redSlider.getVal()}, ${greenSlider.getVal()}, ${blueSlider.getVal()})`;
  document.body.style.backgroundColor = rgbCode;
  // RGB値とHEX値を表示
  elmColorCode.innerHTML = 
    rgbCode + "<br>HEX:#" +
    rgbCode.match(/\d+/g).map((val) => {
       return ("0" + parseInt(val).toString(16)).slice(-2)
    }).join("");
}



