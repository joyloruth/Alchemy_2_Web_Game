let gameInventory = document.getElementById("game-inventory");
let gameSpace = document.getElementById("game-space");

let createdElements = {};
let primaryElements = [
  { id: "air", name: "air", bkgImg: "air", top: "10px" },
  { id: "earth", name: "earth", bkgImg: "earth", top: "120px" },
  { id: "fire", name: "fire", bkgImg: "fire", top: "230px" },
  { id: "water", name: "water", bkgImg: "water", top: "340px" },
];

class Element {
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
    this.element.draggable = "true";

    createdElements[id] = this.element;

    //allows element to drag
    this.makeDraggable(this.element);
  }

  makeDraggable = (element) => {
    let startX,
      startY = 0;
    let endX,
      endY = 0;

    element.addEventListener("mousedown", mouseDown);

    function mouseDown(e) {
      startX = e.clientX;
      startY = e.clientY;

      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
    }

    function mouseMove(e) {
      endX = startX - e.clientX;
      endY = startY - e.clientY;

      startX = e.clientX;
      startY = e.clientY;

      element.style.left = element.offsetLeft - endX + "px";
      element.style.top = element.offsetTop - endY + "px";

      checkCollision(createdElements["water"], createdElements["fire"]);
    }

    function mouseUp(e) {
      document.removeEventListener("mousemove", mouseMove);
    }
  };
}

primaryElements.forEach((primaryElement) => {
  let primeElement = new Element(
    primaryElement.id,
    primaryElement.name,
    primaryElement.bkgImg,
    primaryElement.top
  );

  gameInventory.appendChild(createdElements[primaryElement.id]);
});

function checkCollision(element1, element2) {
  let rect1 = element1.getBoundingClientRect();
  let rect2 = element2.getBoundingClientRect();

  if (Math.abs(rect1.left - rect2.left) < 5) {
    console.log(rect1.left, rect2.left);
    console.log("eureka");
  }
}
