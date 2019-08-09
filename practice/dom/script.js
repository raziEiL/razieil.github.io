console.log(document.all);

// text
var h1 = document.getElementsByTagName("h1")[0];
console.log(h1);
// Hello JS, Hello
console.log(h1.textContent + ", " + h1.innerText);
//h1.textContent = "Hello JS";

// collection
var li_array = document.getElementsByClassName("item");
console.log("li collection: ", li_array);


// querySelector
// IntelliSense fix https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#supported-jsdoc
/** @type {HTMLElement} */
var header = document.querySelector(".header-3");
header.style.textTransform = "uppercase";

/** @type {HTMLElement} */
var lastItem = document.querySelector("li:last-child");
lastItem.style.fontStyle = "italic";

var list = document.querySelector(".list");
console.log(".list parent: ", list.parentNode);
console.log(".list child: ", list.children);
console.log(".list first-child: ", list.children[0]); // list.firstElementChild

// create element
var footer = document.createElement("footer");
footer.style.borderTop = "1px solid #ccc";
footer.style.textAlign = "center";
footer.appendChild(document.createTextNode("good bye!"));
document.querySelector("body").insertBefore(footer, document.querySelector("script"));

// event
document.querySelector(".btn").addEventListener("click", function(e) {

    console.log(e, e.target, e.target.className);
    for (let i of li_array)
        i.style.color = "hsl(" + getRandomInt(0, 359) + ", 50%, 50%)";

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});


// чтение данных из формы
var log1 = document.querySelector(".container-form__log");
var data_array = [];
document.querySelector(".container-form__form").addEventListener("submit", function(e) {

    let data = new FormData(e.target);
    console.log(data.get("name"), data.get("number"));
    data_array.push(new person(data.get("name"), data.get("number")));

    log1.innerHTML = "";
    for (let i of data_array)
        log1.innerHTML += i.name + ": " + i.age + "<br>";

    e.preventDefault();
});

function person(name, age) {
    this.name = name;
    this.age = age;
}