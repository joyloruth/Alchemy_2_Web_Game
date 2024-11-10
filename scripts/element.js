import { makeDraggable } from "./draggable.js";
export let createdElements = {};

export class Element {
  constructor(id, name, bkgImg, top, left) {
    this.id = id;
    this.name = name;
    this.bkgImg = bkgImg;
    this.top = top;
    this.left = left;

    //create the element
    this.element = document.createElement("div");
    this.element.setAttribute("id", id);
    this.element.innerText = name;
    this.element.style.backgroundImage =
      "url('/assets/images/" + bkgImg + ".png')";
    this.element.className = "element";
    this.element.style.top = top;
    this.element.style.left = left;


    createdElements[id] = this.element;

    //allows element to drag
    makeDraggable(this.element);
  }

}
