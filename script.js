var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.src = randomImageSource;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage;
image2.src = randomImageSource2;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
