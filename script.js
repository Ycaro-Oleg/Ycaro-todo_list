const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();

  if (taskInput.value) {
    // Create a new task item and its elements
    const task = document.createElement('li');
    task.classList.add('task');
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = taskInput.value;
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-button');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    
    //Adiciona o botão de completar e deletar juntamente com o texto
    task.appendChild(taskText);
    task.appendChild(completeButton);
    task.appendChild(deleteButton);
    
    // Adiciona o item da task na lista
    taskList.appendChild(task);
    
   // Da clear no input da task
    taskInput.value = '';
  }
});

taskList.addEventListener('click', function(e) {
  if (e.target.matches('.complete-button')) {

    const task = e.target.parentElement;

    task.classList.toggle('completed');
    task.style.backgroundColor='lightgreen';


  } else if (e.target.matches('.delete-button')) {

    const task = e.target.parentElement;

    taskList.removeChild(task);
  }
});