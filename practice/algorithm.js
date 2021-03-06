// === Алгоритмы ===

function log(num, result) {
    console.log(num + ")", result);
}

// #1 Найти самое длинное слово в строке
function findLongestWordLength(str) {
    let arr = str.split(" ");
    let prevLen = 0;
    let word = "";
    for (let i of arr) {
        if (i.length > prevLen) {
            prevLen = i.length;
            word = i;
        }
    }
    return word;
}
// jumped
log(1, findLongestWordLength("The quick brown fox jumped over the lazy dog"));


// #2 Найти наибольшее значение в многомерном массиве
function largestOfFour(arr) {
    let prevNum;
    let array = [];

    for (let i = 0; i < arr.length; i++) {

        prevNum = arr[i][0];

        for (let j = 1; j < arr[i].length; j++) {

            if (arr[i][j] > prevNum) {
                prevNum = arr[i][j];
            }
        }
        array.push(prevNum);
    }

    return array;
}
// [25, 48, 21, -3]
log(2, largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));


// #3 Подтвердить окончание
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
// true
log(3, confirmEnding("Bastian", "an"));


// #4 Повторить строку
function repeatStringNumTimes(str, num) {
    let s = "";
    while (num > 0) {
        s += str;
        num--;
    }
    return s;
}
// abcabcabc
log(4, repeatStringNumTimes("abc", 3));


// #5 Обрезать строку
function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num)
        return str.slice(0, num) + "...";
    return str;
}
// A-tisket...
log(5, truncateString("A-tisket a-tasket A green and yellow basket", 8));


// #6 Найти первое значение из массива используя функцию как условие
function findElement(arr, func) {
    for (let i of arr) {
        if (func(i))
            return i;
    }
    return undefined;
}
// 2
log(6, findElement([1, 2, 3, 4], num => num % 2 === 0));


// #7 Первая Буква Всегда Заглавная
/** @arg {string} str */
function titleCase(str) {
    let arr = str.toLocaleLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
// Is'm A Little Tea Pot
log(7, titleCase("iS'm a LITTLE tea pOt"));


// #8 Соединить массивы
function frankenSplice(arr1, arr2, n) {
    let arrCopy = arr2.slice();
    for (let i = 0; i < arr1.length; i++)
        arrCopy.splice(n++, 0, arr1[i]);
    return arrCopy;
}
// [4, 1, 2, 3, 5, 6]
log(8, frankenSplice([1, 2, 3], [4, 5, 6], 1));
// [ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]
log(8, frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));


// #9 Поместить число в массив учитывая его значения
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    let val = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            val = i;
            break;
        }
    }
    return val;
}
// 3
log(9, getIndexToIns([10, 20, 30, 40, 50], 35));
// 0
log(9, getIndexToIns([3, 10, 5], 3));


// #10 True если первая строка содержит все символы второй строки
function mutation(arr) {
    let src = arr[1].toLowerCase();
    let str = arr[0].toLowerCase();
    for (let i of src) {
        if (str.indexOf(i) == -1)
            return false;
    }
    return true;
}

log(10, mutation(["hello", "hey"])); // false
log(10, mutation(["floor", "for"])); // true


// #11 Разбить массив на группы по N элементов
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size)
        newArr.push(arr.slice(i, i + size));
    return newArr;
}
// [ [ 'a', 'b' ], [ 'c', 'd' ] ]
log(11, chunkArrayInGroups(["a", "b", "c", "d"], 2));
// [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6 ] ]
log(11, chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));


// #12 Поиск различий в массивах
function diffArray(arr1, arr2) {
    let newArr = [];
    let tempArr = [].concat(arr2);

    arr1.forEach(x => {
        if (tempArr.some(y => y == x))
            tempArr.splice(tempArr.indexOf(x), 1);
        else
            newArr.push(x);
    });
    return newArr.concat(tempArr);
}
// [ 4 ]
log(12, diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// [ 'pink wool', 'diorite' ]
log(12, diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));


