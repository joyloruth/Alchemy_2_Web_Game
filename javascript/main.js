import { Element } from "../javascript/components/element.js";
import { Message } from "../javascript/components/message.js";

export let gameInventory = document.getElementById("game-inventory");
export let gamePlay = document.getElementById("game-play");
const holdingElements = Array.from(document.querySelectorAll(".holding"));

let message = new Message();
let element = new Element();

document.addEventListener("DOMContentLoaded", () => {
  Element.renderAllElements();
});
