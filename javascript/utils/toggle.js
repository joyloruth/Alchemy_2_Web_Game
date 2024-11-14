import { gameInventory, gamePlay} from "../main.js";

import { gameSettings} from "../utils/utilites.js";


/*Toggles Day and Night Mode */
let themeToggle = document.createElement("div");
themeToggle.className = "theme-toggle";

let dayMode = document.createElement("div");
dayMode.className = "toggle-btn";
themeToggle.appendChild(dayMode);
dayMode.addEventListener("click", viewDayMode);
dayMode.setAttribute("id", "day-mode");

let nightMode = document.createElement("div");
nightMode.className = "toggle-btn";
themeToggle.appendChild(nightMode);
nightMode.addEventListener("click", viewNightMode);
nightMode.setAttribute("id", "night-mode");

gameSettings.appendChild(themeToggle);

function viewDayMode() {
  dayMode.style.display = "none";
  nightMode.style.display = "flex";
  gameSettings.style.backgroundColor = "#310d50";
  gameSettings.style.boxShadow = "1px 1px 10px black";
  gamePlay.style.backgroundColor = "#8a2be2";
  gameSettings.style.transition = "all 1s ease-in";
  gamePlay.style.transition = "all 1s ease-in ";
  gameInventory.style.backgroundColor = "#38b6ff";
  gameInventory.style.boxShadow = "1px 1px 10px black";
}

function viewNightMode() {
  nightMode.style.display = "none";
  dayMode.style.display = "flex";
  dayMode.style.transition = "all 1s ease-out";
  gameSettings.style.backgroundColor = "black";
  gamePlay.style.backgroundColor = "#202020";
  gameSettings.style.boxShadow = "1px 1px 10px gold";
  gameSettings.style.transition = "all 1s ease-in";
  gamePlay.style.transition = "all 1s ease-in";
  gameInventory.style.backgroundColor = "black";
  gameInventory.style.transition = "all .5s ease-in";
  gameInventory.style.boxShadow = "1px 1px 5px gold";
}