import { Element, createdElements } from "./element.js";

let gameInventory = document.getElementById("game-inventory");
let gameSpace = document.getElementById("game-space");

let primaryElements = [
  { id: "air", name: "air", bkgImg: "air", top: "40px" },
  { id: "earth", name: "earth", bkgImg: "earth", top: "140px" },
  { id: "fire", name: "fire", bkgImg: "fire", top: "240px" },
  { id: "water", name: "water", bkgImg: "water", top: "340px" },
];

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
    console.log(element1 + "," + element2.name);
  }
}
