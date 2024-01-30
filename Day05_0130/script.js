'use strict'
// 1行目に記載している 'use strict' は削除しないでください

line("worming up1"); //---------------------------------------------
// コードを修正
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


line("worming up2"); //---------------------------------------------
// コードを修正
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


line("TDD"); //---------------------------------------------


let actual;
let expected;

function addTen(number) {
  // ここにコードを書きます
}

actual = addTen(5);
expected = 15;

if (actual === expected) {
  console.log("Yey! Test PASSED.");
} else {
  console.log("Test FAILED. Keep trying!");
  console.log("  actual:", actual);
  console.log("expected:", expected);
}


line("TDD - 基礎1"); //---------------------------------------------

/**
 * @param {string} firstName - 下の名前
 * @param {string} lastName - 苗字
 * @returns {string} 名前と苗字を連結し、間にスペースを入れたもの
 */
function getFullName(firstName, lastName) {
    return  firstName + " " + lastName;
  }
  
  actual = getFullName("Ken", "Watanabe");
  expected = "Ken Watanabe";
  
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  

  line("TDD - 基礎2"); //---------------------------------------------

  /**
 * @param {string} name - 人の名前
 * @param {boolean} isFormal - 敬称をつけるべきかどうか（敬称ありなら true、無しなら false）
 * @returns {string} 与えられた人の名前と敬称が入った挨拶文
 */
function simpleGreeting(name, isFormal) {
    // ここにコードを書きましょう
    if (isFormal === true) {
        return "Hello, " + name + "-san." ;
    } else {
        return "Hello, " + name + ".";
    }
  }
  
  actual = simpleGreeting("Amy", true);
  expected = "Hello, Amy-san.";
  
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  actual = simpleGreeting("Matt", false);
  expected = "Hello, Matt.";
  
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }

  




  line("演習"); //---------------------------------------------
  
  // function hellomessageforperson(n1){
  //   if(n1.length>0){
  //   return `Hello, ${n1}!`;
  //   }}
    
  //   const a = "Beau";
  //   const aa = hellomessageforperson(a);
    
  //   console.log(aa);
  
  function sayHello(name){
    if (name) {
      return `Hello, ${name}!`;
    }
  }
  
  const person = "Beau";
  const message = sayHello(person);
  
  console.log(message);


  line("TDD - Nightmare 😈"); //---------------------------------------------
//関数 isPrime を宣言してください。（素数かどうか）
//素数・・・1より大きい数値で1かその数でしか割れないもの2 ,3 ,5...

/**
 * @param {number} number - 確認したい数字
 * @returns {boolean} 与えられた数字が素数かどうか
 */
// ここにコードを書きましょう
// function isPrime(number) {
//   if (number <= 1) return false;
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

function isPrime(number) {
  if (number <= 1) return false;
  //平方根までのループで良い（但し4 => 2はループ範囲外になるので1を加算）
  const max = Math.floor(Math.sqrt(number)) + 1;
  for (let i = 2; i < max; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}


actual = isPrime(1);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isPrime(2);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isPrime(3);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isPrime(4);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isPrime(5);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isPrime(104728);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isPrime(104729);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// 必要に応じてテストを書きましょう。

  

line("code - 基礎2"); //---------------------------------------------

function isPositive(thing) {
  if (thing < 0) {
      return false;
  } else if (thing > 0) {
      return true;
  } else if (thing === 0) {
      return false;
  } 
}

expected = true; // 期待するテスト結果
actual = isPositive(1); // テストする式

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
expected = false; // 期待するテスト結果
actual = isPositive(0); // テストする式

test(expected, actual);









