// change the entirie randomizer logic to make it more efficient

var randomizer1 = Math.floor(Math.random()*6)+1;
var randomizer2 = Math.floor(Math.random()*6)+1;

const images = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
]
//check these
var selectedImage1 = images[randomizer1];
var selectedImage2 = images[randomizer2];
document.querySelector(".img1").setAttribute("src",selectedImage1);
document.querySelector(".img2").setAttribute("src",selectedImage2);

//set to a better one
if(randomizer2 > randomizer1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else if(randomizer1 > randomizer2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else{
    document.querySelector("h1").innerHTML = "DRAW!!";
}