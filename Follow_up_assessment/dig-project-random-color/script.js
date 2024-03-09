'use strict';
// please do not delete the 'use strict' line above

// ボタン
const colorBtn = document.getElementById('color-button');
colorBtn.addEventListener('click', changeColor);


// コンテナ
const divContainer = document.createElement("div");
divContainer.style.cssText = 
  "display: grid;\
   width: 200px;\
   margin-left: 50px;\
   padding: 20px;\
   background-color: #FFFFFF;\
   opacity: 60%;\
   border-radius: 8px;";
document.body.appendChild(divContainer);


// カラーコード表示
const elmColorName = document.createElement("p");
elmColorName.style.flexDirection = "column";
elmColorName.style.color = "red";
divContainer.appendChild(elmColorName);
// document.body.appendChild(elmColorName);

// スライダー
const makeSlider = insertElm => {

  const createElm = colorName => {
    const elm = document.createElement("input");
    elm.type = "range";
    elm.min = 0;
    elm.max = 255;
    elm.name = colorName;
    elm.innerText = colorName;
    insertElm.appendChild(elm);
  }

  return createElm;
}

const slider = makeSlider(divContainer);

slider("red");
slider("green");
slider("blue");


function changeColor() {
  const colorHexCode = "#" + (Math.floor(Math.random() * parseInt("FFFFFF", 16))).toString(16).padStart(6, "0");
  document.body.style.backgroundColor =  colorHexCode;
  // document.body.style.backgroundColor =  "RGB(125, 147, 36)";


  elmColorName.innerHTML = colorHexCode;
}



