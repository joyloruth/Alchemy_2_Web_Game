import { Element } from "./components/element.js";
import { Message } from "./components/message.js";

export let gameInventory = document.getElementById("game-inventory");
export let gamePlay = document.getElementById("game-play");

export let holdingElements;

let clone;
let message = new Message();
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
    let availableElement = new Element(ele.id);
    gameInventory.appendChild(availableElement.element);

    availableElement.element.addEventListener("dragstart", () => {
      clone = availableElement.element.cloneNode(true);
      clone.classList.add("dragging");
    });

    availableElement.element.addEventListener("dragend", () => {});
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
  holdingElements = Array.from(document.querySelectorAll(".holding"));
  let id;

  let fire = holdingElements.some((element) => element.id === "fire");
  let water = holdingElements.some((element) => element.id === "water");
  let air = holdingElements.some((element) => element.id === "air");
  let earth = holdingElements.some((element) => element.id === "earth");
  let mud = holdingElements.some((element) => element.id === "mud");
  let wall = holdingElements.some((element) => element.id === "wall");
  let brick = holdingElements.some((element) => element.id === "brick");

  let firstElement;
  let secondElement;
  let duplicate = false;

  if (holdingElements[1]) {
    firstElement = holdingElements[0].id;
    secondElement = holdingElements[1].id;

    if (firstElement === secondElement) {
      duplicate = true;
    }
  }

  if (holdingElements[1]) {
    if (fire && water) {
      id = "steam";
      validateAndRenderElement(id);
    } else if (air && earth) {
      id = "dust";
      validateAndRenderElement(id);
    } else if (earth && fire) {
      id = "lava";
      validateAndRenderElement(id);
    } else if (earth && water) {
      id = "mud";
      validateAndRenderElement(id);
    } else if (fire && air) {
      id = "smoke";
      validateAndRenderElement(id);
    } else if (fire && mud) {
      id = "brick";
      validateAndRenderElement(id);
    } else if (duplicate == true && fire) {
      id = "combustion";
      validateAndRenderElement(id);
    } else if (duplicate == true && brick) {
      id = "wall";
      validateAndRenderElement(id);
    } else if (duplicate == true && wall) {
      id = "home";
      validateAndRenderElement(id);
    } else {

        message.displayMessage(
          "Looks like you've discovered... disappointment.\n " +
            holdingElements[0].id.toUpperCase() +
            " and " +
            holdingElements[1].id.toUpperCase() +
            " don't mix well!  \n Try again! ")
      
      
      clearElementContainers();
    }
  }
}

export function clearElementContainers() {
  element_containers.forEach((element_container) => {
    element_container.removeChild(element_container.firstChild);
  });
  holdingElements.splice(0, holdingElements.length);
}

function validateAndRenderElement(id) {
  if (availableElements.find((item) => item.id === id)) {
    message.displayMessage("already discovered.");
    setTimeout(() => {
      message.hideMessage();
      clearElementContainers();
    }, 1000);
  } else {
    availableElements.push({ id: id });
    renderAvailableElements();
    message.displayDiscoveredElementModal(id);
    setTimeout(clearElementContainers, 2000);
  }
}
