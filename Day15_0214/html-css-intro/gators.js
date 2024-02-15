
const elm = document.querySelector("#btn");
elm.addEventListener("click", function() {
    const num =document.querySelector("#num").value;
    const croco = document.querySelector("#croco");
    croco.innerText += "🐊".repeat(num);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", function() {
    const croco = document.querySelector("#croco");
    croco.innerText = "";
});

