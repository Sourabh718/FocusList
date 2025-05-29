let todoList = [];

function myTodo() {
    let inputElement = document.getElementById('todo1');
    let todoElement = inputElement.value;
    inputElement.value = "";

    if (todoElement !== "") {
        let date = new Date();
        let formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        let formattedTime =`${date.getHours()}:${date.getMinutes()}`;

        let todoItem = {
            text: todoElement,
            date: formattedDate,
            time: formattedTime
        };

        todoList.push(todoItem);
        updateLocalStorage();
        displayTodo();
    }
}

function displayTodo() {
   

    let displayItem = document.getElementById('my-todo');
    displayItem.innerHTML = ""; 

    for (let i=todoList.length-1; i>0; i--) {
        displayItem.innerHTML += `
        <li>
             <div class='task-text'>${todoList[i].text}
                <div class="task-date">${todoList[i].date}</div>
                <div class="task-date">${todoList[i].time}</div> 
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
