// $(document).ready(function(){ [code] }) --> same as adding CDN JQuery before index.js

// GET style property
console.log($("h1").css("color"));

// Not good practice - SET style property
// $("h1").css("color", "yellow");

// Add Class
$("h1").addClass("tittle");

// Click event listener
$("h1").click(function() {
    $("h1").css("color", "purple");
});

// Event Listener with .on
$("#color").on("click", function () {
    $("h1").toggleClass("toggle");
});

// Event Listener with .on
$(document).on("keydown",function (event) {
    $("h1").html(event.key);
})

//  Add element on the fly
$("h1").before("<button>before</button>");
$("h1").after("<button>.after</button>");
$("h1").prepend("<button>.prepend()</button>");
$("h1").append("<button>.append()</button>");

// Remove element on the fly
// $("button").remove(); // Removes ALL the buttons because of the $ notation


// ANIMATIONS
$("#toggle").on("click", function () {
    $("h1").toggle();
});

$("#fade").on("click", function () {
    $("h1").fadeToggle();
});

$("#slide").on("click", function () {
    $("h1").slideToggle();
});

$("#animate").on("click", function () {
    $("h1").animate({margin: "40"});
});

$("#concatenation").on("click", function () {
    $("h1").slideUp().slideDown().animate({opacity: ".5"});
});