'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)

function changeColor() {
  const colorHex = (Math.floor(Math.random() * parseInt("FFFFFF", 16))).toString(16);
  document.body.style.backgroundColor = "#" + colorHex;
}
