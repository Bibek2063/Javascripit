let tasks = [];

// Display tasks
function displayTasks() {
    let html = "";
    for (let i = 0; i < tasks.length; i++) {
        html += `
            <li class="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg">
                <span>${tasks[i]}</span>
                <button 
                    onclick="removeTask(${i})" 
                    class="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600 transition"
                >x</button>
            </li>
        `;
    }
    document.getElementById("list").innerHTML = html;
}

// Add task
function addTask() {
    let taskInput = document.getElementById("task");
    let text = taskInput.value;
    if (text.trim() === "") return;
    tasks.push(text);
    taskInput.value = "";
    saveTasks();
    displayTasks();
}

// Remove task
function removeTask(i) {
    tasks.splice(i, 1);
    saveTasks();
    displayTasks();
}

// Clear all tasks
function clearAll() {
    tasks = [];
    saveTasks();
    displayTasks();
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved !== null) {
        tasks = JSON.parse(saved);
    }
}

// Initialize
loadTasks();
displayTasks();
