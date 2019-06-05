const MENU = document.getElementsByClassName("nav__menu")[0];
const NAV_LIST = document.getElementsByClassName("nav__list")[0];
const MENU_ACTIVE = "nav__menu-active";
const NAV_ACTIVE = "nav__list-active";
// Toggle class to elem
MENU.addEventListener("click", function() {
    ToggleClass(this, MENU_ACTIVE);
    ToggleClass(NAV_LIST, NAV_ACTIVE);
});

function ToggleClass(elem, toggle) {
    console.log(MENU);
    if (elem.className.search(toggle) != -1) {
        elem.className = elem.className.split(toggle).join('').trim();
    }
    else {
        elem.className += " " + toggle;
    }
}

// https://codepen.io/razieil/pen/arPVmX
var hiddenDiv = document.getElementById("advantages__item-fake");
const ITEM_ARRAY = document.getElementsByClassName("advantages__item");
const GRID = document.getElementsByClassName("advantages__grid")[0];
var lineHeight;

if (hiddenDiv != null) {
    lineHeight = hiddenDiv.offsetHeight;
    console.log("line height =", lineHeight);
    alignGridRows();
}
else {
    console.log("Error id=advantages__item-fake not found");
}

function onResize() {
    console.log("width = ", window.outerWidth, "height =", window.outerHeight);
    alignGridRows();
}

function alignGridRows() {
    if (lineHeight === undefined)
        return;
    GRID.style.alignItems = "start";
    for (let i = 0; i < ITEM_ARRAY.length; i++) {
        ITEM_ARRAY[i].style.gridRow = "span " + Math.round(ITEM_ARRAY[i].offsetHeight / lineHeight);
    }
    GRID.style.alignItems = null;
}