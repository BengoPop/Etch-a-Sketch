const squareLength = 50; //px

const container = document.querySelector(".container");
//16 x 16 container for box
container.style.width = `${squareLength * 16}px`;

function createBox() {
  const divBox = document.createElement("div");
  divBox.style.width = `${squareLength}px`;
  divBox.style.height = `${squareLength}px`;
  divBox.style.border = "2px solid black";
  container.append(divBox);
}

for (let i = 0; i < 16 * 16; i++) {
  createBox();
}


