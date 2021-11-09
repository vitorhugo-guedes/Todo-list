import { Task } from "./taskComponent.js";
import * as Validation from "./userValidations.js"

const saveBtn = document.querySelector('#saveBtn');
const inputTitle = document.querySelector('.input-title');
const inputContent = document.querySelector('.input-area');
const taskUl = document.querySelector('#taskList');

const localTasks = JSON.parse(localStorage.getItem('tasks'));
let tasks = localStorage.getItem('tasks') !== null ? localTasks : [];

const update = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const addTask = task => {
    const taskTemplate = new Task(task.title, task.text);
    taskUl.prepend(taskTemplate);
}

const displayTasks = () =>{
    taskUl.innerHTML = '';
    tasks.forEach(addTask);
}
displayTasks();

saveBtn.addEventListener('click', () => {
    const task = {title: inputTitle.value, text: inputContent.value};

    if(task.title | task.text == ""){
        Validation.emptyTask(task.title, task.text);
        return;
    }else{
        tasks.push(task);
    }
    displayTasks();
    update();
})