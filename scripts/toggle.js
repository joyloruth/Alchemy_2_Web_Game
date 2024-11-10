import { gameInventory,gameSpace} from "./main.js";
import { gameSettings} from "./settings.js";

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
  gameSettings.style.backgroundColor = "#3b3b3b";
  gameSettings.style.boxShadow = "1px 1px 10px black";
  gameSpace.style.backgroundColor = "	#222222";
  gameSettings.style.transition = "all 1s ease-in";
  gameSpace.style.transition = "all 1s ease-in ";
  gameInventory.style.backgroundColor = "#222222";
  gameInventory.style.boxShadow = "1px 1px 10px black";
}

function viewNightMode() {
  nightMode.style.display = "none";
  dayMode.style.display = "flex";
  dayMode.style.transition = "all 1s ease-out";
  gameSettings.style.backgroundColor = "inherit";
  gameSpace.style.backgroundColor = "inherit";
  gameSettings.style.transition = "all 1s ease-in";
  gameSpace.style.transition = "all 1s ease-in";
  gameInventory.style.backgroundColor = "inherit";
  gameInventory.style.transition = "all .5s ease-in";
}