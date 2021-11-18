const input = document.querySelector(".inputText");
const btnRed = document.querySelector("red");
const btnGreen = document.querySelector("green");
const btnBlue = document.querySelector(".blue");
const output = document.querySelector(".output");
const clear = document.querySelector(".clear");

function start() {
  input.value = "";
  output.innerText = "";
}

btnRed.addEventListener("click", red);
btnGreen.addEventListener("click", green);
btnBlue.addEventListener("click", blue);

start();
