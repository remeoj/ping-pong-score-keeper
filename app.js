const scoreLimit = document.querySelector("#scoreLimit");
const resetButton = document.querySelector("#reset");

for (let i = 3; i <= 11; i++) {
  const newOption = document.createElement("option");
  newOption.text = i;
  newOption.value = i;
  scoreLimit.append(newOption);
}

const p1 = {
  score: 0,
  button: document.querySelector("#player1Count"),
  display: document.querySelector("#player1Score"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#player2Count"),
  display: document.querySelector("#player2Score"),
};

let winningStatus = false;

function updateScores(player, opponent) {
  if (!winningStatus) {
    player.score += 1;
    player.display.textContent = player.score;
    if (player.score == scoreLimit.value) {
      winningStatus = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

resetButton.addEventListener("click", reset);

scoreLimit.addEventListener("change", function () {
  reset();
});

function reset() {
  winningStatus = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.textContent = 0;
  p1.display.classList.remove("has-text-success", "has-text-danger");
  p2.display.textContent = 0;
  p2.display.classList.remove("has-text-success", "has-text-danger");
  p1.button.disabled = false;
  p2.button.disabled = false;
}
