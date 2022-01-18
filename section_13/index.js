// buttons list
var btnList = document.querySelectorAll(".drum");

//add event listener to buttons
for (var i = 0; i < btnList.length; i++) {
    var btn = btnList[i].addEventListener("click", function () {
        var btnInnerHTML = this.innerHTML;
        var audioSource = "";

        switch (btnInnerHTML) {
            case "w":
                audioSource = "sounds/tom-1.mp3";
                break;

            case "a":
                audioSource = "sounds/tom-2.mp3";
                break;

            case "s":
                audioSource = "sounds/tom-3.mp3";
                break;

            case "d":
                audioSource = "sounds/tom-4.mp3";
                break;

            case "j":
                audioSource = "sounds/snare.mp3";
                break;

            case "k":
                audioSource = "sounds/crash.mp3";
                break;

            case "l":
                audioSource = "sounds/kick-bass.mp3";
                break;

            default:
                audioSource = "";
        }

        var sound = new Audio(audioSource);
        sound.play();
    });
}

// // #165 challenge 1
// var sound = new Audio("./sounds/tom-1.mp3");
// sound.play();

// // #165 challenge 3
// this.style.color = "white";