 let todoList = [];

function myTodo() {
    let inputElement = document.getElementById('todo1');
    let todoElement = inputElement.value;
    inputElement.value = "";

    if (todoElement !== "") {
        todoList.push(todoElement);
        updateLocalStorage();
        displayTodo();
    }
}

function displayTodo() {
    let date = new Date();
    let formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    let displayItem = document.getElementById('my-todo');
    displayItem.innerHTML = ""; 

    for (let i = 0; i < todoList.length; i++) {
        displayItem.innerHTML += `
        <li>
             <div class='task-text'>${todoList[i]}
                <div class="task-date">${formattedDate}</div> 
            </div>
            <button class="delete-btn" onclick="deleteTodo(${i})">Delete</button>
       </li>`;
    }
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    displayTodo();
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function loadFromLocalStorage() {
    let storedList = localStorage.getItem("todoList");
    if (storedList) {
        todoList = JSON.parse(storedList);
        displayTodo();
    }
}

window.onload = function() {
    loadFromLocalStorage();
};
