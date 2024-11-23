// this page serves as a place holder for previous logic that may or may not be recycled

//   Element.renderAllElements()
// });

// disappearDiscoveredElementModal(id) {
  //   this.modal.style.opacity = 0;
  //   this.modal.style.transition = "all .5s linear";
  //   this.modal.appendChild(this.modalImg);
  //   this.modal.appendChild(this.modalExitButton);
  //   gameSpace.appendChild(this.modal);
  //   document.body.appendChild(this.modalOverlay);
  // }




// function isMatch(element1, element2) {
//   holdingElements = Array.from(document.querySelectorAll(".holding"));
//   let element_containers = document.querySelectorAll(".element-container");
//   let fire = holdingElements.some((element) => element.id === "fire");
//   let comboKey;
//   let water = holdingElements.some((element) => element.id === "water");
//   if(water && fire){
//     comboKey = "${water}-${fire}";
//   }
//   let elementMap = {
//     "water-fire": "steam",
//   };

//   comboKey = "${element1}-${element2}";
//   console.log("---->" + comboKey)
//   return elementMap[comboKey];
// }



// // isMatch()


// // let results = new Map([
// //   [["water","fire"]]
// // ])

// let container1 = document.getElementById('one')
// // let container2 = document.getElementById('two')

// // let container1Contents = new Set()

// console.log(container1.childNodes[0])

// // function match(){
// //   holdingElements = Array.from(document.querySelectorAll(".holding"));

// //   let fire = holdingElements.some((element) => element.id === "fire");
// //   let water = holdingElements.some((element) => element.id === "water");

  // holdingElements.forEach(hold=>{
//   container1Contents.add(hold.id)
// })













// }
// function renderAvailableElements() {
//   gameInventory.innerHTML = "";

//   // availableElements.sort((a, b) => a.id.localeCompare(b.id));

//   availableElements.forEach((ele) => {
//     // let availableElement = new Element(ele.id);
//     let availableElement = Element.storeElement(ele.id);

//     gameInventory.appendChild(availableElement);

//     availableElement.element.addEventListener("dragstart", () => {
//       clone = availableElement.element.cloneNode(true);
//       clone.classList.add("dragging");
//     });

//     availableElement.element.addEventListener("dragend", () => {});
//   });
// }

// export let element_containers = document.querySelectorAll(".element-container");

// element_containers.forEach((element_container) => {
//   element_container.addEventListener("dragover", (event) => {
//     event.preventDefault();
//   });

//   element_container.addEventListener("drop", (event) => {
//     event.preventDefault();

//     if (!element_container.hasChildNodes()) {
//       element_container.appendChild(clone);
//     }
//     clone.classList.add("holding");
//     clone.classList.remove("dragging");

//     checkForCombination();
//   });
// });



// let fire = holdingElements.some((element) => element.id === "fire");
// let water = holdingElements.some((element) => element.id === "water");
// let air = holdingElements.some((element) => element.id === "air");
// let earth = holdingElements.some((element) => element.id === "earth");
// let mud = holdingElements.some((element) => element.id === "mud");
// let wall = holdingElements.some((element) => element.id === "wall");
// let brick = holdingElements.some((element) => element.id === "brick");

// let firstElement;
// let secondElement;
// let duplicate = false;

// // if (holdingElements[1]) {
// //   firstElement = holdingElements[0].id;
// //   secondElement = holdingElements[1].id;

// //   if (firstElement === secondElement) {
// //     duplicate = true;
// //   }
// // }

// if (holdingElements[1]) {
//   if (fire && water) {
//     id = "steam";
//     console.log("steam")
//     validateAndRenderElement(id);
//   } else if (air && earth) {
//     id = "dust";
//     validateAndRenderElement(id);
//   } else if (earth && fire) {
//     id = "lava";
//     validateAndRenderElement(id);
//   } else if (earth && water) {
//     id = "mud";
//     validateAndRenderElement(id);
//   } else if (fire && air) {
//     id = "smoke";
//     validateAndRenderElement(id);
//   } else if (fire && mud) {
//     id = "brick";
//     validateAndRenderElement(id);
//   } else if (duplicate == true && fire) {
//     id = "combustion";
//     validateAndRenderElement(id);
//   } else if (duplicate == true && brick) {
//     id = "wall";
//     validateAndRenderElement(id);
//   } else if (duplicate == true && wall) {
//     id = "home";
//     validateAndRenderElement(id);
//   } else {

//       message.displayMessage(
//         "Looks like you've discovered... disappointment.\n " +
//           holdingElements[0].id.toUpperCase() +
//           " and " +
//           holdingElements[1].id.toUpperCase() +
//           " don't mix well!  \n Try again! ")

//     // clearElementContainers();
//   }
// }
// } 

// export function clearElementContainers() {
//   element_containers.forEach((element_container) => {
//     element_container.removeChild(element_container.firstChild);
//   });
//   holdingElements.splice(0, holdingElements.length);
// }

// function validateAndRenderElement(id) {
//   if (availableElements.find((item) => item.id === id)) {
//     message.displayMessage("already discovered.");
//     setTimeout(() => {
//       message.hideMessage();
//       clearElementContainers();
//     }, 1700);
//   } else {
//     Element.storeElement(id)
//     message.displayDiscoveredElementModal(id);
//     setTimeout(clearElementContainers, 2000);
//   }

// }
// document.addEventListener("DOMContentLoaded", Element.renderAllElements())
// checkForCombination()
