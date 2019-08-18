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