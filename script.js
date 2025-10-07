// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
  // Step 2: Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Step 3: Create the addTask Function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    if (taskText !== '') {
      // Create a new li element
      const listItem = document.createElement('li');
      // Set its textContent to taskText
      listItem.textContent = taskText;

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
      };

      // Append the remove button to the li element
      listItem.appendChild(removeButton);
      // Append the li to taskList
      taskList.appendChild(listItem);
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
});
