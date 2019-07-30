// nav shadow
// https://usefulangle.com/post/108/javascript-detecting-element-gets-fixed-in-css-position-sticky
var observer = new IntersectionObserver(function(entries) {
    // no intersection with screen
    if (entries[0].intersectionRatio === 0) {
        console.log("sticky");
        document.querySelector(".nav").classList.add("nav--shadow");
    }
    // fully intersects with screen
    else if (entries[0].intersectionRatio === 1) {
        console.log("unsticky");
        document.querySelector(".nav").classList.remove("nav--shadow");
    }
}, {
    threshold: [0, 1]
});

observer.observe(document.querySelector(".nav-observer"));

// nav hamburger
const NAV_LIST = document.getElementsByClassName("nav__list")[0];
document.querySelector(".nav__menu").addEventListener("click", function() {
    this.classList.toggle("nav__menu-active");
    NAV_LIST.classList.toggle("nav__list-active");
});

// Использование "Кирпичной кладки": добавить класс masonry-grid к контейнеру, а класс masonry-item к дочерним элементам
// https://codepen.io/razieil/pen/arPVmX
var hiddenDiv = document.getElementById("masonry-item-fake");
const ITEM_ARRAY = document.getElementsByClassName("masonry-item");
const GRID_ARRAY = document.getElementsByClassName("masonry-grid");
var lineHeight;

if (hiddenDiv != null) {
    lineHeight = hiddenDiv.offsetHeight;
    console.log("line height =", lineHeight);
    alignGridRows();
}
else {
    console.log("Error id=masonry-item-fake not found");
}

function onResize() {
    console.log("width = ", window.outerWidth, "height =", window.outerHeight);
    alignGridRows();
}

function alignGridRows() {
    if (lineHeight === undefined)
        return;

    for (let i = 0; i < GRID_ARRAY.length; i++)
        GRID_ARRAY[i].style.alignItems = "start";

    for (let i = 0; i < ITEM_ARRAY.length; i++) {
        ITEM_ARRAY[i].style.gridRow = "span " + Math.round(ITEM_ARRAY[i].offsetHeight / lineHeight);
    }

    for (let i = 0; i < GRID_ARRAY.length; i++)
        GRID_ARRAY[i].style.alignItems = null;
}

// portfolio
const PORTFOLIO_GRID_ARRAY = document.getElementsByClassName("portfolio__grid");
const PORTFOLIO_P_ARRAY = document.getElementsByClassName("portfolio__p");
for (let i = 0; i < PORTFOLIO_GRID_ARRAY.length; i++) {
    PORTFOLIO_GRID_ARRAY[i].addEventListener("mouseenter", function() {
        console.log("enter num ", i, event.target, "from ", event.relatedTarget);
        PORTFOLIO_P_ARRAY[i].classList.remove("truncate-lines");
    });
    PORTFOLIO_GRID_ARRAY[i].addEventListener("mouseleave", function() {
        console.log("leave num ", i, event.target, "from ", event.relatedTarget);
        PORTFOLIO_P_ARRAY[i].classList.add("truncate-lines");
    });
}