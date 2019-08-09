"use strict"

var temp, arr, arr2, obj, num, str, a, b, i;

// 'number, boolean, string, object, object, undefined'
var test1 = 1,
    test2 = false,
    test3 = "hi",
    test4 = [0, 1],
    test5 = { a: 1, b: 2 },
    test6;
console.log(typeof(test1) + ", " + typeof(test2) + ", " + typeof(test3) + ", " + typeof(test4) + ", " + typeof(test5) + ", " + typeof(test6));

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
console.log("======= Урок №1 =======");

function min(a, b) {
    return (a > b) ? b : a;
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
console.log("//");
// Напишите функцию pow(x,n), которая возвращает x в степени n.
function pow(x, y) {
    return x ** y;
}
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

// Урок №2. задачи http://code.mu/tasks/javascript/base/osnovy-yazyka-javascript-dlya-novichkov.html
console.log("======= Урок №2 =======");

// '#1 3'
num = 3;
console.log("#1 " + num);

// '#5 14'
a = 17;
b = 10;
var c = a - b;
var d = 7;
var result = c + d;
console.log("#5 " + result);

// '#7 привет мир'
str = 'привет'
var str2 = 'мир'
console.log("#7 " + str + ' ' + str2);

// Урок №3. задачи http://code.mu/tasks/javascript/base/osnovy-raboty-s-massivami-i-objektami-v-javascript.html
console.log("======= Урок №3 (Массивы и объекты) =======");

// '#1 a,b,c'
arr = ['a', 'b', 'c'];
console.log("#1 " + arr);
// '#2 abc'
console.log("#2 " + arr[0] + arr[1] + arr[2]);
// '#3 a+b,c+d'
arr = ['a', 'b', 'c', 'd'];
console.log("#3 " + arr[0] + '+' + arr[1] + "," + arr[2] + "+" + arr[3]);
// '#4 37'
arr = [2, 5, 3, 9];
arr = arr[0] * arr[1] + arr[2] * arr[3];
console.log("#4 " + arr);
// '#5 1,3'
obj = { a: 1, b: 2, c: 3 };
console.log("#5 " + obj.a + "," + obj["c"]);
// '#6 200,1000'
obj = { Kolya: "1000", Vasya: "500", Petya: "200" };
console.log("#6 " + obj.Petya + "," + obj.Kolya)
// '#7 пт'
obj = { 1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс' };
var day = 5;
console.log("#7 " + obj[day]);
// '#9 4'
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("#9 " + arr[1][0]);
// '#10 jQuery,jQuery'
arr = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' };
console.log("#10 " + arr.js[0] + ',' + arr['js'][0]);
// '#11 пн,wed'
arr = { ru: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'], en: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] };
console.log("#11 " + arr.ru[0] + "," + arr['en'][2]);
// '#12 вс'
var lang = "ru";
day = 7;
console.log("#12 " + arr[lang][day - 1]);

// Урок №4
console.log("======= Урок №4 (if, else) =======");
// '#8 true'
temp = 1;
if (temp === 1) // if (temp == 1 && typeof temp == "number")
    console.log("#8 " + true);
else
    console.log("#8 " + false);

// Урок №5
console.log("======= Урок №5 (Циклы) =======");

// РЕШЕНИЯ НЕ СОХРАНИЛИСЬ -_-

// '#6 15'
arr = [1, 2, 3, 4, 5];
var result = 0;
for (i = 0; i < arr.length; i++) {
    result += arr[i];
}
console.log("#6 " + result);

/* 
'#7 green = зеленый'
'#7 red = красный'
'#7 blue = голубой' 
*/
obj = { green: 'зеленый', red: 'красный', blue: 'голубой' };

for (var key in obj) {
    console.log("#7 " + key + " = " + obj[key]); //ключи
}

// '#16 кол-во итераций = 5. результат = 31.25'
temp = 1000;
var value = 0;

while (temp > 50) {
    temp /= 2;
    value++;
}
console.log("#16 " + "кол-во итераций = " + value + ". результат = " + temp);

//  Урок №6
console.log("======= Урок №6 (Мат. функции) =======");

// '#1 1'
console.log("#1 " + 10 % 3);

// '#2 4 делится на 3 с остатком 1'
a = 4;
b = 3;
result = a % b;
console.log("#2 " + (result ? (a + " делится на " + b + " с остатком " + result) : (a + " делится на " + b + " без остатка")));

// '#3 1024, 1024'
console.log("#3 " + 2 ** 10 + ', ' + Math.pow(2, 10));

// '#4 16'
console.log("#4 " + Math.sqrt(256));

// '#6 19.467922333931785, 19.47, 19.5, 19'
a = Math.sqrt(379);
console.log("#6 " + a + ", " + a.toFixed(2) + ", " + a.toFixed(1) + ", " + a.toFixed(0));

// '#7 24.228082879171435, 24, 25'
a = Math.sqrt(587);
console.log("#7 " + a + ", " + Math.floor(a) + ", " + Math.ceil(a));

// '#8 min = -130, max = 19'
a = Math.min(4, -2, 5, 19, -130, 0, 10);
b = Math.max(4, -2, 5, 19, -130, 0, 10);
console.log("#8 " + "min = " + a + ", max = " + b);

// #9

// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log("#8 " + getRandomInt(1, 100));

//  Урок №7
console.log("======= Урок №7 (Строковые функции) =======");

// '#1 JS'
str = 'js';
console.log("#1 " + str.toUpperCase());

// '#3 17'
str = 'я учу javascript!'
console.log("#3 " + str.length);

// '#4 учу, учу'
console.log("#4 " + str.substr(2, 3) + ', ' + str.substring(2, 5));

// '#5 2'
console.log("#5 " + str.indexOf('учу'))

// '#6 я учу...'
num = 5;

if (str.length > num)
    result = str.substr(0, num) + '...';
else
    result = str;

console.log("#6 " + result);

// '#7 я-учу-javascript!'
console.log("#7 " + str.replace(/ /g, '-')); // регулярное выражение

// '#8 я,учу,javascript!'
arr = str.split(' ');
console.log("#8 " + arr);

// '#9 я, ,у,ч,у, ,j,a,v,a,s,c,r,i,p,t,!'
arr = str.split(''); // Если параметр равен пустой строке, строка str будет преобразована в массив символов
console.log("#9 " + arr);

// '#10 31.12.2025'
temp = '2025-12-31';
arr = temp.split('-');
console.log("#10 " + arr[2] + '.' + arr[1] + '.' + arr[0]);

// '#11 я,учу,javascript,!'
arr = ['я', 'учу', 'javascript', '!'];
console.log("#11 " + arr.join());

// '#12 Я учу javascript!'
console.log("#12 " + str.substr(0, 1).toUpperCase() + str.substr(1));

// '#13/14 я,Учу,Javascript!'
arr = str.split(' ');
num = 1; //  с какого элемента массива заменять заглавную букву
for (i in arr) {
    if (i >= num)
        arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1);
}

console.log("#13/14 " + arr);

//  Урок №8
console.log("======= Урок №8 (Функции массивов) =======");

// '#1 1,2,3,4,5,6'
arr = [1, 2, 3];
arr2 = [4, 5, 6];
temp = arr.concat(arr2)
console.log("#1 " + temp);

// '#2 3,2,1'
arr.reverse()
console.log("#2 " + arr);

// '#3 1,2,3,4,5,6,7'
arr = [1, 2, 3];
arr.push(4, 5, 6, 7);
console.log("#3 " + arr);

// '#4 0,1,2,3,4,5,6'
arr2 = [4, 5, 6];
arr2.unshift(0, 1, 2, 3);
console.log("#4 " + arr2);

// '#7 1,2,3, 1,2,3,4,5'
arr = [1, 2, 3, 4, 5];
console.log("#7 " + arr.slice(0, 3) + ", " + arr);

// '#8 4,5, 1,2,3,4,5'
console.log("#8 " + arr.slice(3) + ", " + arr);

// '#9 1,4,5'
arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log("#9 " + arr);

// '#10 удалены элементы: 2,3,4'
arr = [1, 2, 3, 4, 5];
arr2 = arr.splice(1, 3);
console.log("#10 " + "удалены элементы: " + arr2);

// '#11 1,2,3,a,b,c,4,5'
arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log("#11 " + arr);

// '#13 1,2,3,4,7'
arr = [3, 4, 1, 2, 7];
arr.sort();
console.log("#13 " + arr);

// 14
obj = { js: 'test', jq: 'hello', css: 'world' };

//  Урок №9 http://code.mu/tasks/javascript/base/praktika-na-kombinacii-standartnyh-funkcij-javascript.html
console.log("======= Урок №9 (Практика комбинации функций) =======");

// '#1.1 Даю мастер класс!'
str = 'даю мастер класс!';
result = str[0].toUpperCase() + str.substr(1);
console.log("#1.1 " + result);

// '#1.2 Даю мастер класс!'
arr = str.split(''); //  в массив
arr[0] = arr[0].toUpperCase();
result = arr.join(''); // в строку
console.log("#1.2 " + result);

// '#2 654321'
str = '123456';
result = str.split('').reverse().join('');
console.log("#2 " + result);

// '#3 1357'
str = '3751';
result = str.split('').sort().join('');
console.log("#3 " + result);

// '#4 HTTP' содержит ли строка др. строку
str = 'http://playcode.io';
str2 = 'http://';
console.log("#4 " + (!str.indexOf(str2) ? 'HTTP' : 'FALSE'));

// '#5 HTML'
str = 'index.html';
str2 = '.html';
console.log("#5 " + (str.substr(-5) == str2 ? 'HTML' : 'FALSE'));

//  Урок №11 
console.log("======= Урок №11 =======");

// 2
num = 31;
temp = '';
for (i = 1; i <= num; i++) {
    if (num % i == 0) {
        if (temp.length)
            temp += ', ';
        temp += i;
    }
}
console.log(num + ' делится на: ' + temp);

// 3 два одинаковых числа подряд
arr = [1, 2, 2, 4, 5];

function isEqNumInRow(arr) {
    var prev;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == prev)
            return true;
        prev = arr[i];
    }
    return false;
}
console.log(isEqNumInRow(arr));

//  Урок №13 
console.log("======= Урок №13 =======");

console.log("#1");
var size = 9;

for (var x = 0; x <= size; x++) {
    temp = '';
    for (var y = 0; y <= size; y++) {
        if (temp.length)
            temp += '|';

        if (!x)
            result = y; // headers row
        else if (!y)
            result = x; // headers column 
        else
            result = x * y; // table body

        temp += result > 9 ? result : (result + ' ');
    }
    console.log(temp);
    //document.write(temp + '<br>');
}

console.log("#6");
for (i = 1; i <= 9; i++) {
    temp = '';
    for (x = 0; x < i; x++) {
        temp += i;
    }
    console.log(temp);
}

for (i = 1; i <= 9; i += 2) {
    temp = '';
    for (x = 0; x < i; x++) {
        temp += i;
    }
    console.log(temp);
}