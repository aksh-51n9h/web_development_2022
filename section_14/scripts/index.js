// #179 how to add class using jQuery
$("h1").addClass("big-title");

// #179 how to check class using jQuery
console.log($("h1").hasClass("big-title"));

// #180 change text
$("h1").text("Text Changed");

// #181 manipulating attribute
console.log($("button").attr("type"));

$("button").attr("type", "submit");

// #182 add event listeners
// $("h1").click(function () { 
//     alert("title cliked");
// });

// #184 animate using jQuery
$("button").on("click", function () { 
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});