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

for (let i = 0; i < BTN_ARRAY.length; i++) {
    BTN_ARRAY[i].addEventListener("click", function () {
        btnOnClick(i)
    });
}

function btnOnClick(val) {

    console.log("click", val, "index", index);

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