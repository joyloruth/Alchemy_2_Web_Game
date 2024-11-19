import { Element } from "./element.js";
import { element_containers } from "./element.js";
import { Message } from "./message.js";

let message = new Message();
let id;

export function checkElementCombination() {
  const holdingElements = Array.from(document.querySelectorAll(".holding"));
  holdingElements.innerHTML = "";
  let fire = holdingElements.some((element) => element.id === "fire");
  let water = holdingElements.some((element) => element.id === "water");
  let air = holdingElements.some((element) => element.id === "air");
  let earth = holdingElements.some((element) => element.id === "earth");
  let mud = holdingElements.some((element) => element.id === "mud");
  let wall = holdingElements.some((element) => element.id === "wall");
  let brick = holdingElements.some((element) => element.id === "brick");

let duplicate = false;

  if (holdingElements[1]) {
    let firstElement = holdingElements[0].id;
    let secondElement = holdingElements[1].id;
    if (firstElement === secondElement) {
      duplicate = true;
    }
  }

  if (holdingElements[1]) {
    if (fire && water) {
      id = "steam";
      handleDiscoveredElement(id);
    }
    else if (fire && earth) {
      id = "lava";
      handleDiscoveredElement(id);
    }
    else if (fire && air) {
      id = "smoke";
      handleDiscoveredElement(id);
    }
    else if (fire && duplicate) {
      id = "energy";
      handleDiscoveredElement(id);
    }
    else if (water && earth) {
      id = "mud";
      handleDiscoveredElement(id);
    }
    else if (mud && fire) {
      id = "brick";
      handleDiscoveredElement(id);
    }
    else if (brick && duplicate) {
      id = "wall";
      handleDiscoveredElement(id);
    }
    else if (earth && air) {
      id = "dust";
      handleDiscoveredElement(id);
    }
    else if (wall && wall) {
      id = "home";
      handleDiscoveredElement(id);
    }
    else{
     message.displayMessage("None..Try again")
     clearElementContainers()
    }
  }
}

function handleDiscoveredElement(id) {
  Element.storeElement(id);
  message.displayDiscoveredElementModal(id);
  clearElementContainers();
}

function clearElementContainers() {
  setTimeout(() => {
    element_containers.forEach((container) => {
      container.innerHTML = "";
    });
  }, 2000);
}
