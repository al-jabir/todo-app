// select elements & assign them to variables
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

const createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";

  listItem.append(checkBox, label);

  return listItem;
};

const addTask = function (e) {
  e.preventDefault();

  let listItem = createTask(newTask.value);
  newTask.innerText = "";
  todoUl.appendChild(listItem);

  inCompleteTask(listItem, completeTask);
};

const completeTask = function () {
  let listItem = this.parentElement;
  let deleteButton = document.createElement("delete");
  deleteButton.innerText = "Delete";
  deleteButton.classList = "delete";

  listItem.appendChild(deleteButton);

  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem);

  deleteTaskItem(listItem, deleteTask);
};

const deleteTask = function () {
  let listItem = this.parentElement;
  let ul = listItem.parentElement;
  ul.removeChild(listItem);
};

let deleteTaskItem = function (taskItem, deleteButtonClick) {
  let deletebtnClick = taskItem.querySelector(".delete");
  deletebtnClick.onclick = deleteButtonClick;
};

const inCompleteTask = function (taskItem, clickCheckBox) {
  let checkboxClick = taskItem.querySelector('input[type="checkbox"]');
  checkboxClick.onchange = clickCheckBox;
};

for (i = 0; i < todoUl.children.length; i++) {
  inCompleteTask(todoUl.children[i], completeTask);
}
for (i = 0; i < completeUl.children.length; i++) {
  deleteTaskItem(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
