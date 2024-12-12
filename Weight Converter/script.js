let input = document.querySelector("input");
let pound = document.querySelector(".pound");

input.addEventListener("input", () => {
  let value = input.value;
  let actPound = value * 2.2;
  pound.textContent = actPound.toFixed(2);
});
