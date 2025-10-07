// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
  // Step 2: Select DOM Elements
  const addButton = document.getElementById('add-button');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const taskCount = document.getElementById('task-count');

  // Function to update task count
  function updateTaskCount() {
    const tasks = taskList.getElementsByTagName('li');
    taskCount.textContent = tasks.length;

    // Show empty state if no tasks
    if (tasks.length === 0) {
      taskList.innerHTML =
        '<div class="empty-state">No tasks yet. Add a task to get started!</div>';
    }
  }

  // Step 3: Create the addTask Function
  function addTask() {
    // Retrieve and trim the task input value
    const taskText = taskInput.value.trim();

    // Check if task text is empty
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    // Step 4: Task Creation and Removal
    if (taskText !== '') {
      // Create new list item
      const listItem = document.createElement('li');

      // Create task text element
      const taskTextElement = document.createElement('span');
      taskTextElement.className = 'task-text';
      taskTextElement.textContent = taskText;

      // Create remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';

      // Assign onclick event to remove button
      removeButton.onclick = function () {
        taskList.removeChild(listItem);
        updateTaskCount();
      };

      // Append elements to list item
      listItem.appendChild(taskTextElement);
      listItem.appendChild(removeButton);

      // Clear any empty state message
      if (taskList.querySelector('.empty-state')) {
        taskList.innerHTML = '';
      }

      // Append list item to task list
      taskList.appendChild(listItem);

      // Clear the task input field
      taskInput.value = '';

      // Update task count
      updateTaskCount();

      // Focus back on input for better UX
      taskInput.focus();
    }
  }

  // Step 5: Attach Event Listeners

  // Add task when button is clicked
  addButton.addEventListener('click', addTask);

  // Add task when Enter key is pressed
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Initialize task count
  updateTaskCount();
});
