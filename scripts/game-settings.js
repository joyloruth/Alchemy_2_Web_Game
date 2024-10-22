let gameSettings = document.getElementById("game-settings");
let gameSpace = document.getElementById("game-space");
let gameInventory = document.getElementById("game-inventory")

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
  gameInventory.style.backgroundColor = "#000000";
  gameInventory.style.boxShadow = "1px 1px 10px black";
}

function viewNightMode() {
  nightMode.style.display = "none";
  dayMode.style.display = "flex";
  dayMode.style.transition = "all 1s ease-out";
  gameSettings.style.backgroundColor = "rgb(53, 4, 62)";
  gameSpace.style.backgroundColor = "rgb(53, 4, 62)";
  gameSettings.style.transition = "all 1s ease-in";
  gameSpace.style.transition = "all 1s ease-in";
  gameInventory.style.backgroundColor = "rgb(56, 5, 30)";
  gameInventory.style.transition = "all .5s ease-in";
}

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
  gameSettings.appendChild(settings_option);
  i.addEventListener("click", option.action);
});

function cleanUp() {
  location.reload();
}

function viewSettings() {
  let settingsModule = document.createElement("div");
  settingsModule.className = "settings-module";
  gameSpace.appendChild(settingsModule);
}

function viewEncyclopedia() {
  let encyclopediaModule = document.createElement("div");
  encyclopediaModule.className = "settings-module";
  gameSpace.appendChild(encyclopediaModule);
  encyclopediaModule.innerHTML = "Encyclopedia";
}

function viewHints() {
  let hintsModule = document.createElement("div");
  hintsModule.className = "settings-module";
  gameSpace.appendChild(hintsModule);
  hintsModule.innerHTML = "Hints";
}
