// === Алгоритмы ===

// Найти самое длинное слово в строке
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
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


// Найти наибольшее значение в многомерном массиве
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
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));


// Подтвердить окончание
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
// true
console.log(confirmEnding("Bastian", "an"));


// Повторить строку
function repeatStringNumTimes(str, num) {
    let s = "";
    while (num > 0) {
        s += str;
        num--;
    }
    return s;
}
// abcabcabc
console.log(repeatStringNumTimes("abc", 3));


// Обрезать строку
function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num)
        return str.slice(0, num) + "...";
    return str;
}
// A-tisket...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


// Найти первое значение из массива используя функцию как условие
function findElement(arr, func) {
    for (let i of arr) {
        if (func(i))
            return i;
    }
    return undefined;
}
// 2
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


// Первая Буква Всегда Заглавная
/** @arg {string} str */
function titleCase(str) {
    let arr = str.toLocaleLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
// Is'm A Little Tea Pot
console.log(titleCase("iS'm a LITTLE tea pOt"));


// Соединить массивы
function frankenSplice(arr1, arr2, n) {
    let arrCopy = arr2.slice();
    for (let i = 0; i < arr1.length; i++)
        arrCopy.splice(n++, 0, arr1[i]);
    return arrCopy;
}
// [4, 1, 2, 3, 5, 6]
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// [ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));


// Поместить число в массив учитывая его значения
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

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([3, 10, 5], 3)); // 0


// True если первая строка содержит все символы второй строки
function mutation(arr) {
    let src = arr[1].toLowerCase();
    let str = arr[0].toLowerCase();
    for (let i of src) {
        if (str.indexOf(i) == -1)
            return false;
    }
    return true;
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["floor", "for"])); // true


// Разбить массив на группы по N элементов
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size)
        newArr.push(arr.slice(i, i + size));
    return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6 ] ]


// Поиск различий в массивах
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
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// [ 'pink wool', 'diorite' ]
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));


// Поиск и удаление значений из массива
function destroyer(arr) {
    //console.log(arguments.length);
    let index;
    for (let i = 1; i < arguments.length; i++) {
        while ((index = arr.indexOf(arguments[i])) != -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
}
// [ 1, 1 ]
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// Поиск и удаление значений из массива (без мутаций)
function destroyerF(arr) {
    // [ [ 1, 2, 3, 1, 2, 3 ], 2, 3 ] -> [ 2, 3 ]
    let argsArr = Array.from(arguments).splice(1);
    return arr.filter(x => !argsArr.includes(x));
}
// [ 1, 1 ]
console.log(destroyerF([1, 2, 3, 1, 2, 3], 2, 3));


// Поиск совпадений в объекте
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
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
// [ { first: 'Tybalt', last: 'Capulet' } ]
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


// Spinal Tap Case
function spinalCase(str) {
    return str.trim().match(/[A-Z][a-z]+|[a-z]+/g).join("-").toLowerCase();
}
// this-is-spinal-tap
console.log(spinalCase('This Is Spinal Tap'));
// this-is-spinal-tap
console.log(spinalCase('thisIsSpinalTap'));


// Pig Latin
function translatePigLatin(str) {
    const reg = /^[^aeiou]+/i;
    if (reg.test(str)) {
        return str.replace(reg, "") + str.match(reg)[0] + "ay";
    }
    return str + "way";
}
// aliforniacay
console.log(translatePigLatin("california"));
// algorithmway
console.log(translatePigLatin("algorithm"));


// Поиск и замена (если before начинается с заглавной, то заглавная устанавливается и для after)
function myReplace(str, before, after) {
    let index = str.indexOf(before);
    // "A quick brown fox " + "leaped" + " over the lazy dog"
    return str.slice(0, index) + (/^[A-Z]/.test(before) ? (after.charAt(0).toUpperCase() + after.slice(1)) : after) + str.slice(index + before.length);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


// Составить пару ДНК
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
console.log(pairElement("GCG"));


// Вернуть пропущенную букву
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
console.log(fearNotLetter("abce"));
// undefined
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));


// Выборка уникальных значений из массивов
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
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// [ 1, 3, 2, [ 5 ], [ 4 ] ]
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));


// Замена символов html кодами
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
console.log(convertHTML("Dolce & Gabbana"));
// Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Hamburgers < Pizza < Tacos"));


// Сумма нечетных чисел Фибоначчи до заданного числа (включительно)
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
console.log(sumFibs(4));


// Сумма простых чисел до заданного числа (включительно)
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
console.log(sumPrimes(10));


// Найти наименьшее общее кратное с учетом диапазона чисел
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
console.log(smallestCommons([3, 1]));
// 12
console.log(smallestCommons([2, 4]));