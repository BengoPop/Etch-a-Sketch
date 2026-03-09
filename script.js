/*
 *
 *Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

    Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
    Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
    Also check out prompts.
    You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

 *
 */
const gridWidth = 960;
const container = document.querySelector(".container");
container.style.width = `${gridWidth}px`;


function createBox(numSquarePerLength) {
  const squareLength = Math.floor(gridWidth / numSquarePerLength); //px
  const divBox = document.createElement("div");
  divBox.style.width = `${squareLength}px`;
  divBox.style.height = `${squareLength}px`;
  divBox.style.border = "2px solid black";
  divBox.addEventListener("mouseover", (e) => divBox.style.backgroundColor = "gray");
  container.append(divBox);
}


function drawGrid(numSquarePerLength) {
  for (let i = 0; i < numSquarePerLength * numSquarePerLength; i++) {
    createBox(numSquarePerLength);
  }
}

function getUserSquarePerSide() {
  let num = prompt("Set number of squares per side of new grid.");
  drawGrid(num);

}

getUserSquarePerSide()
getUserSquarePerSide()


