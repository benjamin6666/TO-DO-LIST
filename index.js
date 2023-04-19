const form = document.querySelector("form");
const taskList = document.querySelector("#task-list");

function addTask(event, task) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<input type="checkbox" /> <span>${task}</span><button>Delete</button>`;
  taskList.appendChild(listItem);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#task-input");
  const task = input.value;
  addTask(event, task);
  input.value = "";
});

taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const listItem = event.target.parentElement;
    listItem.remove();
  }
});