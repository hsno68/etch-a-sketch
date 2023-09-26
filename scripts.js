const parentContainer = document.querySelector(".parent-container");
const generateButton = document.querySelector(".generate-button");
const clearButton = document.querySelector(".clear-button");

generateButton.addEventListener("click", createGrid);
clearButton.addEventListener("click", () => parentContainer.replaceChildren());

function createGrid() {
  parentContainer.replaceChildren();
  const gridSize = prompt("Input a size for the grid");
  for (let i = 0; i < gridSize; i++) {
    const childContainer = document.createElement("div");
    childContainer.classList.add("child-container");
    parentContainer.appendChild(childContainer);
    for (let j = 0; j < gridSize; j++) {
      const child = document.createElement("div");
      child.classList.add("child");
      child.addEventListener("mouseenter", () => child.classList.add("hovered"));
      childContainer.appendChild(child);
    }
  }
}