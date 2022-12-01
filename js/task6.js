/* Добавить на страницу красный квадрат 50х50 пх, который будет появляться 
как только человек наводит курсор на кнопку, и скрываться как только 
человек убирает курсор с кнопки*/

document.querySelector('.push').addEventListener('mouseover',()=>{
    document.getElementById('redSquare').style.visibility = 'initial';
});

document.querySelector('.push').addEventListener('mouseout',()=>{
    document.getElementById('redSquare').style.visibility = 'hidden';
});
