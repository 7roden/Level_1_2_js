/* Добавить на страницу инпут и кнопку. Если в инпут положить ссылку, 
и нажать на кнопку то на странице появится картинка полученная по ссылке, которую ввели в инпут.*/

/*
document.getElementById('button').addEventListener('click', ()=>{
    let fileName = document.forms['inputForm']['input'].value;
    document.getElementById('divImage').innerHTML = `<img src=${fileName} + alt="1">`;
});*/

document.getElementById('button').onclick = ()=>{
    let fileName = document.forms['inputForm']['input'].value;
    document.getElementById('divImage').innerHTML = `<img src=${fileName} + alt="1">`;
};