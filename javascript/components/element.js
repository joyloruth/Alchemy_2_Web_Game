export class Element {
  constructor(id) {
    this.id = id;

    //Create the element
    this.element = document.createElement("div");
    this.element.setAttribute("id", id);
    this.element.innerText = id;
    this.element.style.backgroundImage = "url('../assets/images/" + id + ".png')";
    this.element.classList.add("element");
    this.element.setAttribute("draggable", true);
  }

  
}
