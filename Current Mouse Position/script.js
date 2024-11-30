let wrapper = document.querySelector(".wrapper");
let xPosition = document.querySelector("#x-position");
let yPosition = document.querySelector("#y-position");

wrapper.addEventListener("mousemove", (dets) => {
  xPosition.textContent = dets.x;
  yPosition.textContent = dets.y;
});
