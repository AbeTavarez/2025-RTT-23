let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");

// console.log(taskInput);
// console.log(addTaskButton);
// console.log(taskList);

// Adds an event listener to the button
addTaskButton.addEventListener("click", function () {
  // store the value input value in a variable
  let taskText = taskInput.value;

  // check if the input text is empty
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // create a new li and add the user text to the li
  let listItem = document.createElement("li");
  listItem.innerText = taskText;

  // Create a new checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Append checkbox to the li
  listItem.appendChild(checkbox);

  // add the li to the ul
  taskList.appendChild(listItem);
  taskInput.value = ""; // Clear the input field
});

// Remove an li from the ul
taskList.addEventListener("click", function (event) {
  console.log(event);
  // checks if the click was on an li
  if (event.target.tagName === "LI") {
    //remove the element child from the ul
    taskList.removeChild(event.target);
  }

  if (event.target.tagName === "INPUT") {
    //remove the element child from the ul
    console.log(event.target.parentNode);
    
    event.target.parentNode.classList.toggle("completed");
  }
});
