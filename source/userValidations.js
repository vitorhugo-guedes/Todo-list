import { inputTitle, inputContent } from './main.js'

export function emptyTaskWarning() {
    const warning = document.querySelectorAll('#warning');

    warning[0].classList.remove('vibration');
    warning[1].classList.remove('vibration');

    if(inputTitle.value == ""){
        inputTitle.focus();
        warning[0].classList.toggle('vibration');

        return false;
    }
    else if(inputContent.value == ""){
        inputContent.focus();
        warning[1].classList.toggle('vibration');

        return false;
    }

    return true;
}


