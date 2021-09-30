let magicNumber = Math.trunc(Math.random() * 20) + 1;
console.log(magicNumber);
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const inputValue = Number(document.querySelector(".number-value").value);
  if (magicNumber < inputValue) {
    if (score > 0) {
      document.querySelector(".start").textContent = "Too High !";
      document.querySelector(".score-value").textContent = score--;
      document.querySelector(".score-value").textContent = score;
    } else {
      document.querySelector(".start").textContent = " you lost the game";
    }
  }
  if (magicNumber > inputValue) {
    if (score > 0) {
      document.querySelector(".start").textContent = "Too Low !";
      document.querySelector(".score-value").textContent = score--;
      document.querySelector(".score-value").textContent = score;
    } else {
      document.querySelector(".start").textContent = " you lost the game";
    }
  } else if (magicNumber == inputValue) {
    document.querySelector(".start").textContent =
      "🎊 Congrats you got the number";
    document.querySelector(".guess").textContent = magicNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".guess").style.width = "30rem";
    document.querySelector(".guess").style.paddingLeft = "0rem";
    document.querySelector(".guess").style.paddingRight = "0rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore-value").textContent = highScore;
    }
  } else if (inputValue > 20) {
    document.querySelector(".start").textContent =
      "ERROR 404 ! please enter a number between 1 and 20 ";
  }
  if (score <= 0) {
    document.querySelector(".start").textContent = "Game Over ";
    document.querySelector("body").style.backgroundColor = "red";
  }
});

document.querySelector(".btn").addEventListener("click", function () {
  magicNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#343a40";
  document.querySelector(".start").textContent = "Start guessing ...";
  document.querySelector(".score-value").textContent = "20";
  // document.querySelector("highscore-value").textContent = "0";
  document.querySelector(".guess").textContent = "?";
  document.querySelector(".number-value").value = " ";
});
