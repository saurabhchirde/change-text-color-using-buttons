const input = document.querySelector(".inputText");
const btnRed = document.querySelector(".red");
const btnGreen = document.querySelector(".green");
const btnBlue = document.querySelector(".blue");
const output = document.querySelector(".output");
const btnClear = document.querySelector(".clear");

function start() {
  input.value = "";
  output.innerText = "";
}

const red = () => {
  output.style.color = "red";
  output.innerText = input.value;
};

const green = () => {
  output.style.color = "green";
  output.innerText = input.value;
};

const blue = () => {
  output.style.color = "blue";
  output.innerText = input.value;
};

btnRed.addEventListener("click", red);
btnGreen.addEventListener("click", green);
btnBlue.addEventListener("click", blue);
btnClear.addEventListener("click", start);

start();
