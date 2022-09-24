// variables
const inputBox = document.getElementById('inputTask');
const addBtn = document.getElementById('addBtn');
const taskContainer = document.querySelector('.task-container');

let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];


//calling the function to load tasks from local storage
savedTasks.forEach(addTask);


// adding input to saved task arrar and also showing it to task
addBtn.addEventListener('click', () => {
    let text = inputBox.value;

    if (text === '') {
        alert("Please Write a Task First");
    } else {
        savedTasks.push(text);
        localStorage.setItem('tasks', JSON.stringify(savedTasks));
        inputBox.value = '';
        addTask(text);
    }
});


//making a new task on click, also making check & delete Button for it and their functionality
function addTask(text) {
    let taskBox = document.createElement('div');
    taskBox.classList.add('taskBox');
    taskContainer.appendChild(taskBox);
    
    let task = document.createElement('li');
    task.innerText = text;
    task.classList.add('task');
    taskBox.appendChild(task);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '&#10003;';
    checkBtn.classList.add('checkBtn');
    taskBox.appendChild(checkBtn);

    checkBtn.addEventListener('click', () => {
        task.classList.toggle('check');
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&#128465;';
    deleteBtn.classList.add('deleteBtn');
    taskBox.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', (e) => {
        deleteBtn.parentElement.remove();
        savedTasks = savedTasks.filter((e) => e != text);
        localStorage.setItem('tasks', JSON.stringify(savedTasks));
    });
}