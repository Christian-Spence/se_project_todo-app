import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
console.log(uuidv4());
import {initialTodos, validationConfig} from "../utils/constants.js";
import Todo from "../components/Todo.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// The logic in this function should all be handled in the Todo class.
 const generateTodo = (data) => {
  const todo = new Todo (data,"#todo-template");
  const todoElement = todo.getView();
  return todoElement;
//   todoNameEl.textContent = data.name;
//   todoCheckboxEl.checked = data.completed;

//   // Apply id and for attributes.
//   // The id will initially be undefined for new todos.


//   // If a due date has been set, parsing this it with `new Date` will return a
//   // number. If so, we display a string version of the due date in the todo.
//   const dueDate = new Date(data.date);
//   if (!isNaN(dueDate)) {
//     todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     })}`;
//   }

};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  const todo = generateTodo(values);
  todosList.append(todo);
  closeModal(addTodoPopup);
});

initialTodos.forEach((item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
});
