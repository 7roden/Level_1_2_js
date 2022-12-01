
const elementSquare = document.getElementById("square");
document.querySelector(".push1").onclick = clickButton;
function clickButton(){
  console.log("1 " + elementSquare.style.visibility);
  if (elementSquare.style.visibility == "hidden") {
    elementSquare.style.visibility = "initial";
    document.querySelector(".push").innerHTML = "Hide the square";
  } else {
    elementSquare.style.visibility = "hidden";
    document.querySelector(".push").innerHTML = "Show the square";
  }
  console.log("2 " +elementSquare.style.visibility);
};

/*
const elementSquare = document.getElementById("square");
document.querySelector(".push1").addEventListener("click", () => {
  console.log("1 " + elementSquare.style.visibility);
  if (elementSquare.style.visibility == "hidden") {
    elementSquare.style.visibility = "initial";
    document.querySelector(".push").innerHTML = "Remove";
  } else {
    elementSquare.style.visibility = "hidden";
    document.querySelector(".push").innerHTML = "Create";
  }
  console.log("2 " +elementSquare.style.visibility);
});*/