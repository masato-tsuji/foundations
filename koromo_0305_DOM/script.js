'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const unicorns = [
  {
    name: 'GoldenChocolate',
    img: 'imgs/01_goldenchocolate.jpg',
    desc: 'Gentle and kind.'
  },
  {
    name: 'StareingCourage',
    img: 'imgs/02_stareingcourage.jpg',
    desc: 'Young unicorn, brother of NobleBreeze.'
  },
  {
    name: 'ObsidianConfidence',
    img: 'imgs/03_obsidianconfidence.jpg',
    desc: 'Black knight of Abirian kingdom.'
  },
  {
    name: 'NobleBreeze',
    img: 'imgs/04_noblebreeze.jpg',
    desc: 'Princess of Abirian kingdom.'
  },
  {
    name: 'DreamBox',
    img: 'imgs/05_dreambox.jpg',
    desc: 'She is full of dreams.'
  },{
    name: 'CyberTiger',
    img: 'https://seijirokosakitmc.github.io/myfriendlyunicorns/imgs/06_cybertiger.jpg',
    desc: 'Happy Hacking.'
  },
];


for (const obj of unicorns) {
  const p = document.createElement("p");
  p.innerText = obj.name;
  p.style.cursor = "pointer";
  document.body.appendChild(p)
    .addEventListener("click", (e) => {
      document.querySelector("div").innerHTML = 
      `<img class="unicorn-img" src=${obj.img}>\
      <h2>${obj.name}</h2>\
      <p>${obj.desc}</P>`;
      document.querySelector(".unicorn-img").style.cssText = "width: 30%; height: 30%;";
    });
}
document.body.appendChild(document.createElement("div"));
  

