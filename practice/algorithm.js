// === Алгоритмы ===

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

function log(num, result) {
    console.log(num + ")", result);
}