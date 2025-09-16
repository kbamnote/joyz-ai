
import { saveTasks, loadTasks } from "./storage.js";
import { createTask, renderTask } from "./tasks.js";
import { enableDragAndDrop } from "./dragdrop.js";

const form = document.getElementById("taskForm");
const titleInput = document.getElementById("taskTitle");
const descInput = document.getElementById("taskDescription");
const boardEl = document.getElementById("board");

let tasks = [];


function init() {
  tasks = loadTasks();
  renderBoard();
  enableDragAndDrop(boardEl, moveTask);
}

function renderBoard() {
  ["todo", "inprogress", "done"].forEach((status) => {
    const list = document.getElementById(status);
    list.innerHTML = ""; 
    tasks
      .filter((t) => t.status === status)
      .forEach((task) => {
        list.appendChild(renderTask(task));
      });
  });
  saveTasks(tasks);
}

function addTask(title, description) {
  const newTask = createTask(title, description);
  tasks.push(newTask);
  renderBoard();
}

function moveTask(taskId, newStatus) {
  tasks = tasks.map((t) =>
    t.id === taskId ? { ...t, status: newStatus } : t
  );
  renderBoard();
}

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!titleInput.value.trim()) return;
  addTask(titleInput.value, descInput.value);
  titleInput.value = "";
  descInput.value = "";
});

init();
