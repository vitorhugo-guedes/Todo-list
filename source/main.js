import { Task } from "./taskComponent.js";
import * as Validation from "./userValidations.js"

const saveBtn = document.querySelector('#saveBtn');
export const inputTitle = document.querySelector('.input-title');
export const inputContent = document.querySelector('.input-area');
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

const pushTaskIntoUl = task =>{
    if(Validation.emptyTaskWarning()){
        tasks.push(task);
    }

}

function inputFocusOut(){
    inputTitle.addEventListener('focusout', ()=>{
        warning[0].classList.remove('vibration');
    })
    inputContent.addEventListener('focusout', ()=>{
        warning[1].classList.remove('vibration');
    })
}
inputFocusOut();

saveBtn.addEventListener('click', () => {
    const task = {title: inputTitle.value, text: inputContent.value};

    pushTaskIntoUl(task);
    displayTasks();
    update();
})

