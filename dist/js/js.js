"use strict";

document.getElementsByTagName("div").style = "texDecoration:none;";

var i = 1;
var j = 1;
var navigation = document.getElementById("navigation");
var fon = document.getElementById("fon");

document.getElementById("mobButton").addEventListener("click", function () {
    navigation.style = "display: block;";
    fon.style = "display: block;";
    i = 1;
    j = 1;
});

var subAbout = document.getElementById("subAbout");
var subPortfolio = document.getElementById("subPortfolio");

function close() {
    j = 0;
    submenu(j, subPortfolio, "about", 60);
    i = 0;
    submenu(i, subAbout, "portfolio", 60);
    navigation.style = "display: none;";
    fon.style = "display: none;";
}
document.getElementById("close").addEventListener("click", close);
document.getElementById("fon").addEventListener("click", close);

function submenu(k, sub, abport, hight) {

    if (k % 2 != 0) {
        sub.style = "display: block;";
        document.getElementById(abport).style = "height:" + hight + "px;";
        document.getElementById(abport + "Img").src = "img/arrow2%20.png";
    } else {
        document.getElementById(abport + "Img").src = "img/arrow1%20.png";
        document.getElementById(abport).style = "height: 60px;";

        sub.style = "display: none;";
        document.getElementById(abport + "Img").src = "img/arrow1%20.png";
    };

    event.preventDefault();
}

function SwitchSubAbout() {
    var a = void 0;
    var b = void 0;
    if (document.documentElement.clientWidth > 1000) {
        a = 60;
        b = 60;
    } else {
        a = 180;b = 240;
    }

    j = 0;
    submenu(j, subPortfolio, "portfolio", a);
    j++;
    submenu(i, subAbout, "about", b);i++;
};

function SwitchSubPortfolio() {
    var a = void 0;
    var b = void 0;
    if (document.documentElement.clientWidth > 1000) {
        a = 60;
        b = 60;
    } else {
        a = 180;b = 240;
    }
    i = 0;
    submenu(i, subAbout, "about", b);
    i++;
    submenu(j, subPortfolio, "portfolio", a);j++;
};

document.getElementById("btnabout").addEventListener("click", SwitchSubAbout);
document.getElementById("btnportfolio").addEventListener("click", SwitchSubPortfolio);

window.addEventListener('resize', function (event) {
    if (document.documentElement.clientWidth > 1000) {
        document.getElementById("navigation").style = "display: inlineBlock";
        document.getElementById("about").style = "height: 60px;";
        document.getElementById("subAbout").style = "position: absolute ;";
    }
});