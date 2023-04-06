const textBox = document.getElementById("textBox");
const addTaskButtonElement = document.getElementById("addTaskButton");
// const itemContainerElement = document.getElementById("itemContainer");

let tasks = [];
console.log(tasks);
function addTask() {
  const headlineElement = document.querySelector("h1");
  console.log(headlineElement);
  addTaskButtonElement.addEventListener("click", addToListHandler);
}

function addToListHandler() {
  const item = document.createElement("div");
  item.innerText = "hello";
  const itemContainerElement = document.getElementById("itemContainer");
  item.classList.add("item-style");
  itemContainerElement.appendChild(item);

  console.log("add to list was clicked");
}

// function addToList() {}

// window.addEventListener("load", onLoadHandler);
addTaskButtonElement.addEventListener("click", addTask);
