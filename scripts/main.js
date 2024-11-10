import { Element, createdElements } from "./element.js";

export let gameInventory = document.getElementById("game-inventory");
export let gameSpace = document.getElementById("game-space");

// let primeElement;

// primaryElements.forEach((primaryElement) => {
//   primeElement = new Element(
//     primaryElement.id,
//     primaryElement.name,
//     primaryElement.bkgImg,
//     primaryElement.top,
//     primaryElement.left
//   );
//   gameInventory.appendChild(primeElement)
// });


let clone;
let element_discovered_container = document.getElementById("element-discovered");
let element_discovered_name = document.getElementById("name");
let element_discovered_image = document.getElementById("image");

let availableElements = [
  { id: "air", bkg: "gray" },
  { id: "water", bkg: "blue" },
  { id: "fire", bkg: "orangered" },
  { id: "earth", bkg: "green" },
];

function renderAvailableElements() {
  gameInventory.innerHTML = "";

  // alphabetizes the element list
  availableElements.sort((a, b) => a.id.localeCompare(b.id));

  availableElements.forEach((ele) => {
    let availableElement = document.createElement("div");
    availableElement.classList.add("element");
    availableElement.innerText = ele.id;
    availableElement.setAttribute("draggable", true);
    availableElement.setAttribute("id", ele.id);
    availableElement.style.backgroundImage = "url(/assets/images/" + ele.id + ".png)";

    gameInventory.appendChild(availableElement);

    availableElement.addEventListener("dragstart", () => {
      clone = availableElement.cloneNode(true);
      clone.classList.add("dragging");
    });

    availableElement.addEventListener("dragend", () => {
    });
  });
}

renderAvailableElements();

let element_containers = document.querySelectorAll(".element-container");

element_containers.forEach((element_container) => {
  element_container.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

 element_container.addEventListener("drop", (event) => {
    event.preventDefault();

    if (!element_container.hasChildNodes()) {
      element_container.appendChild(clone);
      
    }
    clone.classList.add("holding");
    clone.classList.remove("dragging");

    checkForCombination();
    
  });
});

function checkForCombination() {
  let holdingElements = Array.from(document.querySelectorAll(".holding"));
  let id;

  let fire = holdingElements.some((element) => element.id === "fire");
  let water = holdingElements.some((element) => element.id === "water");
  let air = holdingElements.some((element) => element.id === "air");
  let earth = holdingElements.some((element) => element.id === "earth");

  if (fire && water) {
    id = "steam";
    validateAndRenderElement(id);
  } else if (air && earth) {
    id = "dust";
    validateAndRenderElement(id);
  } else if (earth && fire) {
    id = "lava";
    validateAndRenderElement(id)
  } else if (earth && water) {
    id = "mud";
    validateAndRenderElement(id)
  }
}

function clearElementContainers() {
  element_containers.forEach((element_container) => {
    element_container.removeChild(element_container.firstChild);
  });
}

function validateAndRenderElement(id) {
  if (availableElements.find((item) => item.id === id)) {
    clearElementContainers()
  } else {
    availableElements.push({ id: id});
    renderAvailableElements();
    displayDiscoveredElementContainer(id)
     setTimeout(clearDiscoveredElementContainer, 2000);
     setTimeout(clearElementContainers,2000)
  }
}


//element_discovered_image.style.backgroundImage = "url(/assets/images/fire.png)";

function clearDiscoveredElementContainer(){
  element_discovered_image.style.backgroundImage = "none";
  element_discovered_name.innerHTML = "";
  element_discovered_container.style.display = "none";
}

function displayDiscoveredElementContainer(id){
  element_discovered_image.style.backgroundImage = "url(/assets/images/" + id + ".png)";
  element_discovered_name.innerHTML = id;
  element_discovered_container.style.display = "flex";
}