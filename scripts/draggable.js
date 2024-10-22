
export function makeDraggable(element){
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
    }

    function mouseUp(e) {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup",mouseUp)
      // Object.values(createdElements).forEach(otherElement => {
      //   if (element !== otherElement && checkCollision(element, otherElement)) {
      //     createNewElement(element, otherElement);
      //   }
      // });
    }
  };