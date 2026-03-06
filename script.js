const squareLength = "50px";

const container = document.querySelector(".container");

const divBox = document.createElement("div");
divBox.style.width = squareLength;
divBox.style.height = squareLength;
divBox.style.border = "2px solid black";

container.append(divBox);
