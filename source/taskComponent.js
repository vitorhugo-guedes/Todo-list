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
                padding: 1em;
                gap: 1em;
                flex-direction: column;
                align-items: initial;
            }
            .task-card{
                color: #fff;
                background: var(--task_card-color);
            }

            .task-title{
                border-bottom: var(--task_card-border_title) solid 1px;
            }
            .task-card:hover{
                transition: 0.3s;
                transform: translate3d( 0px, -8px, 2px);
            }
        `
        return style;
    }
    taskCreate(taskTitle, taskText){
        const card = document.createElement('blockquote');
        let title = document.createElement('h4');
        let content = document.createElement('p');

        title.textContent = `${taskTitle}`
        content.textContent = `${taskText}`

        title.classList.add('task-title');
        card.classList.add('task-card');
        card.classList.add('task');
        card.classList.add('flex');

        card.appendChild(title);
        card.appendChild(content);
        
        return card;
    }
    
}

customElements.define('task-card', Task);