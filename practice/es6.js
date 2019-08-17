"use strict"

var temp, arr, obj, num, str, a, b, c, i;

// #1 Use Destructuring Assignment to Assign Variables from Objects
obj = { a: 1, b: 2, c: 3 };
const { c: myVar } = obj;
console.log("1) ", myVar); // 3

// #2 Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow: { max: maxOfTomorrow } } = forecast;
    return maxOfTomorrow;
}

console.log("2) ", getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

// #3 ES6: Use Destructuring Assignment to Assign Variables from Arrays
[a, b] = [1, 2, 3, 4, 5, 6];
console.log("3) ", a, b); // 1, 2

// #4
[a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log("4) ", a, b, c); // 1, 2, 5

// #5
a = 8, b = 6;
[b, a] = [a, b];
console.log("5) ", a, b); // 6, 8

// #6-7
[a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log("6) ", a, b); // 1, 2
console.log("7) ", arr); // [3, 4, 5, 7]

// #8 ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
obj = { a: 1, b: 2, c: 3, d: 4 };
const profileUpdate = ({ c, d }) => {
    return c + d;
};
console.log("8) ", profileUpdate(obj)); // 7

// #9 ES6: Create Strings using Template Literals
obj = { name: "Denis", age: "20" };
const greeting = `Hello, my name is ${obj.name}! I am ${obj.age} years old.`;
console.log("9) ", greeting); // 'Hello, my name is Denis! I am 20 years old.'

// #10
const getMousePosition = (x, y) => ({ x, y });
console.log("10) ", getMousePosition(1, 5)); // {x: 1 ,y: 5}

// #11
const person = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};
console.log("11) ", person.sayHello()); // 'Hello! My name is Taylor.'

// #12 class
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const lol = new Book('anonymous');
console.log("12) ", lol.writer); // anonymous
lol.writer = 'wut';
console.log("12) ", lol.writer); // wut

// #13 Copy an Array with the Spread Operator
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
// [true,false,true],[true,false,true]
console.log("13) ", copyMachine([true, false, true], 2));


// #14 Combine Arrays with the Spread Operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
    return sentence;
}

// ['learning', 'to', 'code', 'is', 'fun']
console.log("14) ", spreadOut());
