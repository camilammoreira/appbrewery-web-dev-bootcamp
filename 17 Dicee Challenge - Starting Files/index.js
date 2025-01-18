const rollButton = document.querySelector("button");

rollButton.addEventListener("click", function() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");

const pageTitle = document.querySelector("h1");

dice1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    pageTitle.innerHTML = "🏁 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    pageTitle.innerHTML = "Player 2 Wins! 🏁";
} else {
    pageTitle.innerHTML = "Draw!";
}
})