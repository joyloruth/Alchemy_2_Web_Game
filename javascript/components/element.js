import { gameInventory } from "../main.js";
import { checkElementCombination } from "./combinations.js";

let clone;
export let element_containers = document.querySelectorAll(".element-container");

export class Element {
  constructor(id) {
    this.id = id;

    //Create the element
    this.element = document.createElement("div");
    this.element.setAttribute("id", id);
    this.element.innerText = id;
    this.element.style.backgroundImage =
      "url('../assets/images/" + id + ".png')";
    this.element.setAttribute("alt", "Image of " + id);
    this.element.classList.add("element");
    this.element.setAttribute("draggable", true);
    this.dragElement();
    this.addElement();
  }

  dragElement(event) {
    this.element.addEventListener("dragstart", () => {
      clone = this.element.cloneNode(true);
      clone.classList.add("dragging");
    });

    this.element.addEventListener("dragend", () => {
      clone.classList.remove("dragging");
    });

    element_containers.forEach((element_container) => {
      element_container.addEventListener("dragover", (event) => {
        event.preventDefault();
      });

      element_container.addEventListener("drop", (event) => {
        if (!element_container.hasChildNodes()) {
          element_container.appendChild(clone);
          clone.classList.remove("dragging");
          clone.classList.add("holding");

          checkElementCombination();
        }
      });
    });
  }

  addElement() {
    this.element.addEventListener("click", () => {
      clone = this.element.cloneNode(true);
      clone.classList.add("dragging");
      console.log("touchstart");
      element_containers.forEach((element_container) => {
        if (!element_container.hasChildNodes()) {
          element_container.appendChild(clone);
          clone.classList.remove("dragging");
          clone.classList.add("holding");

          checkElementCombination();
        }
      });
    });
  }

  static storeElement(id) {
    localStorage.setItem(id, id);
    Element.renderElement(id);
  }

  static renderElement(id) {
    let getItem = localStorage.getItem(id);
    if (getItem) {
      let item = new Element(id);
      gameInventory.append(item.element);
    }
  }

  static renderStartingElements() {
    let startingElements = [
      { id: "air" },
      { id: "water" },
      { id: "fire" },
      { id: "earth" },
    ];
    startingElements.forEach((element) => {
      localStorage.setItem(element.id, element.id);
    });
  }

  static renderAllElements() {
    Element.renderStartingElements();

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      Element.renderElement(key);
    }
  }
}
