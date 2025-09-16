// tasks.js
// Task creation and rendering
import { createElement } from "./dom.js";

export function createTask(title, description) {
  return {
    id: Date.now().toString(),
    title,
    description,
    status: "todo"
  };
}

export function renderTask(task) {
  const card = createElement("div", "task");
  card.setAttribute("draggable", "true");
  card.dataset.id = task.id;

  const titleEl = createElement("h3", "", task.title);
  const descEl = createElement("p", "", task.description);

  card.appendChild(titleEl);
  card.appendChild(descEl);

  return card;
}
