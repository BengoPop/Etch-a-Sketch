const gridWidth = 960;
const container = document.querySelector(".container");
const resetButton = document.querySelector("#resetGrid");
container.style.width = `${gridWidth}px`;


function createBox(numSquarePerLength) {
  const squareLength = Math.floor(gridWidth / numSquarePerLength); //px
  const divBox = document.createElement("div");
  divBox.style.width = `${squareLength}px`;
  divBox.style.height = `${squareLength}px`;
  divBox.style.border = "2px solid black";
  divBox.addEventListener("mouseover", (e) => divBox.style.backgroundColor = blockRandomColor());
  container.append(divBox);
}


function drawGrid(numSquarePerLength) {
  for (let i = 0; i < numSquarePerLength * numSquarePerLength; i++) {
    createBox(numSquarePerLength);
  }
}
function getUserSquarePerSide() {
  container.replaceChildren();
  let num = prompt("Set number of squares per side of new grid.");
  while (num > 100) {
    num = prompt("Number of squares per side can not be larger than 100. Try again")
  }
  drawGrid(num);

}

function blockRandomColor() {
  let randomRedValue, randomBlueValue, randomGreenValue;
  randomRedValue = Math.floor(Math.random() * 255);
  randomBlueValue = Math.floor(Math.random() * 255);
  randomGreenValue = Math.floor(Math.random() * 255);

  return `rgb(${randomRedValue},${randomBlueValue},${randomGreenValue})`;
}
getUserSquarePerSide();
resetButton.addEventListener("click", (e) => getUserSquarePerSide());

