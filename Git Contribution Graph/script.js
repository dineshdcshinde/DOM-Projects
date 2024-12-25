let container = document.querySelector(".container");

let days = 365;
let colors = ["#39d353", "#26a641", "#006d32", "#0e4429", "#161b22"];
let gitColors = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

for (let i = 1; i <= 365; i++) {
  let div = document.createElement("div");
  div.classList.add("square");
  div.style.backgroundColor = gitColors(colors);
  container.appendChild(div);
}
