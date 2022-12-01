/* Добавить на страницу зеленый прямоугольник 50х20 пх, который будет 
появляться как только человек фокусируется на инпуте и исчезать как 
только человек начинает писать текст в этот инпут.*/

let inputForm = document.getElementById('iInput');

/* при наведении мыши на инпут появляется зеленый прямоугольник*/
inputForm.addEventListener('mouseover', ()=>{
    document.getElementById('greenSquare').style.visibility = 'initial';
});


/* при отводе мыши с инпута прямоугольник исчезает*/
inputForm.addEventListener('mouseout', ()=>{
    document.getElementById('greenSquare').style.visibility = 'hidden';
    inputForm.backgroundColor = 'white';
});

/* при фокусировке на инпуте фон инпута становится серым*/
inputForm.addEventListener('focusin', ()=>inputForm.backgroundColor = 'grey');

/* при начале ввода текста прямоугольник исчезает и фон инпута становится желтым*/
inputForm.addEventListener('input', ()=>{
    document.getElementById('greenSquare').style.visibility = 'hidden';
    inputForm.style.backgroundColor = "yellow";
});