let numSquare = 6;

let colors = [];

let pickedColor;

let square = document.querySelectorAll(".square");

let colorDisplay = document.getElementById("colorDisplay");

let messageDisplay = document.querySelector("#message");

let h1 = document.querySelector("h1");

let reset = document.querySelector("#reset");

let botones = document.querySelectorAll(".btns");

init();

function init() {
  botonesMode();

  squareMode();

  reseteo();
}

function botonesMode() {
  for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
      botones[0].classList.remove("selected");
      botones[1].classList.remove("selected");
      this.classList.add("selected");

      numSquare = this.textContent === "Easy" ? 3 : 6;

      reseteo();
    });
  }
}

function squareMode() {
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor; //Color=colors[i]

      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correcto!";

        reset.textContent = "Play again";

        changeColors(clickedColor);

        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";

        messageDisplay.textContent = "Intentelo nuevamente";
      }
    });
  }
}

function reseteo() {
  colors = generateRandomColors(numSquare);

  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;

  for (let i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.backgroundColor = colors[i];

      square[i].style.display = "block";
    } else {
      square[i].style.display = "none";
    }
  }

  h1.style.backgroundColor = "dimgrey";

  messageDisplay.textContent = "";

  reset.textContent = "Nuevos Colores";
}

reset.addEventListener("click", function () {
  reseteo();
});

function changeColors(colores) {
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colores;
  }
}

function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(a) {
  let arr = Array(a);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = randomColor();
  }

  return arr;
}

function randomColor() {
  let primerNum = Math.floor(Math.random() * 256);
  let segundoNum = Math.floor(Math.random() * 256);
  let tercerNum = Math.floor(Math.random() * 256);

  return "rgb(" + primerNum + ", " + segundoNum + ", " + tercerNum + ")";
}
