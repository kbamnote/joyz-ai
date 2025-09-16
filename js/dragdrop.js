

export function enableDragAndDrop(boardEl, moveTask) {
  boardEl.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("task")) {
      e.dataTransfer.setData("taskId", e.target.dataset.id);
    }
  });

  boardEl.addEventListener("dragover", (e) => {
    e.preventDefault(); // allow drop
  });

  boardEl.addEventListener("drop", (e) => {
    const column = e.target.closest(".column");
    if (!column) return;

    const taskId = e.dataTransfer.getData("taskId");
    const newStatus = column.dataset.status;
    moveTask(taskId, newStatus);
  });
}
