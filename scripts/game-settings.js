let gameSettings = document.getElementById("game-settings");

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
