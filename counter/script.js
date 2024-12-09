let decrementBtn = document.querySelector("#decrementBtn");
let incrementBtn = document.querySelector("#incrementBtn");
let counter = document.querySelector("#counter");

let value = 0;

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
function increment() {
  if (value >= 20) return;
  value++;
  counter.innerText = value;
}

function decrement() {
  if (value == -20) return;
  value--;
  counter.innerText = value;
}
