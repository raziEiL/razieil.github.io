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

    // You can do this!
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


// Соеденить массивы
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
//algorithmway
console.log(translatePigLatin("algorithm"));


// Поиск и замена (если before начинается с заглавной, то заглавная устанавливается и для after)
function myReplace(str, before, after) {
    let index = str.indexOf(before);
    // "A quick brown fox " + "leaped" + " over the lazy dog"
    return str.slice(0, index) + (/^[A-Z]/.test(before) ? (after.charAt(0).toUpperCase() + after.slice(1)) : after) + str.slice(index + before.length);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));