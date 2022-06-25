document.addEventListener("DOMContentLoaded", () => {

  // All DOM elements captured

  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  const newTaskForm = document.getElementById("create-task-form");

  // event listeners
  newTaskForm.addEventListener("submit", createNewTask);

  const newTaskUl = document.getElementById("tasks");

});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset()
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};


