const todoList = [];

function renderTodoList() {
  let todoListHTML = "";
  const todoOutput = document.querySelector("#js-todo-list");

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const todoName = todoObject.name;
    const todoDate = todoObject.date;
    /* if the variables have the same name as the property -> const {name, date} = todoObject; */
    const html = `
    <div>
    ${todoName}
    </div>
    <div>
    ${todoDate}
    </div>
    <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
    " class="delete">Delete</button>
    `;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  todoOutput.innerHTML = todoListHTML;
}

function addTodo() {
  const todoInput = document.querySelector("#js-name-input");
  const todoDate = document.querySelector("#js-date-input");
  const name = todoInput.value;
  const date = todoDate.value;
  todoList.push({ name, date });
  console.log(todoList);
  todoInput.value = "";
  todoDate.value = "";
  renderTodoList();
}
