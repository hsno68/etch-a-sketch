const parentContainer = document.querySelector(".parent-container");

for (let i = 0; i < 16; i++) {
  const childContainer = document.createElement("div");
  childContainer.classList.add("child-container");
  parentContainer.appendChild(childContainer);
  for (let j = 0; j < 16; j++) {
    const child = document.createElement("div");
    child.classList.add("child");
    child.addEventListener("mouseenter", () => child.classList.add("hovered"));
    childContainer.appendChild(child);
  }
}