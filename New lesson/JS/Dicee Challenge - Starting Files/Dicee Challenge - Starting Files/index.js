var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

var imageName1 = "./images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var imageName2 = "./images/dice" + randomNumber2 + ".png";

//left
var setSelectorimgLeft = document.querySelectorAll("img")[0];

var setAtrributeimgLeft = setSelectorimgLeft.setAttribute("src" , imageName1);

//right
var setSelectorimgRight = document.querySelectorAll("img")[1];

var setAtrributeimgRight = setSelectorimgRight.setAttribute("src" , imageName2);

//conditions
if (imageName1 == imageName2) {
    document.querySelector("h1").textContent = "🚩 DRAW 🚩";
}
else if (imageName1 > imageName2) {
    document.querySelector("h1").textContent = "🚩Player 1 Win!🚩";
}
else if (imageName1 < imageName2) {
    document.querySelector("h1").textContent = "🚩Player 2 Win!🚩";
}