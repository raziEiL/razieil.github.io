"use strict"
// TODO: grab from html attribute
const TARIF = ["Тариф «Золотой стандарт»", "Тариф «За день/Мини»", "Тариф «Индивидуальный»"];
const BTN_ARRAY = document.getElementsByClassName("order__grid");
const BTN_INDEX = 3;
// TODO: grab from html
const EMAIL = "555@33.ru";
const COLOR_S = getComputedStyle(document.documentElement).getPropertyValue("--color-s");
const COLOR_BG = getComputedStyle(document.documentElement).getPropertyValue("--color-pr");
var index;
var j;

// Tarif logic
for (let i = 0; i < BTN_ARRAY.length; i++) {
    BTN_ARRAY[i].addEventListener("click", function () {
        btnOnClick(i)
    });
}

function btnOnClick(val) {

    console.log("btnOnClick(" + val + ")", "index =", index);

    if (val == BTN_INDEX) {
        if (index === undefined) {
            console.log("выберите тариф");
            alert("Выберите тариф!");
        } else {
            console.log("mailto:" + EMAIL + "?subject=" + TARIF[index]);
            window.location.href = "mailto:" + EMAIL + "?subject=" + TARIF[index];
            // reset
            for (j = 0; j < BTN_ARRAY.length; j++)
                BTN_ARRAY[j].style.background = null;

            BTN_ARRAY[BTN_INDEX].style.borderColor = null;
        }
    } else {
        index = val;
        console.log("set bg to", COLOR_S);

        for (j = 0; j < BTN_ARRAY.length - 1; j++)
            BTN_ARRAY[j].style.background = (val == j ? COLOR_S : null);

        BTN_ARRAY[BTN_INDEX].style.borderColor = COLOR_S;
    }
}

// Nav logic
const LINK_ARRAY = document.getElementById("nav__list").getElementsByTagName("a");
var selectedNav = document.getElementById("nav__link-selected");
const SECTION_NAMES = ["order", "contacts", "portfolio", "comment"]; // must equal to LINK_ARRAY len
var selectedSection = document.getElementById(SECTION_NAMES[0]);

for (let i = 0; i < SECTION_NAMES.length; i++) {
    LINK_ARRAY[i].addEventListener("click", function () {
        linkOnClick(this, document.getElementById(SECTION_NAMES[i]));
    });
}

function linkOnClick(navItem, section) {

    if (selectedNav == navItem)
        return;
    else {
        selectedNav.className = "nav__link";
        selectedSection.style.display = "none";
    }
    // console.log("btnOnClick", navItem, section);

    navItem.className = "nav__link-selected"
    section.style.display = "block";
    selectedNav = navItem;
    selectedSection = section;
}

/* LINK_ARRAY[0].addEventListener("click", function () {
    console.log(1, this); // elem
});

LINK_ARRAY[0].addEventListener("click", () => {
    console.log(2, this); // window
});

LINK_ARRAY[0].addEventListener("click", someFunc);

function someFunc(e) {
    console.log(3, this, e.target); // elem
}

LINK_ARRAY[0].addEventListener("click", function () {
    someFunc2(123, LINK_ARRAY[0]);
});

function someFunc2(val, elem) {
    console.log(4, this, val, elem); // undefined, 123, elem
} */