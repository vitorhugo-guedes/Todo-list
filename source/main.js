const saveBtn = document.querySelector('#saveBtn');


saveBtn.addEventListener('click', ()=>{
    addTask()
})


const addTask = () => {
    const task = document.createElement('task-card');
    const taskUl = document.querySelector('#taskList');
    taskUl.prepend(task);
}