var randomNumber1 = getRandonNumber();
var randomNumber2 = getRandonNumber();

var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];

var h1 = document.querySelector("h1");


img1.setAttribute("src", getDiceImage(randomNumber1));
img2.setAttribute("src", getDiceImage(randomNumber2));

var winner = getWinner(randomNumber1, randomNumber2);

if (winner == 1) {
    h1.innerHTML = "🚩" + " Player1 Wins";
} else if(winner == -1){
    h1.innerHTML = "Player2 Wins" + "🚩"; 
} else {
    h1.innerHTML = "Draw!";
}


// get the winner
function getWinner(randomNumber1, randomNumber2) {
    if (randomNumber1 > randomNumber2) {
        return 1;
    } else if (randomNumber1 < randomNumber2) {
        return -1;
    }

    return 0;
}


// generate random number
function getRandonNumber() {
    var randomNumber = Math.floor((Math.random() * 6)) + 1;
    return randomNumber;
}


// get dice image path based on random number
function getDiceImage(randomNumber) {
    var src = "images/";

    if (randomNumber == 1) {
        src += "dice1.png";
    } else if (randomNumber == 2) {
        src += "dice2.png";
    } else if (randomNumber == 3) {
        src += "dice3.png";
    } else if (randomNumber == 4) {
        src += "dice4.png";
    } else if (randomNumber == 5) {
        src += "dice5.png";
    } else if (randomNumber == 6) {
        src += "dice6.png";
    }

    return src;
}