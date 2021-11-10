export class Task extends HTMLElement{
    constructor(Title, Text){
        super()
        this.init(Title, Text)
        
    }
    init(title, content){
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.Styles());
        shadow.appendChild(this.taskCreate(title, content));
        return shadow;
    }
    Styles(){
        const style = document.createElement('style');
        style.textContent = `
        *,*::before,*::after{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .flex{
            display: flex;
            align-items: center;
        }
        .task{
            gap: 1em;
            flex-direction: column;
            align-items: initial;
        }
        .task-card{
            color: #fff;
            background: var(--task_card-color);
        }
        .task-title{
            
        }
        .task-title::first-letter{
            text-transform: capitalize;
        }
        .task-card:hover{
            transition: 0.3s;
            transform: translate3d( 0px, -8px, 2px);
        }
        .task-title-wrapper{
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 1rem;
            background-color: var(--task_bg-title);
            border-bottom: var(--task_card-border_title) solid 1px;
        }
        .task-content-wrapper{
            padding: 0rem 0.5rem 1rem 1rem;
        }
        
        .remove{
            font-size: 15px;
            font-weight: bold; 
            text-decoration: none; 
            color: #fff;
            cursor: pointer;
        }

        `
        return style;
    }
    taskCreate(taskTitle, taskText){
        const card = document.createElement('blockquote');
        const titleWrapper = document.createElement('div');
        const contentWrapper = document.createElement('div');
        const closeBtn = this.createCloseBtn();
        let title = document.createElement('h4');
        let content = document.createElement('p');

        title.textContent = `${taskTitle}`;
        content.textContent = `${taskText}`;

        this.addCssClass(['task-title'], title);
        this.addCssClass(['task-title-wrapper'], titleWrapper);
        this.addCssClass(['task-content-wrapper'], contentWrapper);
        this.addCssClass(['task-card', 'task', 'flex'], card);

        titleWrapper.appendChild(title);
        titleWrapper.appendChild(closeBtn);
        contentWrapper.appendChild(content);
        card.appendChild(titleWrapper);
        card.appendChild(contentWrapper);
        
        return card;
    }
    addCssClass([...classes], element){
        classes.forEach(Class =>{
            element.classList.add(`${Class}`);
        })
    }
    createCloseBtn(){
        const closebtn = document.createElement('a');
        closebtn.textContent = 'x';
        
        this.addCssClass(['remove'], closebtn);
        closebtn.setAttribute('title', 'Remover');
        return closebtn;
    }
    
}

customElements.define('task-card', Task);