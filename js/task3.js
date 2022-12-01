let squares = document.getElementsByClassName("square");
document.querySelector(".push").onclick = clickButton;
let button = document.getElementById("button");
function clickButton() {
    console.log("1 " + squares[0].style.visibility);
    if (squares[0].style.visibility == "hidden") {
        for (let square of squares) {
            square.style.visibility = "initial";
        }
        document.querySelector(".push").innerHTML = "Hidde squares"
    } else {
        for (let square of squares) {
            square.style.visibility = "hidden";
        }
        document.querySelector(".push").innerHTML = "Show squares"
    }

}