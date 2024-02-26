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
    },
  ];


for (const obj of unicorns) {
    document.body.innerHTML += `<p img=${obj.img} desc="${obj.desc}">${obj.name}</p>`;
}
document.body.appendChild(document.createElement("div"));

document.querySelectorAll("p").forEach( elm => {
    elm.addEventListener("click", (e) => {
        console.log(e.target.attributes.img.value);
        document.querySelector("div").innerHTML = 
            `<img src=${e.target.attributes.img.value}>\
            <p>${e.target.innerHTML}</p>\
            <p>${e.target.attributes.desc.value}</P>`;
    });
});




