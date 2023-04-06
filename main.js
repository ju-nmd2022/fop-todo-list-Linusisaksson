const textBox = document.getElementById("textBox");
const addTaskButtonElement = document.getElementById("addTaskButton");
const itemContainerElement = document.getElementById("itemContainer");

let tasks = [];
console.log(tasks);

function onLoadHandler() {
  const headlineElement = document.querySelector("h1");
  console.log(headlineElement);
  addTaskButtonElement.addEventListener("click", addToListHandler);
}

function addToListHandler() {
  console.log("add to list was clicked");
}

// function addToList() {}

// window.addEventListener("load", onLoadHandler);
addTaskButtonElement.addEventListener("click", onLoadHandler);
