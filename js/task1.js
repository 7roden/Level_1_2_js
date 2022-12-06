let elementSquare = document.getElementById("square");
let elementTitle = document.getElementsByClassName("title");
let elementBody = document.getElementsByClassName("task1");

function clickbutton1(elementButton1) {
    if (elementSquare.style.display != 'none') {
        elementSquare.style.display = 'none';
        elementButton1.innerHTML = '1. CSS (click for display: block)';
    } else {
        elementSquare.style.display = 'block';
        elementButton1.innerHTML = '1. CSS (click for display: none)';
    }
}

function clickbutton2(elementButton2) {
    if (elementButton2.innerHTML === '2. JS (удалить элемент)') {
        elementSquare.remove();
        elementButton2.innerHTML = '2. JS (вернуть элемент)';
    } else {
        document.querySelector('.container').appendChild(elementSquare);
        elementButton2.innerHTML = '2. JS (удалить элемент)';
    }
}

function clickbutton3() {
    console.log(elementSquare.style.visibility == "hidden");
    let elementHidden = document.getElementsByClassName("hidden");
    if (elementSquare.style.visibility != "hidden") {
        elementSquare.style.visibility = "hidden";
    } else {
        elementSquare.style.visibility = "initial";
    }
}
