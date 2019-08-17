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