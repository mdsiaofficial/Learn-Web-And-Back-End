// script.js

document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function loadTasks() {
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";

    // Fetch tasks from JSON file
    fetch("tasks.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(task => {
                createTaskElement(task);
            });
        });
}

function createTaskElement(task) {
    const tasksContainer = document.getElementById("tasks-container");

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function () {
        updateTaskStatus(task.id, this.checked);
    });

    const taskText = document.createElement("div");
    taskText.textContent = task.text;
    if (task.completed) {
        taskText.classList.add("completed");
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        deleteTask(task.id);
    });

    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskText);
    taskElement.appendChild(deleteButton);

    tasksContainer.appendChild(taskElement);
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        createTaskElement(newTask);

        // Save updated tasks to JSON file
        saveTasks();

        taskInput.value = "";
    }
}

function updateTaskStatus(id, completed) {
    const tasksContainer = document.getElementById("tasks-container");

    // Update task status in the UI
    const taskElement = tasksContainer.querySelector(`[data-id="${id}"]`);
    const taskTextElement = taskElement.querySelector("div");
    taskTextElement.classList.toggle("completed", completed);

    // Update task status in the data
    saveTasks();
}

function deleteTask(id) {
    const tasksContainer = document.getElementById("tasks-container");

    // Remove task from the UI
    const taskElement = tasksContainer.querySelector(`[data-id="${id}"]`);
    taskElement.remove();

    // Remove task from the data
    saveTasks();
}

function saveTasks() {
    const tasksContainer = document.getElementById("tasks-container");

    // Collect tasks from the UI
    const tasks = [];
    tasksContainer.querySelectorAll(".task").forEach(taskElement => {
        const checkbox = taskElement.querySelector("input");
        const taskText = taskElement.querySelector("div");
        const id = parseInt(taskElement.dataset.id);
        const completed = checkbox.checked;

        tasks.push({
            id,
            text: taskText.textContent,
            completed
        });
    });

    // Save tasks to JSON file
    const jsonData = JSON.stringify(tasks, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "tasks.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
