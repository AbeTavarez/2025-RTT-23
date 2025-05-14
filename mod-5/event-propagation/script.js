const todoList = document.getElementById("todo-list");
const addTaskButton = document.getElementById("add-task");

// Event delegation: Attach one listener to the parent
todoList.addEventListener("click", (event) => {
  console.log("Event on the UL");
  event.stopPropagation(); // Stop event bubbling

  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove(); // Remove the task
  }
});

// Adding a new task
addTaskButton.addEventListener("click", () => {
  const newTask = document.createElement("li");
  newTask.innerHTML = 'New Task <button class="delete">Delete</button>';
  todoList.appendChild(newTask);
});

document.body.addEventListener("click", function (event) {
  console.log("Event on the Body");
  // console.log(`Clicked on ${event}`);
  document.body.style.backgroundColor = "red";
//   event.stopPropagation();
});

document.addEventListener("click", function (event) {
  console.log("Event on the Document");
  console.dir(event)
  console.dir(event.shiftKey)
});
