// find elements
const container = document.querySelector('.container');
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('#inputTodo');
const addTodoButton = document.querySelector('#addTodoButton');
const todoLists = document.querySelector('#lists');
const messageElement = document.querySelector('#message');

const getTodosFromLocalStorage = () => {
    return localStorage.getItem('todoItem')
        ? JSON.parse(localStorage.getItem('todoItem'))
        : [];
};
//show message
const showMessage = (text, status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(() => {
        messageElement.textContent = '';
        messageElement.classList.remove(`bg-${status}`);
    }, 1000);
};
//create todo
const createTodo = (todoId, todoValue) => {
    const todoElement = document.createElement('li');
    todoElement.id = todoId;
    todoElement.innerHTML = `<span> ${todoValue} </span> <span> <button class='btn' id='deleteButton'><i class="far fa-trash-alt"></i>
</button> </span>`;

    todoLists.appendChild(todoElement);
    const deleteButton = document.getElementById('deleteButton');
    deleteButton.addEventListener('click', handleDeleteTodo);
};

// event Function
const handleAddTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value;
    //unique id
    const todoId = Date.now().toString();
    createTodo(todoId, todoValue);
    showMessage('Your todo has been added', 'success');

    //adding to do to local storage
    const todos = getTodosFromLocalStorage();
    todos.push({ todoId, todoValue });
    localStorage.setItem('todoItem', JSON.stringify(todos));
    todoInput.value = '';
};

//deletet todo list
// const handleDeleteTodo = (event) => {
//     const selectedTodo = event.target.parentElement.parentElement;
//     console.log(selectedTodo);
//     todoLists.removeChild(selectedTodo);
//     showMessage('Your todo has been deleted', 'danger');

//     let todos = getTodosFromLocalStorage();
//     todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
//     localStorage.setItem('todoItem', JSON.stringify(todos));
//     console.log('clicked delete');
// };

const handleDeleteTodo = (event) => {
    const selectedTodo = event.target.closest('li');

    if (selectedTodo) {
        let todos = getTodosFromLocalStorage();
        todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
        localStorage.setItem('todoItem', JSON.stringify(todos));

        selectedTodo.parentElement.removeChild(selectedTodo);
        showMessage('Your todo has been deleted', 'danger');
    } else {
        console.error('Error: Unable to find the parent "li" element.');
    }
};

//loadtodos
const loadTodos = () => {
    const todos = getTodosFromLocalStorage();
    todos.map((todo) => {
        createTodo(todo.todoId, todo.todoValue);
    });
};
// add event Listener
todoForm.addEventListener('submit', handleAddTodo);
window.addEventListener('DOMContentLoaded', loadTodos);
