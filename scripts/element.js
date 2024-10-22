import { makeDraggable } from "./draggable.js";
export let createdElements = {};

export class Element {
  constructor(id, name, bkgImg, top) {
    this.id = id;
    this.name = name;
    this.bkgImg = bkgImg;
    this.top = top;

    //create the element
    this.element = document.createElement("div");
    this.element.setAttribute("id", id);
    this.element.innerText = name;
    this.element.style.backgroundImage =
      "url('assets/images/" + bkgImg + ".png')";
    this.element.style.top = top;
    this.element.className = "element";

    createdElements[id] = this.element;

    //allows element to drag
    makeDraggable(this.element);
  }
}
