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
            padding: 0.75rem 1rem;
            background-color: var(--task-bg-title);
            border-bottom: var(--task_card-border_title) solid 1px;
        }
        .task-content-wrapper{
            padding: 0rem 0.5rem 1rem 1rem;
        }
        `
        return style;
    }
    taskCreate(taskTitle, taskText){
        const card = document.createElement('blockquote');
        const titleWrapper = document.createElement('div');
        const contentWrapper = document.createElement('div');
        let title = document.createElement('h4');
        let content = document.createElement('p');

        title.textContent = `${taskTitle}`;
        content.textContent = `${taskText}`;

        title.classList.add('task-title');
        titleWrapper.classList.add('task-title-wrapper');
        contentWrapper.classList.add('task-content-wrapper');
        card.classList.add('task-card');
        card.classList.add('task');
        card.classList.add('flex');

        titleWrapper.appendChild(title);
        contentWrapper.appendChild(content);
        card.appendChild(titleWrapper);
        card.appendChild(contentWrapper);
        
        return card;
    }
    
}

customElements.define('task-card', Task);