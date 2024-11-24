let btn = document.querySelector("button");
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let score = document.querySelector(".score");

let input = document.querySelector("input");

let count = 0;
let a = 5;
let b = 3;

let getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

btn.addEventListener("click", () => {
  let answer = +input.value;
  if (!answer) alert("Please enter answer");

  if (answer == a * b) {
    count++;
    score.textContent = count;
    input.value = "";

    a = getRandomNumber();
    b = getRandomNumber();
    num1.textContent = a;
    num2.textContent = b;
    input.value = "";
  } else if (answer == a * b) {
    count++;
    score.textContent = count;
    input.value = "";
  } else if (answer != a * b) {
    count;
    a = getRandomNumber();
    b = getRandomNumber();
    num1.textContent = a;
    num2.textContent = b;
    input.value = "";
  }
});
