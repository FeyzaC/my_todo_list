const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

let todos = [];

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("Please enter new todo");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };
  }

  createListElement();
});

function createListElement() {
  document.createElement("li"); // li olusturulacak
  li.setAttribute("id", id); // li elementine id olusturduk
  // i olusturulacak
  // p olusturulacak
  // i olusturulacak
  // li elementi ul nin icine konumlandirilacak
}
todoUl.addEventListener("click", () => {});

todoInput.addEventListener("keydown", () => {
  addBtn.click();
});

window.onload = function () {
  todoInput.focus();
};
