const textBox = document.getElementById("textBox");
const addTaskButtonElement = document.getElementById("addTaskButton");
const itemContainerElement = document.getElementById("itemContainer");

let tasks = [];
console.log(tasks);
function addTask() {
  const headlineElement = document.querySelector("h1");
  console.log(headlineElement);
  addTaskButtonElement.addEventListener("click", addToListHandler);
}

//creating divs with items on click
function addToListHandler() {
  const item = document.createElement("div");
  item.classList.add("item-style");
  itemContainerElement.appendChild(item);

  //creating the text part/value

  const itemText = document.createElement("p");
  itemText.innerText = textBox.value;
  item.appendChild(itemText);

  //creating the "✔️"/complete button
  const completeButton = document.createElement("button");
  completeButton.innerText = "✔️";
  item.appendChild(completeButton);

  //creating the "❌"/delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  item.appendChild(deleteButton);
}

addTask();
