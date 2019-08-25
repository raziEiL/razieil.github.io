// Object Oriented Programming

// #1 Свойства и методы
let dog = {
    name: "Spot", // Свойства
    numLegs: 4,
    sayLegs: function() { return `This dog has ${this.numLegs} legs.`; } // Метод
};

console.log("#1 " + dog.sayLegs());


// #2 Присвоение переменной конструктора
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}

let hound = new Dog();
// проверка принадлежности переменной к конструктору
console.log("#2 " + (hound instanceof Dog)); // true


// #3 Собственные свойства и свойства прототипа 
function Bird(name) {
    this.name = name; // own property
}

Bird.prototype.numLegs = 2; // prototype property

let canary = new Bird("Tweety");
// own props: name | prototype props: numLegs
logProps(canary, 3);


// #4 Прототип свойств как объект
function Wow(name) {
    this.name = name;
}

Wow.prototype = {
    constructor: Wow,

    numLegs: 2,
    eat: function() { console.log("#4 nom nom nom"); },
    describe: function() { console.log("#4 My name is " + this.name); }
};

let wow = new Wow("dog");
wow.eat();


// #5 Наследование (Сокращение кода для одинаковых прототипов)
function Cat(name) {
    this.name = name;
}

function Rat(name) {
    this.name = name;
}

/* До
Cat.prototype = {
    constructor: Cat,
    printName: function() { return `My name is ${this.name}`; },
    type: "animal"
}

Rat.prototype = {
    constructor: Rat,
    printName: function() { return `My name is ${this.name}`; },
    type: "animal"
}

let cat = new Cat("barsik");
let rat = new Cat("woody");

console.log("#5 " + cat.name, cat.type, cat.printName()); //barsik, animal, My name is barsik
console.log("#5 " + rat.name, rat.type, rat.printName()); //woody, animal, My name is woody
*/

// После
function Animal() {}

Animal.prototype = {
    constructor: Animal,
    printName: function() { return `My name is ${this.name}`; },
    type: "animal"
}

Cat.prototype = Object.create(Animal.prototype);
Rat.prototype = Object.create(Animal.prototype);

// Reset an Inherited Constructor Property 
Cat.prototype.constructor = Cat;
Rat.prototype.constructor = Rat;

let cat = new Cat("Tom");
let rat = new Rat("Jery");

console.log("#5 " + cat.name, cat.type, cat.printName()); // Tom, animal, My name is Tom
console.log("#5 " + rat.name, rat.type, rat.printName()); // Jery, animal, My name is Jery


// #6 Добавление и изменение свойств/методов
function Garden() {}

function Rose() {}

// добавление
Rose.prototype = {
    color: "green",
    printColor: function() { return `The rouse is ${this.color}` }
}
Rose.prototype.owner = "Lord";

Garden.prototype = Object.create(Rose.prototype);
Garden.prototype.constructor = Garden;

let rose = new Garden();
console.log("#6 " + rose.color, rose.printColor()); // green, The rouse is green

// перезапись
Rose.prototype.color = "black";
Rose.prototype.printColor = function() { return `My heart is ${this.color}` };
console.log("#6 " + rose.color, rose.printColor()); // black, My heart is black

rose.color = "white";
rose.printColor = function() { return `My mind is ${this.color}` };
console.log("#6 " + rose.color, rose.printColor()); // white, My mind is white


// #7 Mixin (альтернатива наследования)
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

function glideMixin(obj) {
    obj.glide = function() { return "Glide!"; }
}

glideMixin(bird);
glideMixin(boat);
console.log("#7 " + boat.glide())


// #8 Mixing #2
function Body() { this.name = "corpse" };
let body = new Body();

let mixing = {
    mixHi: function(obj) { obj.hi = function() { return "Hi"; }; },
    mixBye: function(obj) { obj.constructor.prototype.bye = function() { return "Bye"; }; }
};

mixing.mixHi(body);
mixing.mixBye(body);
// own props: name,hi | prototype props: bye
logProps(body, 8);


// #9 Защита свойств
function Car() {
    let weight = 15;
    this.getWeight = function() { return weight; }
}

let car = new Car();
console.log("#9 " + car.weight, car.getWeight()); // undefined, 15


// #10 Анонимная функция, которая выполняется сразу (IIFE)
(function() { console.log("#10 " + "A cozy nest is ready"); })();


// Common function
function logProps(obj, num) {
    let ownProps = [];
    let prototypeProps = [];

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop))
            ownProps.push(prop);
        else
            prototypeProps.push(prop);
    }
    console.log(`#${num} ` + "own props: " + ownProps + " | prototype props: " + prototypeProps);
}


// Функциональное программирование
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
   },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
   },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
   },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
   },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
   }
];

let mustWatch = watchList.map(function(val) { return { title: val["Title"], rating: val["imdbRating"] } });
/* 
[ { title: 'Inception', rating: '8.8' },
  { title: 'Interstellar', rating: '8.6' },
  { title: 'The Dark Knight', rating: '9.0' },
  { title: 'Batman Begins', rating: '8.3' },
  { title: 'Avatar', rating: '7.9' } ] 
*/
console.log(mustWatch);

// С использованием стрелочной функции и фильтра
/* 
[ { title: 'Inception', rating: '8.8' },
  { title: 'Interstellar', rating: '8.6' },
  { title: 'The Dark Knight', rating: '9.0' },
  { title: 'Batman Begins', rating: '8.3' } ] 
*/
mustWatch = watchList.map(val => ({ title: val["Title"], rating: val["imdbRating"] })).filter(val => val.rating >= 8.0);
console.log(mustWatch);


Array.prototype.myMap = function(callback) {
    var newArray = [];
    for (let i of this)
        newArray.push(callback(i));
    return newArray;
};

console.log([23, 65, 98, 5].myMap(function(item) { return item * 2; }));


Array.prototype.myFilter = function(callback) {
    var newArray = [];
    this.forEach(e => { if (callback(e)) newArray.push(e) })
    return newArray;
};

console.log([23, 65, 98, 5].myFilter(function(item) { return item % 2 === 1; }));


// средний рейтинг фильмов Нолана
let nums = 0;
console.log(watchList.reduce((prev, cur) => {
    if (cur["Director"] === "Christopher Nolan") {
        nums++;
        return prev + parseFloat(cur["imdbRating"]);
    }
    return prev;
}, 0) / nums);


// сортировка
function alphabeticalOrder(arr) {
    return arr.sort((a, b) => a > b);
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));
console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));


// сортировка без мутаций
let globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    //return [].concat(arr).sort();
    return [...arr].sort();
}
// [ 2, 3, 5, 6, 9 ] [ 5, 6, 3, 2, 9 ]
console.log(nonMutatingSort(globalArray), globalArray);


function splitify(str) {
    return str.split(/\W/);
}
// [ 'Hello', 'World', 'I', 'am', 'code' ]
console.log(splitify("Hello World,I-am code"));


// Strings to URL
let globalTitle = "  Winter Is   Coming";

function urlSlug(title) {
    return title.toLowerCase().trim().split(/\W+/).join("-");
}
// winter-is-coming
console.log(urlSlug(globalTitle), globalTitle);


// Curried function
function add(x) {
    return y => {
        return z => {
            return x + y + z
        }
    }
}
// 60
console.log(add(10)(20)(30));