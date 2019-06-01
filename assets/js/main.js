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

// Фикс для изменения значений grid-row
var hiddenDiv = document.getElementById("js-grid-fix"); //  узнаем высоту однострочного элемента
const ITEM_ARRAY = document.getElementsByClassName("containter__item");
var lineHeight;

if (hiddenDiv != null) {
    lineHeight = hiddenDiv.offsetHeight;
    console.log("line height =", lineHeight);
    fixGridRow();
}
else {
    console.log("Error id=js-grid-fix not found");
}

function onResize() {
    console.log("width = ", window.outerWidth, "height =", window.outerHeight);
    fixGridRow();
}

function fixGridRow() {
    if (lineHeight === undefined)
        return;
    for (let i = 0; i < ITEM_ARRAY.length; i++) {
        ITEM_ARRAY[i].style.gridRow = "span " + Math.round(ITEM_ARRAY[i].offsetHeight / lineHeight);
    }
}