// #13 Поиск и удаление значений из массива
function destroyer(arr) {
    //log(1, arguments.length);
    let index;
    for (let i = 1; i < arguments.length; i++) {
        while ((index = arr.indexOf(arguments[i])) != -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
}
// [ 1, 1 ]
log(13, destroyer([1, 2, 3, 1, 2, 3], 2, 3));


// #14 Поиск и удаление значений из массива (без мутаций)
function destroyerF(arr) {
    // [ [ 1, 2, 3, 1, 2, 3 ], 2, 3 ] -> [ 2, 3 ]
    let argsArr = Array.from(arguments).splice(1);
    return arr.filter(x => !argsArr.includes(x));
}
// [ 1, 1 ]
log(14, destroyerF([1, 2, 3, 1, 2, 3], 2, 3));


// #15 Поиск совпадений в объекте
function whatIsInAName(collection, source) {
    return collection.filter(obj => {
        for (let x in source) {
            if (!obj.hasOwnProperty(x) || obj[x] !== source[x])
                return false;
        }
        return true;
    });
}

// [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]
log(15, whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
// [ { first: 'Tybalt', last: 'Capulet' } ]
log(15, whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


// #16 Spinal Tap Case
function spinalCase(str) {
    return str.trim().match(/[A-Z][a-z]+|[a-z]+/g).join("-").toLowerCase();
}
// this-is-spinal-tap
log(16, spinalCase('This Is Spinal Tap'));
// this-is-spinal-tap
log(16, spinalCase('thisIsSpinalTap'));


// #17 Pig Latin
function translatePigLatin(str) {
    const reg = /^[^aeiou]+/i;
    if (reg.test(str)) {
        return str.replace(reg, "") + str.match(reg)[0] + "ay";
    }
    return str + "way";
}
// aliforniacay
log(17, translatePigLatin("california"));
// algorithmway
log(17, translatePigLatin("algorithm"));


// #18 Поиск и замена (если before начинается с заглавной, то заглавная устанавливается и для after)
function myReplace(str, before, after) {
    let index = str.indexOf(before);
    // "A quick brown fox " + "leaped" + " over the lazy dog"
    return str.slice(0, index) + (/^[A-Z]/.test(before) ? (after.charAt(0).toUpperCase() + after.slice(1)) : after) + str.slice(index + before.length);
}
// A quick brown fox leaped over the lazy dog
log(18, myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


// #19 Составить пару ДНК
function pairElement(str) {
    let arr = [];

    for (let i of str)
        arr.push([i, getPair(i)]);

    function getPair(str) {
        switch (str) {
            case "A":
                return "T";
            case "T":
                return "A";
            case "C":
                return "G";
            case "G":
                return "C";
        }
    }
    return arr;
}
// [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
log(19, pairElement("GCG"));


// #20 Вернуть пропущенную букву
function fearNotLetter(str) {
    let validLetter;
    for (let i = 1; i < str.length; i++) {
        validLetter = str.charCodeAt(i - 1) + 1;
        if (str.charCodeAt(i) !== validLetter)
            return String.fromCharCode(validLetter);
    }
    return undefined;
}
// d
log(20, fearNotLetter("abce"));
// undefined
log(20, fearNotLetter("abcdefghijklmnopqrstuvwxyz"));


// #21 Выборка уникальных значений из массивов
function uniteUnique() {
    let arr = [];
    for (let arg of arguments) {
        for (let num of arg) {
            if (arr.indexOf(num) < 0)
                arr.push(num);
        }
    }
    return arr;
}
// [ 1, 3, 2, 5, 4 ]
log(21, uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// [ 1, 3, 2, [ 5 ], [ 4 ] ]
log(21, uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));


// #22 Замена символов html кодами
function convertHTML(str) {
    const symbols = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&apos;"
    };
    // [ 'D', 'o', 'l', 'c', 'e', ' ', '&', ' ', 'G', 'a', 'b', 'b', 'a', 'n', 'a' ]
    return str.split("").map(x => symbols[x] || x).join("");
}
// Dolce &amp; Gabbana
log(22, convertHTML("Dolce & Gabbana"));
// Hamburgers &lt; Pizza &lt; Tacos
log(22, convertHTML("Hamburgers < Pizza < Tacos"));


// #23 Сумма нечетных чисел Фибоначчи до заданного числа (включительно)
function sumFibs(num) {
    let sum = 0;
    let prevNum = 0;
    let curNum = 1;
    // 1,1,2,3
    while (curNum <= num) {
        if (curNum % 2)
            sum += curNum;
        curNum += prevNum;
        prevNum = curNum - prevNum;
    }
    return sum;
}
// 5
log(23, sumFibs(4));


// #24 Сумма простых чисел до заданного числа (включительно)
function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            sum += i;
    }
    // простое число делится на себя и 1
    function isPrime(n) {
        if (n <= 1)
            return false;

        for (let i = 2; i < n; i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    }
    return sum;
}
// 17
log(24, sumPrimes(10));


// #25 Найти наименьшее общее кратное с учетом диапазона чисел
function smallestCommons(arr) {
    let range = arr.sort((a, b) => a - b);
    const lastNum = range.pop();
    // [ 1, 2, 3, 4 ]
    for (let i = range[0] + 1; i < lastNum; i++) {
        range.push(i);
    }

    let mult = lastNum;
    while (!range.every(n => mult % n == 0)) {
        mult += lastNum;
    }

    return mult;
}
// 6
log(25, smallestCommons([3, 1]));
// 12
log(25, smallestCommons([2, 4]));


// #26 Удаляет первый элемент в массиве пока условие не будет соблюдено
function dropElements(arr, func) {
    const LEN = arr.length;
    for (let i = 0; i < LEN; i++) {
        if (func(arr[0]))
            break;
        else
            arr.shift();
    }
    return arr;
}
// [ 3, 4 ]
log(26, dropElements([1, 2, 3, 4], function(n) { return n > 5; }));


// #27 Развернуть массив любого уровня 
function steamrollArray(arr) {
    let steamrRoller = [];
    loop(arr);

    function loop(arr) {
        for (let i of arr) {
            if (Array.isArray(i))
                loop(i);
            else
                steamrRoller.push(i);
        }
    }
    return steamrRoller;
}
// [ 1, 2, 3, 4 ]
log(27, steamrollArray([1, [2], [3, [[4]]]]));


// #28 Binary to String
function binaryAgent(str) {
    return String.fromCharCode(...str.split(" ").map(x => parseInt(x, 2)));
}
// Aren't bonfires fun!?
log(28, binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


// #29 Возвращает true если значение свойства объекта truthy https://developer.mozilla.org/en-US/docs/Glossary/Truthy
function truthCheck(collection, pre) {
    return collection.every(obj => {
        for (let i in obj) {
            if (i == pre)
                return obj[i]; // truthy
        }
        return false;
        // 2 вариант
        // return obj.hasOwnProperty(pre) && Boolean(obj[pre]);
    })
}
// true
log(29, truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));
// false
log(29, truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Po", "sex": 0 }], "sex"));


// #30 Опциональный аргумент
function addTogether() {
    if (isValid(arguments[0])) {
        if (arguments.length == 2) {
            if (isValid(arguments[1]))
                return arguments[0] + arguments[1];
            return undefined;
        }
        return y => {
            if (isValid(y))
                return arguments[0] + y;
        };
    }

    function isValid(x) {
        return typeof x === "number";
    }
}
// 5
log(30, addTogether(2)(3));
// undefined
log(30, addTogether(2, "3"));
// 5
let f = addTogether(2);
log(30, f(3));


// #31 Создать конструктор "человек"
var Person = function(firstAndLast) {
    let firstName;
    let lastName;
    updateName(firstAndLast);

    function updateName(firstAndLast) {
        let name = firstAndLast.split(" ");
        firstName = name[0];
        lastName = name[1];
    }

    this.getFirstName = function() {
        return firstName;
    };
    this.getLastName = function() {
        return lastName;
    };
    this.getFullName = function() {
        return firstName + " " + lastName;
    };
    this.setFirstName = function(x) {
        firstName = x;
    };
    this.setLastName = function(x) {
        lastName = x;
    };
    this.setFullName = function(x) {
        updateName(x);
    };
};

var bob = new Person('BobRoss');
log(31, bob.getFullName()); // BobRoss undefined
bob.setFullName("Haskell Curry");
log(31, bob.getFullName()); // Haskell Curry
log(31, bob.getLastName()); // Curry
log(31, Object.keys(bob).length); // 6


// #32 Преобразовать свойство объекта "высота" в "орбитальный период" https://en.wikipedia.org/wiki/Orbital_period
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(o => {
        o.orbitalPeriod = Math.round(Math.PI * 2 * Math.sqrt(Math.pow(earthRadius + o.avgAlt, 3) / GM));
        delete o.avgAlt;
        return o;
    });
}
/* 
[ { name: 'iss', orbitalPeriod: 5557 },
  { name: 'hubble', orbitalPeriod: 5734 },
  { name: 'moon', orbitalPeriod: 2377399 } ] 
*/
log(32, orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));

/*
|==========================================================================
| JavaScript Algorithms and Data Structures Projects
|==========================================================================
*/

// #33 Проверка слов читающихся в обоих направлениях (Палиндром)
function palindrome(str) {
    let palindrome = str.toLowerCase().replace(/\W|_/g, "");
    for (let i = 0; i < palindrome.length; i++) {
        if (palindrome[i] !== palindrome[palindrome.length - 1 - i])
            return false;
    }
    // другое решение
    // return palindrome === palindrome.split("").reverse().join("");
    return true;
}
// true
log(33, palindrome("eye"));
// false
log(33, palindrome("1 eye for of 1 eye."));


// #34 Перевод числа в римские цифры (min: 1, max: 3999)
function convertToRoman(num) {
    const CONVERT = {
        1000: "M",
        500: "D",
        100: "C",
        50: "L",
        10: "X",
        5: "V",
        1: "I"
    };
    const ROMAN = [1000, 500, 100, 50, 10, 5, 1];
    const BREAK = [1000, 100, 10, 1];

    let arr = [];
    let divVal;
    let piece;
    let subVal;
    let div;

    for (let i of BREAK) {
        if (num >= i) {
            // разбиваем число на тысячи, сотни...
            divVal = Math.floor(num / i);
            piece = divVal * i;
            num -= piece;

            if (CONVERT[piece])
                arr.push(CONVERT[piece]);
            else if (divVal > 3) {
                for (let x = 0; x < ROMAN.length; x++) {
                    if (piece > ROMAN[x]) {
                        // запись цифры справа
                        subVal = piece - ROMAN[x];
                        div = getDivider(subVal);
                        if (div && (subVal / div) < 4 && ROMAN[x] != div) {
                            arr.push(CONVERT[ROMAN[x]]);
                            addNum(subVal / div, div);
                            break;
                        }
                        // запись цифры слева
                        subVal = ROMAN[x - 1] - piece;
                        if (CONVERT[subVal])
                            arr.push(CONVERT[subVal], CONVERT[ROMAN[x - 1]]);
                        else
                            console.log("bug! skip ", piece);
                        break;
                    }
                }
            }
            else
                addNum(divVal, i);

            if (num <= 0)
                break;
        }
    }

    function getDivider(num) {
        for (let i of BREAK) {
            if (num % i == 0)
                return i;
        }
    }

    function addNum(count, index) {
        while (count--)
            arr.push(CONVERT[index]);
    }
    return arr.join("");

    // лучшее решение
    /* 
    let decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

    let romanized = '';

    for (let index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];
        num -= decimalValue[index];
        }
    }

    return romanized; 
    */
}
// MCMLXXXIV
log(34, convertToRoman(1984));


// #34 Шифр Цезаря https://en.wikipedia.org/wiki/Caesar_cipher
function rot(str, code = false, shift = 13) {
    let rot;
    const MIN = 65; // A
    const MAX = 90; // Z
    return str.toUpperCase().split("").map(x => {
        rot = x.charCodeAt(0);
        if (rot > MAX || rot < MIN)
            return x;
        if (code) {
            rot += shift;
            if (rot > MAX) {
                rot = rot - MAX + MIN - 1;
            }
        }
        else {
            rot -= shift;
            if (rot < MIN) {
                rot = MAX + 1 - (MIN - rot);
            }
        }
        return String.fromCharCode(rot);
    }).join("");
}
// SERR PBQR PNZC
log(34, rot("FREE CODE CAMP", true));
// FREE CODE CAMP
log(34, rot("SERR PBQR PNZC"));


// #35 Валидатор номера (US)
function telephoneCheck(str) {
    return /^(1[\s\-]?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(str);
}
/* VALID NUMBERS
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555 */
log(35, telephoneCheck("555-555-5555"));


/* #36 Кассовый аппарат
INSUFFICIENT_FUNDS - нет монет, чтобы сдать сдачу ровно
OPEN - есть монеты для сдачи
CLOSED - есть монеты для сдачи, но для след. операции монет нет */
function checkCashRegister(price, cash, cid) {

    let change = cash - price;
    let arr = [];
    const DENOM = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
    let needed;
    let total;

    for (let i = DENOM.length - 1; i >= 0 && change > 0; i--) {
        if (change >= DENOM[i][1]) {
            needed = Math.floor(change / DENOM[i][1]);
            total = Math.floor(cid[i][1] / DENOM[i][1]);
            if (needed >= total) {
                arr.push(cid[i]);
                change -= cid[i][1];
            }
            else {
                needed *= DENOM[i][1];
                change -= needed;
                arr.push([DENOM[i][0], needed]);
            }
            // Fix! 0.6 - 0.5 = 0.009999999999999995 to 0.01
            change = Math.round(change * 100) / 100;
        }
    }
    if (change)
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    if (cid.every(x => {
            if (x[1] === 0)
                return true;
            else {
                for (let i of arr) {
                    if (i[0] === x[0])
                        return x[1] - i[1] === 0;
                }
                return false;
            }
        }))
        return { status: "CLOSED", change: [...cid] };
    return { status: "OPEN", change: [...arr] };
}
//{ status: 'OPEN', change: [ [ 'NICKEL', 0.05 ], [ 'PENNY', 0.01 ] ] }
log(36, checkCashRegister(0.94, 1, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));