import { Message } from "../components/message.js";
export let gameSettings = document.getElementById("game-utilities");

let message = new Message();

let settings_options = [
  { name: "Reset Game", img: "bi bi-eraser", action: cleanUp },
  { name: "Settings", img: "bi bi-sliders", action: viewSettings },
  { name: "Encyclopedia", img: "bi bi-journal-plus", action: viewEncyclopedia },
  { name: "Hints", img: "bi bi-lightbulb", action: viewHints },
];
let i;
settings_options.forEach((option) => {
  let settings_option = document.createElement("div");
  i = document.createElement("i");
  i.style.paddingBottom = "10px"
  settings_option.className = "settings-option";
  settings_option.innerText = option.name;
  settings_option.append(i);
  i.className = option.img;
  i.setAttribute("id", "icon");
  gameSettings.appendChild(settings_option);
  i.addEventListener("click", option.action);
});

function cleanUp() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    localStorage.clear()
    location.reload();
  }
}

function viewSettings() {

  message.displayMessage(
    "Settings Feature Coming Soon! \n Control sounds, music and more!\n"
  );
}

function viewEncyclopedia() {
  message.displayMessage(
    "Encyclopedia Feature Coming Soon! \n Discover more about each element you’ve unlocked.\n"
  );
}

function viewHints() {
  message.displayMessage(
    "Hints Feature Coming Soon! \n -Get help if you're stuck!\n"
  );
}

// function playBkgMusic() {
//   let bkgMusic = document.getElementById("background-music");
//   bkgMusic.play();
//   bkgMusic.loop = true;
// }

// //window.playBkgMusic = playBkgMusic();
