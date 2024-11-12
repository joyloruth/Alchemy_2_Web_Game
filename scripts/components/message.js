// import { gameSpace } from "../main.js";

export class Message {
  constructor(id) {
    this.id = id;

    this.modal = document.createElement("div");
    this.modal.className = "modal";

    this.modalMessage = document.createElement("div");
    this.modalMessage.className = "modalMessage";

    this.modalExitButton = document.createElement("button");
    this.modalExitButton.className = "modalExitButton";
    this.modalExitButton.innerHTML = "X";
    this.modalExitButton.addEventListener("click", () => this.hideMessage());
    this.modal.append(this.modalExitButton);

    this.modalImg = document.createElement("div");
    this.modalImg.className = "modalImg";

    this.modalOverlay = document.createElement("div");
    this.modalOverlay.className = "modalOverlay";
  }

  displayMessage(message) {
    this.modal.innerHTML = message;
    this.modal.append(this.modalExitButton);
    this.modalOverlay.style.opacity = "1";
    this.modalOverlay.style.transition = "all 1s ease";
    this.modalOverlay.appendChild(this.modal);
    document.body.appendChild(this.modalOverlay);
    document.body.appendChild(this.modalOverlay);
    setTimeout(() => {
      this.modal.style.top = "25%";
      this.modal.style.transition = "all .5s ease-in";
    }, 100);
  }

  hideMessage() {
    this.modal.style.top = "-25%";
    this.modalOverlay.style.transition = "all .5s ease";    
    setTimeout(() => {
      this.modalOverlay.style.opacity = "0";
      document.body.removeChild(this.modalOverlay);
    }, 500);
  }

  displayDiscoveredElementModal(id) {
    this.modalImg.style.backgroundImage =
      "url('/assets/images/" + id + ".png')";
    this.modalMessage.innerHTML = id;
    this.modal.appendChild(this.modalImg);
    this.modal.appendChild(this.modalMessage);
    this.modal.style.top = "25%";
    document.body.appendChild(this.modalOverlay);
    this.modalOverlay.appendChild(this.modal);
    this.modalOverlay.style.opacity = 1;
    this.modal.style.width = 
    this.modal.style.transition = "all .5s linear";
  }

  // disappearDiscoveredElementModal(id) {
  //   this.modal.style.opacity = 0;
  //   this.modal.style.transition = "all .5s linear";
  //   this.modal.appendChild(this.modalImg);
  //   this.modal.appendChild(this.modalExitButton);
  //   gameSpace.appendChild(this.modal);
  //   document.body.appendChild(this.modalOverlay);
  // }
}
