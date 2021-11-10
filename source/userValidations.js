import { inputTitle, inputContent } from './main.js'

const warning = document.querySelectorAll('#warning');

export function emptyTask() {

    warning[0].classList.remove('vibration');
    warning[1].classList.remove('vibration');

    if(inputTitle.value == ""){
        inputTitle.focus();
        warning[0].classList.add('vibration');

        return false;
    }
    else if(inputContent.value == ""){
        inputContent.focus();
        warning[1].classList.add('vibration');

        return false;
    }

    return true;
}


//make better
export function inputFocusOut(){
    inputTitle.addEventListener('focusout', ()=>{
        if(warning[0].classList.contains('vibration')){
            warning[0].classList.remove('vibration');
        }
    })
    inputContent.addEventListener('focusout', ()=>{
        if(warning[1].classList.contains('vibration')){
            warning[1].classList.remove('vibration');
        }
    })

}


