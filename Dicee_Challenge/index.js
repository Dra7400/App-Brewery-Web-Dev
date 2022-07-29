//Pick random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Uses the random number to create a random filename
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

//Creates the filepath
var randomImageSource1 = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;

//accessing the image
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

// changing the image
image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

// Simple logic of comparison
var title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  title.innerText = "🚩Player 1 Wins!"
}else if (randomNumber1 < randomNumber2) {
  title.innerText = "Player 2 Wins🚩!"
} else{
  title.innerText ="Draw!"
}
