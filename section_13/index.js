// buttons list
var btnList = document.querySelectorAll(".drum");

//add event listener to buttons
for (var i = 0; i < btnList.length; i++){
    var btn = btnList[i].addEventListener("click", handleClick);
}

//triggered when button in clicked
function handleClick() {
    // #165 challenge 1
    var sound = new Audio("./sounds/tom-1.mp3");
    sound.play();
}