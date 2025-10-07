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
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';

      removeButton.onclick = function () {
        taskList.removeChild(listItem);
      };

      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
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
