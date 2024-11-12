import {clearElementContainers,holdingElements} from "./main.js";
import { Message } from "./components/message.js";

export let gameSettings = document.getElementById("game-utilities");

let message = new Message();
let settings_options = [
  { name: "clean up", img: "bi bi-eraser", action: cleanUp },
  { name: "settings", img: "bi bi-sliders", action: viewSettings },
  { name: "encyclopedia", img: "bi bi-journal-plus", action: viewEncyclopedia },
  { name: "hints", img: "bi bi-lightbulb", action: viewHints },
];

settings_options.forEach((option) => {
  let settings_option = document.createElement("div");
  let i = document.createElement("i");
  settings_option.className = "settings-option";
  settings_option.innerText = option.name;
  settings_option.append(i);
  i.className = option.img;
  i.setAttribute("id", "icon");
  gameSettings.appendChild(settings_option);
  i.addEventListener("click", option.action);
});

function cleanUp() {
  // location.reload();
  clearElementContainers()
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

function playBkgMusic() {
  let bkgMusic = document.getElementById("background-music");
  bkgMusic.play();
  bkgMusic.loop = true;
}

//window.playBkgMusic = playBkgMusic();
