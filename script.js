// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
  // Step 2: Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Initialize tasks array
  let tasks = [];

  // Step 3: Load Tasks from Local Storage when page loads
  function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
      tasks.forEach((taskText) => {
        createTaskElement(taskText, false); // 'false' means don't save to Local Storage again
      });
    }
  }

  // Function to create task element (separated from addTask for reuse)
  function createTaskElement(taskText, saveToStorage = true) {
    // Create a new li element
    const listItem = document.createElement('li');

    // Create task text span
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskTextSpan.className = 'task-text';

    // Create a new button element for removing the task
    const removeButton = document.createElement('button');
    // Set its textContent to "Remove"
    removeButton.textContent = 'Remove';
    // Give it a class name of 'remove-btn'
    removeButton.classList.add('remove-btn');

    // Assign an onclick event to the remove button
    removeButton.onclick = function () {
      // Remove the li element from taskList
      taskList.removeChild(listItem);

      // Remove from tasks array and update Local Storage
      const taskIndex = tasks.indexOf(taskText);
      if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    };

    // Append elements to list item
    listItem.appendChild(taskTextSpan);
    listItem.appendChild(removeButton);

    // Append the li to taskList
    taskList.appendChild(listItem);

    // Save to Local Storage if requested
    if (saveToStorage) {
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  // Step 4: Modified addTask Function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    if (taskText !== '') {
      createTaskElement(taskText, true); // 'true' means save to Local Storage

      // Clear the task input field
      taskInput.value = '';
    }
  }

  // Step 5: Attach Event Listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Load tasks from Local Storage when page loads
  loadTasks();
});
