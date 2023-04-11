//for local storage and JSON i got info and help from ChatGPT

// const all main elements for use in the DOM
const textBox = document.getElementById("textBox");
const addTaskButtonElement = document.getElementById("addTaskButton");
const itemContainerElement = document.getElementById("itemContainer");

//array that the task list will be stored in
let tasks = [];

// checks if there are any tasks in local storage.
//  Parse turns the saved string back into and object
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach((task) => {
    createTaskElement(task);
  });
}
//main function for adding tasks and storing them in local storage
function addTask() {
  addTaskButtonElement.addEventListener("click", () => {
    const taskText = textBox.value;
    const task = { text: taskText, complete: false };
    //pushes the new task to end of tasks array
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    createTaskElement(task);
    textBox.value = "";
  });
}
//function with the logic of creating the item div and
// its components (p,and 2 buttons)
function createTaskElement(task) {
  const item = document.createElement("div");
  item.classList.add("item-style");
  itemContainerElement.appendChild(item);

  const itemText = document.createElement("p");
  itemText.innerText = task.text;
  item.appendChild(itemText);

  if (task.complete) {
    itemText.classList.add("task-complete");
  }
  //creates the "complete" button and adds it to the item div
  const completeButton = document.createElement("button");
  completeButton.innerText = "✔️";
  completeButton.classList.add("complete-button");
  item.appendChild(completeButton);

  // same but with delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  item.appendChild(deleteButton);

  //when you press complete button it toggles from
  // complete to not complete
  completeButton.addEventListener("click", () => {
    task.complete = !task.complete;
    itemText.classList.toggle("task-complete");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  //when you press "delete" the filter creates a new array with all elements
  //if the clicked element is equal to the task it is not included in
  //the new array and will be delted.
  deleteButton.addEventListener("click", () => {
    tasks = tasks.filter((t) => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    itemContainerElement.removeChild(item);
  });
}
//displays the function and main event listener
addTask();
