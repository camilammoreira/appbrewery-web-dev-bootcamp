const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let sound = new Audio();
let userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(50).fadeIn(50);
    switch (randomChosenColour) {
        case "blue":
            sound = new Audio("./sounds/blue.mp3");
            sound.play();
            break;
        case "green":
            sound = new Audio("./sounds/green.mp3");
            sound.play();
            break;
        case "red":
            sound = new Audio("./sounds/red.mp3");
            sound.play();
            break;
        case "yellow":
            sound = new Audio("./sounds/yellow.mp3");
            sound.play();
            break;
        default:
            sound = new Audio("./sounds/wrong.mp3");
            sound.play();
    }
}

$(".btn").on("click", function(event) {
    let userChosenColour = event.target.id;
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})