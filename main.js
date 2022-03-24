const backgroundColors = ["yellow", "red", "green", "blue", "black", "orange", "pink"];

document.getElementById("button").onclick = function changeColor(){

    document.body.style.backgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
}