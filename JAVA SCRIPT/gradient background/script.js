var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var button = document.querySelector(".randombt");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function setRandom() {
    var number1 = Math.floor(Math.random() * 256);
    var number2 = Math.floor(Math.random() * 256);
    var number3 = Math.floor(Math.random() * 256);
    var number4 = Math.floor(Math.random() * 256);
    var number5 = Math.floor(Math.random() * 256);
    var number6 = Math.floor(Math.random() * 256);

    body.style.background = "linear-gradient(to right, rgb(" + number1 + ", " + number2
        + ", " + number3 + "), rgb(" + number4 + ", " + number5 + ", " + number6 + "))";
    css.textContent = body.style.background + ";";
}

button.addEventListener("click", setRandom);

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

setGradient();