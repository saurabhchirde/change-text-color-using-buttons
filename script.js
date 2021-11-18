const input = document.querySelector(".inputText");
const btnRed = document.querySelector(".red");
const btnGreen = document.querySelector(".green");
const btnBlue = document.querySelector(".blue");
const output = document.querySelector(".output");
const btnClear = document.querySelector(".clear");

function start() {
  input.value = "";
  output.style.color = "black";
  output.innerText = "";
}

const red = () => {
  if (input.value != "") {
    output.style.color = "red";
    output.innerText = input.value;
  } else {
    output.innerText = "Enter some text !";
  }
};

const green = () => {
  if (input.value != "") {
    output.style.color = "green";
    output.innerText = input.value;
  } else {
    output.innerText = "Enter some text !";
  }
};

const blue = () => {
  if (input.value != "") {
    output.style.color = "blue";
    output.innerText = input.value;
  } else {
    output.innerText = "Enter some text !";
  }
};

btnRed.addEventListener("click", red);
btnGreen.addEventListener("click", green);
btnBlue.addEventListener("click", blue);
btnClear.addEventListener("click", start);

start();
