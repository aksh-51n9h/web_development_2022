// buttons list
var btnList = document.querySelectorAll(".drum");

//add event listener to buttons
for (var i = 0; i < btnList.length; i++){
    var btn = btnList[i].addEventListener("click", handleClick);
}

//triggered when button in clicked
function handleClick() {
    alert("I got clicked!");
}