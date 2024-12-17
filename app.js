
function addTask() {
    const newTask = document.createElement('li');
    const tasklist = document.getElementById('tasklist');
    tasklist.appendChild(newTask);
    newTask.textContent = document.getElementById('inputTask').value;
    document.getElementById('inputTask').value = "";
    deleteTask(newTask)
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick = function() {
        newTask.remove()
    }
}