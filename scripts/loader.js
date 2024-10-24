let loader = document.getElementById("loader");

let loadingText = document.createElement("div");
loadingText.setAttribute("id", "loading-text");
loader.append(loadingText);

let i = 0;
let message = "loading...";

function typeLoaderMessage() {
  if (i < message.length) {
    loadingText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeLoaderMessage, 300);
  } else {
    loadingText.style.color = "blueViolet";
    loadingText.style.display = "none";
  }
}

let pop = document.getElementById("popping-sound");
function playPopping() {
  pop.play();
}

typeLoaderMessage();

let startButton = document.getElementById("start-button");
startButton.innerHTML = "start game";

startButton.addEventListener("click", startGame);

function startGame() {
  window.location.replace("game-play.html");
}
