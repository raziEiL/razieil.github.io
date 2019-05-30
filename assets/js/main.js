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