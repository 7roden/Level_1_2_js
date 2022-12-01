/* Добавить на страницу желтый квадрат, и сделать так чтоб при нажатии 
на него в первый раз выводилась надпись "Привет" (alert), а при втором нажатии этот 
квадрат пропадал. (нужно менять функцию обработчик, удалять первую и ставить вторую)*/

let button = document.querySelector('.push');
let clickCounter = 0;
let square = document.getElementById('yellowSquare');

let clickButton = () =>{
(clickCounter%2 == 0) ? evenClick(): oddClick();
}

function evenClick(){
    clickCounter++;
    square.style.visibility = 'initial';
    button.innerHTML = `Number of button presses: ${clickCounter}`;
    alert('Hi');
}

function oddClick(){
    clickCounter++;
    square.style.visibility = 'hidden';
    button.innerHTML = `Number of button presses: ${clickCounter}`;
}

button.addEventListener('click', clickButton);

