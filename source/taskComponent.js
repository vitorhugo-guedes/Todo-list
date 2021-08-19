class Task extends HTMLElement{
    constructor(){
        super()
        this.makeTask()
        
    }
    makeTask(){
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = 'Olá';
        shadow.appendChild(this.Styles());
        return shadow
    }
    Styles(){
        const style = document.createElement('style');
        style.textContent = `
            .algo{
                background-color: pink;
                width: 220px;
                height: 200px; 
            }
        `
        return style
    }
    
}

customElements.define('task-card', Task);