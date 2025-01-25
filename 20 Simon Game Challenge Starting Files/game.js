const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let sound = new Audio();
let level = 0;

if (screen.width > 1125) {
    $(document).on("keydown", function () {
        if (gamePattern.length === 0) {
            nextSequence();
        }
    });
} else {
    $("#level-title").html("<button id='start-btn'>Start</button>");
    $("#start-btn").on("click", function () {
        if (gamePattern.length === 0) {
            nextSequence();
        }
    });
}



function nextSequence() {
    userClickedPattern = [];
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(50).fadeIn(50);
    $("#level-title").text("Level " + level++);
}

$(".btn").on("click", function (event) {
    let userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        gamePattern = [];
        level = 0;
        if (screen.width > 1125) {
            $("#level-title").text("Game Over, Press Any Key to Restart");
        } else {
            $("#level-title").text("Game Over, Refresh to Restart");
        }
    }
}

function playSound(name) {
    switch (name) {
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
        case "wrong":
            sound = new Audio("./sounds/wrong.mp3");
            sound.play();
    }
}

function animatePress(currentColor) {
    const clickedButton = $("#" + currentColor);
    clickedButton.addClass("pressed");
    setTimeout(() => {
        clickedButton.removeClass("pressed")
    }, 100);
}