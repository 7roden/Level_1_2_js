/* Сделать блок в правом верхнем углу страницы, в котором в формате "Х: 123, У: 984" 
будут выводиться координаты курсора (обновляться в риалтайме)*/


document.querySelector('.task10').onmousemove = (event) => {
    let x = event.pageX;
    let y = event.pageY;
    document.getElementById('mouseCoord').innerHTML = 'Coordinate mouse: x: ' + x + ', y: ' + y;
};


/*
document.querySelector('.task10').onmousemove = function(event) {
    event = event || window.event; // кроссбраузерность
    console.log(event); // вывод в консоль
    document.getElementById("mouseCoord").innerHTML = event.offsetX + ', ' + event.offsetY;
}
*/

/* сбрасываем датчик координат после ухода и окна*/
document.querySelector('.task10').onmouseout = () => {
    document.getElementById('mouseCoord').innerHTML = '';
};

/* Добавить в блок в правом верхнем углу информацию о том какой язык выбран в браузере у пользователя */

document.querySelector('#lang').innerHTML = 'User language: ' + window.navigator.language || navigator.userLanguage;


/* window.navigator ? (window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage) : "ru"; */

/* Добавить в блок в правом верхнем углу отображение широты и 
долготы на которой находится человек (формат: "Ш: 34.23234, Д: 78.239482034").*/

let x = document.querySelector('#geoPosition');
getLocation();

/* Метод getCurrentPosition() возвращает текущую позицию устройства. */
/* navigator.geolocation.getCurrentPosition(success, error, options)
Значения параметров
Тип параметра Описание
success: Требуется. Функция обратного вызова, которая принимает объект Position в качестве единственного входного параметра.
error: Необязательный. Функция обратного вызова, которая принимает объект PositionError в качестве единственного входного параметра.
options: Необязательный. Объект PositionOptions
*/
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = 'your geo location Ш: ' + position.coords.latitude +
        ' Д: ' + position.coords.longitude;
}

