// #144 Challenge 1
document.querySelector("li a").style.color = "green";

// #144 Challenge 2
document.querySelector("button").style.color = "yellow";

// #145 Challenge 1
document.querySelector("h1").classList.add("huge");

// #146 textContent = only gives text inside a tag
var textContentResult = document.querySelector("h1").textContent;
var innerHTMLResult = document.querySelector("h1").innerHTML;

console.log("using textContent: " + textContentResult);
console.log("using innerHTML: " + innerHTMLResult);