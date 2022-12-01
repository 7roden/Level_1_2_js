/** Добавить на страницу инпут, в который можно ввести 
 * css selector (query selector) и при нажатии на кнопку будут скрываться/появляться 
 * те элементы, которые соответствуют этому селектору. */

let pushButton = document.querySelector(".push");

let clickButton = () => {
    let nameSelector = document.forms['myForm']['myInput'].value;
    (nameSelector == '') ? alert('You did not enter the name of the selector!!!'):hiddeElement(nameSelector);
};
function hiddeElement(nameSelector) {
    let element = document.querySelector(nameSelector);
    if (element.style.visibility != 'hidden') {
        element.style.visibility = 'hidden';
        pushButton.innerHTML = `Show element with selector: ${nameSelector}`;
    } else {
        element.style.visibility = 'initial';
        pushButton.innerHTML = 'Hide element'
    }

};
pushButton.addEventListener("click", clickButton);
