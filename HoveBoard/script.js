let container = document.querySelector(".container");

let squares = document.querySelectorAll(".square");

let colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "magenta",
  "gray",
  "white",
  "purple",
  "brown",
  "pink",
  "cyan",
  "teal",
  "seagreen",
  "darkblue",
  "darkgreen",
  "darkred",
  "darkmagenta",
  "darkgray",
];

// Random Colors

let randomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};
console.log(randomColor(colors));

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = randomColor(colors);
  });

  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "#343333";
  });
});
