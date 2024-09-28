let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    if (task) {
        tasks.push(task);
        taskInput.value = '';
        updateTaskList();
    } else {
        alert("Task cannot be empty!");
    }
}

function updateTask(index) {
    const newTask = prompt("Update task:", tasks[index]);
    if (newTask) {
        tasks[index] = newTask.trim();
        updateTaskList();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function updateTaskList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.onclick = () => updateTask(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deleteTask(index);

        taskButtons.appendChild(editButton);
        taskButtons.appendChild(deleteButton);

        taskItem.appendChild(taskButtons);
        taskList.appendChild(taskItem);
    });
}

document.addEventListener('DOMContentLoaded', updateTaskList);

