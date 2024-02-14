const form = document.getElementById("todo-form");
const newTodoInput = document.getElementById("new-todo");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = newTodoInput.value;
  if (newTodo === "") return;
  todoList.innerHTML += `<li class="todo">${newTodo}</li>`;
  newTodoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }
});