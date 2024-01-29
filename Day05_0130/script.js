'use strict'
// 1行目に記載している 'use strict' は削除しないでください

separatorLine("worming up1"); //---------------------------------------------

// function isHot(temperature) {
//     if temperature>30 {
//     return "暑い！";
//     return "暑くない";
//   }
  
function isHot(temperature) {
    if (temperature > 30) {
        return "暑い！";
    } else {
        return "暑くない";
    }
}
  
console.log(isHot(31)); // "暑い！" を表示
console.log(isHot(2)); // "暑くない" を表示
console.log(isHot(30)); // "暑くない" を表示

console.log(isHot(31)); // "暑い！" を表示
console.log(isHot(2)); // "暑くない" を表示
console.log(isHot(30)); // "暑くない" を表示


separatorLine("worming up2"); //---------------------------------------------

// function getTypeOfSchool(age) {
//     if age < 6
//     return "幼稚園";
//     } if else (age < 11); {
//           return "小学校";
//     else (age > 15) {
//   return "中学校";
//     }
//     if (age < 18) {
//   return "高校";
//     }
//     else {
//     return "高校卒業後";
//     }
//   }
  
function getTypeOfSchool(age) {
    if (age < 6) {
        return "幼稚園";
    } else if (age < 11) {
        return "小学校";
    } else if (age < 15) {
        return "中学校";
    } else if (age < 18) {
        return "高校";
    } else {
        return "高校卒業後";
    }
}

console.log(getTypeOfSchool(3)); // "幼稚園" を表示
console.log(getTypeOfSchool(8)); // "小学校" を表示
console.log(getTypeOfSchool(13)); // "中学校" を表示
console.log(getTypeOfSchool(16)); // "高校" を表示
console.log(getTypeOfSchool(30)); // "高校卒業後" を表示


separatorLine("基礎1"); //---------------------------------------------




